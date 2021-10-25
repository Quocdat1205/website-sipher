import { checkSmartContract } from "@api/smartContract"
import { getMetamaskBalance } from "@helper/metamask"
import { sendSmartContract } from "@helper/smartContract"
import useSaleConfig from "@hooks/useSaleConfig"
import useWalletContext from "@hooks/useWalletContext"
import { useState } from "react"
import { useQueryClient } from "react-query"
import useTimeAndPrice from "./useTimeAndPrice"

const useSale = (mode: "PRIVATE_SALE" | "FREE_MINTING") => {
    const price = mode === "PRIVATE_SALE" ? 0.1 : 0
    const { states, toast, userRecord, isLoadingUserRecord } = useWalletContext()
    const { salePhaseName } = useSaleConfig()
    const [slot, setSlot] = useState(0)
    const [isMinting, setIsMinting] = useState(false)
    const queryClient = useQueryClient()
    const totalPrice = parseFloat((slot * price).toFixed(2))
    const isOnSale = mode === salePhaseName
    const timeAndPrice = useTimeAndPrice(mode)
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
        toast({ status: "success", title: "Transaction created successfully!", duration: 6000 })
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
            await mint()
            queryClient.invalidateQueries("total-supply")
            queryClient.invalidateQueries("user-record")
            setIsMinting(false)
        } catch (error) {
            console.log(error)
            toast({ status: "error", title: "Something went wrong!", message: "Try again later." })
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
        timeAndPrice,
    }
}

export default useSale
