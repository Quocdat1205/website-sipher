import { INTERVAL, PRICE_STEP } from "@constant/index"
import { useEffect, useState } from "react"

const ONE_MINUTE = 1000 * 60

const useTimeAndPrice = ({ publicTime }: { publicTime: number }) => {
    const [currentTime, setCurrentTime] = useState(new Date().getTime())
    useEffect(() => {
        let timeout = setTimeout(() => setCurrentTime(new Date().getTime()), 250)
        return () => clearTimeout(timeout)
    }, [setCurrentTime, currentTime])
    const milisecondsLeft = INTERVAL - ((currentTime - publicTime) % INTERVAL)
    const secondsLeft = Math.abs(Math.round((milisecondsLeft % ONE_MINUTE) / 1000))
    const minutesLeft = Math.abs(Math.round((milisecondsLeft - secondsLeft * 1000) / ONE_MINUTE))

    const percent = 100 - (((currentTime - publicTime) % INTERVAL) / INTERVAL) * 100

    const currentPublicPrice = 0.9 - Math.floor((currentTime - publicTime) / INTERVAL) * PRICE_STEP
    return {
        minutesLeft,
        secondsLeft,
        percent,
        currentPublicPrice,
    }
}

export default useTimeAndPrice
