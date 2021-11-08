import { Flex, Box, Text } from "@chakra-ui/react"
import PublicCountdown from "@components/shared/PublicCountdown"
import Loader from "@components/shared/Loader"
import PrivateCountdown from "@components/shared/PrivateCountdown"
import { TimerResult } from "react-timer-hook"
import PriceChangeText from "./PriceChangeText"
import { useEffect, useState } from "react"
import { INTERVAL } from "@constant/index"

interface CountdownProps {
    minutesLeft: number
    secondsLeft: number
    percent: number
    currentPhase: "NOT_STARTED" | "ON_GOING" | "ENDED"
    timer: TimerResult
    isPriceDecreasing: boolean
    isOnSale: boolean
    nftRemaining: number
}

const Countdown = ({
    minutesLeft,
    secondsLeft,
    percent,
    currentPhase,
    timer,
    isPriceDecreasing,
    isOnSale,
    nftRemaining,
}: CountdownProps) => {
    const [isRunning, setIsRunning] = useState(false)
    useEffect(() => {
        if (isPriceDecreasing && secondsLeft <= 10 && minutesLeft == 0 && !isRunning) {
            setIsRunning(true)
        } else if (isPriceDecreasing && secondsLeft <= 50 && minutesLeft == INTERVAL / 60000 - 1 && isRunning) {
            setIsRunning(false)
        }
    }, [isPriceDecreasing, secondsLeft, minutesLeft, isRunning, setIsRunning])
    return (
        <Flex direction="column" align="center" flex={1} h="full" p={4} pos="relative">
            <Text pt={2} textTransform="uppercase" fontWeight={500} mb={4}>
                {currentPhase === "NOT_STARTED"
                    ? "Countdown to public sale"
                    : isPriceDecreasing
                    ? "Until Next Tier"
                    : currentPhase === "ON_GOING"
                    ? "Until End"
                    : "Public Sale Has Ended"}
            </Text>
            <Box boxSize="14rem" position="relative">
                <Flex pos="absolute" w="full" h="full" align="center" justify="center">
                    {isPriceDecreasing ? (
                        <PublicCountdown
                            time1={{ value: nftRemaining > 0 ? minutesLeft : 0, unit: "MINS" }}
                            time2={{ value: nftRemaining > 0 ? secondsLeft : 0, unit: "SECS" }}
                        />
                    ) : (
                        <PrivateCountdown
                            time1={{ value: nftRemaining > 0 ? timer.days : 0, unit: "DAYS" }}
                            time2={{ value: nftRemaining > 0 ? timer.hours : 0, unit: "HOURS" }}
                            time3={{ value: nftRemaining > 0 ? timer.minutes : 0, unit: "MINS" }}
                            time4={{ value: nftRemaining > 0 ? timer.seconds : 0, unit: "SECS" }}
                        />
                    )}
                </Flex>
                {isPriceDecreasing && <Loader percent={percent} />}
            </Box>
            {isOnSale && isPriceDecreasing && <PriceChangeText isRunning={isRunning} />}
            <Box
                pos="absolute"
                w="1px"
                h="80%"
                top={"50%"}
                transform="translateY(-50%)"
                right={0}
                bgGradient="linear(to-b, transparent, #FFC266, transparent)"
            />
        </Flex>
    )
}

export default Countdown
