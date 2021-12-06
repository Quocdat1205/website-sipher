import { useQuery } from "react-query"
import { useEffect, useState } from "react"
import useWalletContext from "@hooks/web3/useWalletContext"

export type Status = "LOADING" | "NOT_STARTED" | "ONGOING" | "ENDED" | "NOT_CONNECTED"

const useSaleTime = () => {
    const { scCaller, account, ethereum } = useWalletContext()
    const { data: startTime, isLoading: isLoadingStartTime } = useQuery(
        ["start-time", ethereum],
        () => scCaller.current!.SipherIBCO.getStartTime(),
        {
            enabled: !!scCaller.current || ethereum,
        }
    )

    const { data: endTime, isLoading: isLoadingEndTime } = useQuery(
        ["end-time", ethereum],
        () => scCaller.current!.SipherIBCO.getEndTime(),
        {
            enabled: !!scCaller.current || ethereum,
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
        : "ENDED"

    return {
        startTime,
        endTime,
        status,
    }
}

export default useSaleTime
