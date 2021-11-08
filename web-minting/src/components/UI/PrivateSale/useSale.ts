import { checkSmartContract } from "@api/smartContract"
import { getMetamaskBalance } from "@helper/metamask"
import { sendSmartContract } from "@helper/smartContract"
import useWalletContext from "@hooks/useWalletContext"
import { useState } from "react"
import { useQueryClient } from "react-query"
import { useTimer } from "react-timer-hook"
import useTransactionToast from "@hooks/useTransactionToast"

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
    const isOnSale = mode === salePhaseName
    // private sale = 3, free minting = 4
    const currentPhase: "NOT_STARTED" | "ENDED" | "ON_GOING" =
        mode === "PRIVATE_SALE"
            ? salePhase < 4
                ? "NOT_STARTED"
                : salePhase > 4
                ? "ENDED"
                : "ON_GOING"
            : salePhase < 5
            ? "NOT_STARTED"
            : salePhase > 5
            ? "ENDED"
            : "ON_GOING"
    const privateSaleStartTimer = useTimer({ expiryTimestamp: new Date(privateTime) })
    const privateSaleEndTimer = useTimer({ expiryTimestamp: new Date(freeMintTime) })
    // const freeMintingStartTimer = privateSaleEndTimer
    const freeMintingStartTimer = useTimer({ expiryTimestamp: new Date(1636405201000) })
    const freeMintingEndTimer = useTimer({ expiryTimestamp: new Date(1636491600000) })
    const timer = () => {
        if (currentPhase === "NOT_STARTED")
            return mode === "PRIVATE_SALE" ? privateSaleStartTimer : freeMintingStartTimer
        else return mode === "PRIVATE_SALE" ? privateSaleEndTimer : freeMintingEndTimer
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
            console.log(error)
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
