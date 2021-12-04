import { useEffect, useState } from "react"
import { startTime, endTime } from "@constant/index"

export type Status = "NOT_STARTED" | "ONGOING" | "ENDED"

const useSaleTime = () => {
    const [now, setNow] = useState(new Date().getTime())

    useEffect(() => {
        const interval = setInterval(() => {
            setNow(new Date().getTime())
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    const status: Status = now < startTime! ? "NOT_STARTED" : now < endTime! ? "ONGOING" : "ENDED"

    return {
        status,
    }
}

export default useSaleTime
