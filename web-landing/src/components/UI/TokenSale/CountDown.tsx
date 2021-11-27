import { Flex, Box, Text } from "@chakra-ui/react"
import Loader from "@components/shared/Loader"
import { useTimer } from "react-timer-hook"
import PrivateCountdown from "@components/shared/PrivateCountdown"
import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import useWalletContext from "@hooks/web3/useWalletContext"
import { Status } from "./useSaleTime"

interface CountdownProps {
    status: Status
}

const Countdown = ({ status }: CountdownProps) => {
    const [now, setNow] = useState(0)
    const { scCaller } = useWalletContext()

    const { data: startTime } = useQuery("start-time", () => scCaller.current!.getStartTime(), {
        initialData: new Date().getTime(),
        enabled: !!scCaller.current,
    })

    const { data: endTime } = useQuery("end-time", () => scCaller.current!.getEndTime(), {
        initialData: new Date().getTime(),
        enabled: !!scCaller.current,
        onSuccess: data => timerEnd.restart(new Date(data)),
    })

    const isSale = now >= startTime! && now <= endTime!

    const isEndSale = now > endTime!

    const timerStart = useTimer({ expiryTimestamp: new Date(startTime!) })
    const timerEnd = useTimer({ expiryTimestamp: new Date(endTime!) })

    useEffect(() => {
        const interval = setInterval(() => {
            setNow(new Date().getTime())
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <Flex direction="column" align="center" h="full" pt={8} pos="relative">
            <Box boxSize="16rem" position="relative">
                <Flex pos="absolute" w="full" h="full" align="center" justify="center">
                    <PrivateCountdown
                        time1={{
                            value: !isEndSale ? (status === "NOT_STARTED" ? timerStart.days : timerEnd.days) : 0,
                            unit: "days",
                        }}
                        time2={{
                            value: !isEndSale ? (status === "NOT_STARTED" ? timerStart.hours : timerEnd.hours) : 0,
                            unit: "hours",
                        }}
                        time3={{
                            value: !isEndSale ? (status === "NOT_STARTED" ? timerStart.minutes : timerEnd.minutes) : 0,
                            unit: "mins",
                        }}
                    />
                </Flex>
                {isSale && <Loader percent={isSale ? ((endTime! - now) * 100) / (endTime! - startTime!) : 100} />}
            </Box>
        </Flex>
    )
}

export default Countdown
