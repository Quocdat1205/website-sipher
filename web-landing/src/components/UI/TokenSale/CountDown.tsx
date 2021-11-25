import { Flex, Box, Text } from "@chakra-ui/react"
import Loader from "@components/shared/Loader"
import { TimerResult } from "react-timer-hook"
import PrivateCountdown from "@components/shared/PrivateCountdown"

interface CountdownProps {
    percent: number
    timeLeft: Record<"days" | "hours" | "minutes" | "seconds", number>
    isSale: boolean
}

const Countdown = ({ percent, timeLeft, isSale = false }: CountdownProps) => {
    return (
        <Flex direction="column" align="center" h="full" pt={8} pos="relative">
            <Box boxSize="16rem" position="relative">
                <Flex pos="absolute" w="full" h="full" align="center" justify="center">
                    <PrivateCountdown
                        time1={{ value: isSale ? timeLeft.days : 0, unit: "days" }}
                        time2={{ value: isSale ? timeLeft.hours : 0, unit: "hours" }}
                        time3={{ value: isSale ? timeLeft.minutes : 0, unit: "mins" }}
                    />
                </Flex>
                <Loader percent={percent} />
            </Box>
        </Flex>
    )
}

export default Countdown
