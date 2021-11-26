import { useQuery } from "react-query"
import { useEffect, useState } from "react"
import useWalletContext from "@hooks/web3/useWalletContext"

type Status = "LOADING" | "NOT_STARTED" | "ONGOING" | "ENDED" | "NOT_CONNECTED"

const useSaleTime = () => {
    const { scCaller, account } = useWalletContext()

    const { data: startTime, isLoading: isLoadingStartTime } = useQuery(
        "start-time",
        () => scCaller.current!.getStartTime(),
        {
            enabled: !!scCaller.current,
        }
    )

    const { data: endTime, isLoading: isLoadingEndTime } = useQuery("end-time", () => scCaller.current!.getEndTime(), {
        enabled: !!scCaller.current,
    })

    const [now, setNow] = useState(new Date().getTime())

    useEffect(() => {
        const interval = setInterval(() => {
            setNow(new Date().getTime())
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    const status: Status = !account
        ? "NOT_CONNECTED"
        : isLoadingStartTime || isLoadingEndTime
        ? "LOADING"
        : now < startTime!
        ? "NOT_STARTED"
        : now < endTime!
        ? "ONGOING"
        : "ENDED"

    return {
        startTime,
        endTime,
        status,
    }
}

export default useSaleTime
