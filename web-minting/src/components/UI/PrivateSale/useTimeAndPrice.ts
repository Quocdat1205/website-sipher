import useSaleConfig from "@hooks/useSaleConfig"
import { useEffect, useState } from "react"

const ONE_MINUTE = 1000 * 60
const ONE_HOUR = ONE_MINUTE * 60
const useTimeAndPrice = (mode: "PRIVATE_SALE" | "FREE_MINTING") => {
    const [currentTime, setCurrentTime] = useState(new Date().getTime())
    const {
        saleConfig: { privateTime, freeMintTime, endTime },
    } = useSaleConfig()
    const startSaleTime = mode === "PRIVATE_SALE" ? privateTime : freeMintTime
    const endSaleTime = mode === "PRIVATE_SALE" ? freeMintTime : endTime
    useEffect(() => {
        let timeout = setTimeout(() => setCurrentTime(new Date().getTime()), 250)
        return () => clearTimeout(timeout)
    }, [setCurrentTime, currentTime])
    const milisecondsLeft = endSaleTime - currentTime
    const minutesLeft = Math.abs(Math.round((milisecondsLeft % ONE_HOUR) / ONE_MINUTE))
    const hoursLeft = Math.abs(Math.round((milisecondsLeft - minutesLeft * ONE_MINUTE) / ONE_HOUR))

    const percent = (milisecondsLeft / (endSaleTime - startSaleTime)) * 100
    return {
        minutesLeft,
        hoursLeft,
        percent,
    }
}

export default useTimeAndPrice
