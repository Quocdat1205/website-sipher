import { checkSmartContract } from "@api"
import { PUBLIC_CAP } from "@constant/index"
import { getMetamaskBalance, getPublicCurrentPrice, sendSmartContract } from "@helper"
import useTimeAndPrice from "./useTimeAndPrice"
import { useWalletContext, useSaleRecord, useTransactionToast, usePublicCapLimit } from "@hooks"
import { useState } from "react"
import { useQueryClient } from "react-query"
import { useTimer } from "react-timer-hook"

const usePublicSale = () => {
    const {
        states,
        toast,
        userRecord,
        isLoadingUserRecord,
        config: { saleConfig, salePhase, salePhaseName },
    } = useWalletContext()
    const { publicSaleCapLimit } = usePublicCapLimit()
    const { publicSale } = useSaleRecord()
    const queryClient = useQueryClient()
    const [isMinting, setIsMinting] = useState(false)
    const [slot, setSlot] = useState(0)
    const maxSlot = PUBLIC_CAP - userRecord!.publicBought
    const nftRemaining = publicSaleCapLimit! - publicSale
    const isOnSale = salePhaseName === "PUBLIC_SALE" && nftRemaining > 0
    const timeAndPrice = useTimeAndPrice({
        publicTime: saleConfig!.publicTime,
        publicEndTime: saleConfig!.publicEndTime,
    })
    const transactionToast = useTransactionToast({ defaultDuration: 25000, isPublic: true })
    const isPriceDecreasing = timeAndPrice.currentPublicPrice > 0.1 && isOnSale
    const { publicSale: publicSaleRecord } = useSaleRecord()

    const currentPhase: "NOT_STARTED" | "ENDED" | "ON_GOING" =
        salePhase < 2 ? "NOT_STARTED" : salePhase > 2 ? "ENDED" : "ON_GOING"
    const endSaleTimer = useTimer({ expiryTimestamp: new Date(saleConfig.publicEndTime) })
    const startSaleTimer = useTimer({ expiryTimestamp: new Date(saleConfig.publicTime) })
    const timer = currentPhase === "NOT_STARTED" ? startSaleTimer : endSaleTimer
    const isOnTier = timeAndPrice.currentPublicPrice >= 0.55

    const mint = async (currentPrice: number) => {
        let slotPrice = parseFloat((slot * currentPrice).toFixed(2))
        const {
            accountLogin: address,
            whitelistInfo: { freeMintCap, privateCap, proof },
        } = states
        await sendSmartContract({ address, slot, slotPrice, proof, privateCap, freeMintCap })

        transactionToast({ status: "success" })
        setSlot(0)
    }
    const handleMint = async () => {
        const currentPrice = await getPublicCurrentPrice()
        /** Check for balance */
        const balance = await getMetamaskBalance(states.accountLogin)
        if (balance < currentPrice) {
            toast({ status: "error", title: "Insufficient balance!" })
            return
        }

        /** Check Smart Contract */
        let checkSC = await checkSmartContract(states.accountLogin)
        if (!checkSC) {
            toast({ status: "error", title: "Failed to check smart contract!" })
            return
        }

        /** Check public cap overflow */
        if (publicSaleRecord + slot > publicSaleCapLimit!) {
            toast({ status: "error", title: "Failed to mint!", message: "Public sale capacity overflow." })
            return
        }

        /** Start minting if there's nothing wrong */
        try {
            setIsMinting(true)
            transactionToast({ status: "processing" })
            await mint(currentPrice)
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
        maxSlot,
        userRecord,
        isMinting,
        handleMint,
        isOnSale,
        isLoadingUserRecord,
        timeAndPrice,
        currentPhase,
        timer,
        isPriceDecreasing,
        isOnTier,
        nftRemaining,
    }
}

export default usePublicSale
