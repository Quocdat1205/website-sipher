import { Flex, Box, Text } from "@chakra-ui/react"
import Loader from "@components/shared/Loader"
import { useTimer } from "react-timer-hook"
import PrivateCountdown from "@components/shared/PrivateCountdown"
import { useEffect, useState } from "react"

interface CountdownProps {
    startTime: number
    endTime: number
}

const Countdown = ({ startTime, endTime }: CountdownProps) => {
    const timer = useTimer({ expiryTimestamp: new Date(endTime) })
    const [now, setNow] = useState(0)
    const isSale = now >= startTime && now <= endTime

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
                        time1={{ value: isSale ? timer.days : 0, unit: "days" }}
                        time2={{ value: isSale ? timer.hours : 0, unit: "hours" }}
                        time3={{ value: isSale ? timer.minutes : 0, unit: "mins" }}
                    />
                </Flex>
                <Loader percent={isSale ? ((endTime - now) * 100) / (endTime - startTime) : 100} />
            </Box>
        </Flex>
    )
}

export default Countdown
