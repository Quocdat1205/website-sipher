import { checkSmartContract } from "@api"
import { getMetamaskBalance, sendSmartContract } from "@helper"
import { useTransactionToast, useWalletContext } from "@hooks"
import { useState } from "react"
import { useQueryClient } from "react-query"
import { useTimer } from "react-timer-hook"

const useSale = (mode: "PRIVATE_SALE" | "FREE_MINTING") => {
    const price = mode === "PRIVATE_SALE" ? 0.1 : 0
    const {
        states,
        toast,
        userRecord,
        isLoadingUserRecord,
        config: {
            saleConfig: { freeMintTime, endTime, privateTime },
            salePhase,
            salePhaseName,
        },
    } = useWalletContext()
    const transactionToast = useTransactionToast({ defaultDuration: 8000 })

    const [slot, setSlot] = useState(0)
    const [isMinting, setIsMinting] = useState(false)
    const queryClient = useQueryClient()
    const totalPrice = parseFloat((slot * price).toFixed(2))
    const isOnSale = mode === salePhaseName && mode === "FREE_MINTING"
    // private sale = 3, free minting = 4
    const currentPhase: "NOT_STARTED" | "ENDED" | "ON_GOING" =
        mode === "PRIVATE_SALE" ? "ENDED" : salePhase < 5 ? "NOT_STARTED" : salePhase > 5 ? "ENDED" : "ON_GOING"
    const freeMintingStartTimer = useTimer({ expiryTimestamp: new Date(freeMintTime) })
    const freeMintingEndTimer = useTimer({ expiryTimestamp: new Date(endTime) })
    const timer = () => {
        if (mode === "PRIVATE_SALE")
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            }
        if (currentPhase === "NOT_STARTED") return freeMintingStartTimer
        else return freeMintingEndTimer
    }
    const getMaxSlot = () => {
        if (mode === "PRIVATE_SALE") {
            return userRecord ? Math.max(states.whitelistInfo.privateCap - userRecord.whitelistBought, 0) : 0
        } else {
            return userRecord ? Math.max(states.whitelistInfo.freeMintCap - userRecord.freeMintBought, 0) : 0
        }
    }

    const maxSlot = getMaxSlot()

    const mint = async () => {
        const {
            accountLogin: address,
            whitelistInfo: { freeMintCap, privateCap, proof },
        } = states
        await sendSmartContract({ address, slot, slotPrice: totalPrice, proof, privateCap, freeMintCap })
        transactionToast({ status: "success" })
        setSlot(0)
    }

    const handleMint = async () => {
        /** Check for balance */
        const balance = await getMetamaskBalance(states.accountLogin)
        if (balance < price) {
            toast({ status: "error", title: "Insufficient balance!" })
            return
        }

        /** Check Smart Contract */
        let checkSC = await checkSmartContract(states.accountLogin)
        if (!checkSC) {
            toast({ status: "error", title: "Failed to check smart contract!" })
            return
        }

        /** Start minting if there's nothing wrong */
        try {
            setIsMinting(true)
            transactionToast({ status: "processing" })
            await mint()
            queryClient.invalidateQueries("total-supply")
            queryClient.invalidateQueries("user-record")
            setIsMinting(false)
        } catch (error) {
            transactionToast({ status: "failed" })
            setIsMinting(false)
        }
    }

    return {
        slot,
        setSlot,
        userRecord,
        isMinting,
        handleMint,
        maxSlot,
        isOnSale,
        price,
        totalPrice,
        isLoadingUserRecord,
        currentPhase,
        timer: timer(),
    }
}

export default useSale
