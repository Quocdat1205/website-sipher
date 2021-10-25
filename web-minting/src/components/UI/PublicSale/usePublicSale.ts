import { checkSmartContract } from "@api/smartContract"
import { PUBLIC_CAP } from "@constant/index"
import { getMetamaskBalance } from "@helper/metamask"
import { getPublicCurrentPrice, sendSmartContract } from "@helper/smartContract"
import useSaleConfig from "@hooks/useSaleConfig"
import useTimeAndPrice from "@components/UI/PublicSale/useTimeAndPrice"
import useWalletContext from "@hooks/useWalletContext"
import { useState } from "react"
import { useQueryClient } from "react-query"

const usePublicSale = () => {
    const { states, toast, userRecord, isLoadingUserRecord } = useWalletContext()
    const { saleConfig, salePhaseName } = useSaleConfig()
    const queryClient = useQueryClient()
    const [isMinting, setIsMinting] = useState(false)
    const [slot, setSlot] = useState(0)
    const maxSlot = PUBLIC_CAP - (userRecord ? userRecord.publicBought : 0)
    const isOnSale = salePhaseName === "PUBLIC_SALE"
    const timeAndPrice = useTimeAndPrice({ publicTime: saleConfig!.publicTime })
    const mint = async (currentPrice: number) => {
        let slotPrice = parseFloat((slot * currentPrice).toFixed(2))
        const {
            accountLogin: address,
            whitelistInfo: { freeMintCap, privateCap, proof },
        } = states
        await sendSmartContract({ address, slot, slotPrice, proof, privateCap, freeMintCap })
        toast({ status: "success", title: "Transaction created successfully!", duration: 6000 })
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

        /** Start minting if there's nothing wrong */
        try {
            setIsMinting(true)
            await mint(currentPrice)
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
        maxSlot,
        userRecord,
        isMinting,
        handleMint,
        isOnSale,
        isLoadingUserRecord,
        timeAndPrice,
    }
}

export default usePublicSale