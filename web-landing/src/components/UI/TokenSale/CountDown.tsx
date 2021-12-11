import { Flex, Box } from "@chakra-ui/react"
import Loader from "@components/shared/Loader"
import { useTimer } from "react-timer-hook"
import PrivateCountdown from "@components/shared/PrivateCountdown"
import { ReactNode, useEffect, useState } from "react"
import { useQuery } from "react-query"
import useWalletContext from "@hooks/web3/useWalletContext"
import { Status } from "./useSaleTime"

interface CountdownProps {
    status: Status
    noLoader?: boolean
}

const createBorder = () => {
    const elements: ReactNode[] = []
    for (let i = 0; i < 12; i++) {
        elements.push(
            <Box
                key={i}
                transformOrigin="0% 100%"
                transform={`rotate(${i * 30}deg)`}
                pos="absolute"
                overflow="hidden"
                top="0"
                right="0"
                w="50%"
                h="50%"
                bg="transparent"
            >
                <Box
                    pos="absolute"
                    w="2px"
                    h={i % 3 === 0 ? "8px" : "4px"}
                    textAlign="center"
                    bg={i % 3 === 0 ? "#404040" : "border.gray"}
                />
            </Box>
        )
    }
    return (
        <Box overflow="hidden" borderRadius="full" w="full" h="full" pos="relative">
            {elements}
        </Box>
    )
}

const Countdown = ({ status, noLoader }: CountdownProps) => {
    const [now, setNow] = useState(0)
    const { scCaller } = useWalletContext()

    const { data: startTime } = useQuery("start-time", () => scCaller.current!.SipherIBCO.getStartTime(), {
        initialData: new Date().getTime(),
        enabled: !!scCaller.current,
    })

    const { data: endTime } = useQuery("end-time", () => scCaller.current!.SipherIBCO.getEndTime(), {
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
        <Flex direction="column" align="center" pos="relative" pt={[0, 0, 10]} mb={[4, 4, 0]}>
            <Box boxSize={["auto", "auto", "18rem"]} position="relative">
                <Flex pos={["static", "static", "absolute"]} w="full" h="full" align="center" justify="center">
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
                {isSale && !noLoader && <Loader percent={((endTime! - now) * 100) / (endTime! - startTime!)} />}
                {!isEndSale && !noLoader && (
                    <Box
                        zIndex={1}
                        pos="absolute"
                        boxSize="16.5rem"
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%)"
                    >
                        <Loader
                            isSecond
                            percent={((status === "NOT_STARTED" ? timerStart.seconds : timerEnd.seconds) / 60) * 100}
                        />
                    </Box>
                )}
                {!isEndSale && !noLoader && (
                    <Box
                        overflow="hidden"
                        pos="absolute"
                        boxSize="13rem"
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%)"
                    >
                        {createBorder()}
                    </Box>
                )}
            </Box>
        </Flex>
    )
}

export default Countdown
