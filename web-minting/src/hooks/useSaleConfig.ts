import { PRICE_STEP, START_PRICE, INTERVAL } from "@constant/index"
import { metaMaskProvider } from "@helper/metamask"
import { getSaleConfig, ISaleConfig } from "@helper/smartContract"
import { useEffect, useState } from "react"
import { useQuery } from "react-query"

const salePhases = {
    0: "UNKNOWN",
    1: "NOT_FOR_SALE",
    2: "PUBLIC_SALE",
    3: "PUBLIC_END_SALE",
    4: "PRIVATE_SALE",
    5: "FREE_MINTING",
    6: "END_SALE",
} as const
interface PublicPriceStep {
    value: number
    timeStamp: number
}

/** Set sale status based on sale config get from smart contract */
const getSalePhase = (saleConfig: ISaleConfig) => {
    let now = new Date().getTime()
    let currentSalePhase: number
    if (now < saleConfig.publicTime) {
        currentSalePhase = 1
    } else if (now < saleConfig.publicEndTime) {
        currentSalePhase = 2
    } else if (now < saleConfig.privateTime) {
        currentSalePhase = 3
    } else if (now < saleConfig.freeMintTime) {
        currentSalePhase = 4
    } else if (now < saleConfig.endTime) {
        currentSalePhase = 5
    } else {
        currentSalePhase = 6
    }
    return currentSalePhase
}

const genPriceSteps = (publicTime: number) => {
    let price = 0.9
    let steps: PublicPriceStep[] = []
    while (price > PRICE_STEP) {
        steps.push({
            value: price,
            timeStamp: Math.round((START_PRICE - price) / PRICE_STEP) * INTERVAL + publicTime,
        })
        price -= PRICE_STEP
    }
    return steps
}

const useSaleConfig = () => {
    const [salePhase, setSalePhase] = useState(0)
    const [priceSteps, setPriceSteps] = useState<PublicPriceStep[]>([])
    const { data: saleConfig } = useQuery("sale-config", getSaleConfig, {
        enabled: !!metaMaskProvider,
        initialData: {
            publicTime: 0,
            privateTime: 0,
            publicEndTime: 0,
            freeMintTime: 0,
            endTime: 0,
            maxSupply: 0,
        },
        onSuccess: data => {
            setSalePhase(getSalePhase(data))
            setPriceSteps(genPriceSteps(data.publicTime))
        },
        onError: () => {
            console.log("Failed to get sale config!")
        },
    })

    useEffect(() => {
        let timeout = setTimeout(() => {
            if (saleConfig) setSalePhase(getSalePhase(saleConfig))
        }, 500)
        return () => clearTimeout(timeout)
    })

    const salePhaseName = salePhases[salePhase]

    return {
        saleConfig: saleConfig as ISaleConfig,
        salePhase,
        salePhaseName,
        priceSteps,
    }
}

export default useSaleConfig
