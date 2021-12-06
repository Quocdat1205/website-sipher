import { useQuery } from "react-query"
import { useEffect, useState } from "react"
import useWalletContext from "@hooks/web3/useWalletContext"

export type Status = "LOADING" | "NOT_STARTED" | "ONGOING" | "ENDED" | "NOT_CONNECTED" | "ERROR"

const useSaleTime = () => {
    const { scCaller, account } = useWalletContext()
    const { data: startTime, isLoading: isLoadingStartTime } = useQuery(
        ["start-time", account],
        () => scCaller.current!.SipherIBCO.getStartTime(),
        {
            enabled: !!scCaller.current,
        }
    )

    const { data: endTime, isLoading: isLoadingEndTime } = useQuery(
        ["end-time", account],
        () => scCaller.current!.SipherIBCO.getEndTime(),
        {
            enabled: !!scCaller.current,
        }
    )

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
        : now >= endTime!
        ? "ENDED"
        : "ERROR"

    return {
        startTime,
        endTime,
        status,
    }
}

export default useSaleTime
