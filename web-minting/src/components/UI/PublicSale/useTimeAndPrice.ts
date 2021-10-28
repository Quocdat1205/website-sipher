import { INTERVAL, PRICE_STEP } from "@constant/index"
import { useEffect, useState } from "react"

const ONE_MINUTE = 1000 * 60

const useTimeAndPrice = ({ publicTime, publicEndTime }: { publicTime: number; publicEndTime: number }) => {
    const [currentTime, setCurrentTime] = useState(new Date().getTime())
    useEffect(() => {
        let timeout = setTimeout(() => setCurrentTime(new Date().getTime()), 250)
        return () => clearTimeout(timeout)
    }, [setCurrentTime, currentTime])
    const milisecondsLeft = INTERVAL - ((currentTime - publicTime) % INTERVAL)
    const secondsLeft = Math.abs(Math.round((milisecondsLeft % ONE_MINUTE) / 1000))
    const minutesLeft = Math.abs(Math.round((milisecondsLeft - secondsLeft * 1000) / ONE_MINUTE))

    const currentPublicPrice = Math.max(0.1, 0.9 - Math.floor((currentTime - publicTime) / INTERVAL) * PRICE_STEP)

    const percent = 100 - (((currentTime - publicTime) % INTERVAL) / INTERVAL) * 100
    return {
        minutesLeft: currentPublicPrice === 0.1 ? 0 : minutesLeft,
        secondsLeft: currentPublicPrice === 0.1 ? 0 : secondsLeft,
        percent: currentPublicPrice === 0.1 ? 100 : percent,
        currentPublicPrice,
    }
}

export default useTimeAndPrice
