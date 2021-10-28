import { Flex, Box } from "@chakra-ui/react"
import PublicCountdown from "@components/shared/PublicCountdown"
import { Typo } from "@components/shared/Typo"
import { MyText } from "@sipher/web-components"
import Loader from "@components/shared/Loader"
import PrivateCountdown from "@components/shared/PrivateCountdown"
import { TimerResult } from "react-timer-hook"

interface CountdownProps {
    minutesLeft: number
    secondsLeft: number
    percent: number
    currentPhase: "NOT_STARTED" | "ON_GOING" | "ENDED"
    timer: TimerResult
    isPriceDecreasing: boolean
}

const Countdown = ({ minutesLeft, secondsLeft, percent, currentPhase, timer, isPriceDecreasing }: CountdownProps) => {
    return (
        <Flex direction="column" align="center" flex={1} h="full" p={4} pos="relative">
            <Typo.Text textTransform="uppercase" fontWeight="semibold" fontSize="sm">
                {currentPhase === "NOT_STARTED"
                    ? "Countdown to public sale"
                    : isPriceDecreasing
                    ? "Until Next Tier"
                    : currentPhase === "ON_GOING"
                    ? "Until End"
                    : "Public Sale Has Ended"}
            </Typo.Text>
            <Box boxSize="14rem" position="relative">
                <Flex pos="absolute" w="full" h="full" align="center" justify="center">
                    {isPriceDecreasing ? (
                        <>
                            <PublicCountdown
                                time1={{ value: minutesLeft, unit: "MINS" }}
                                time2={{ value: secondsLeft, unit: "SECS" }}
                            />
                            <Loader percent={percent} />
                        </>
                    ) : (
                        <PrivateCountdown
                            time1={{ value: timer.days, unit: "DAYS" }}
                            time2={{ value: timer.hours, unit: "HOURS" }}
                            time3={{ value: timer.minutes, unit: "MINUTES" }}
                            time4={{ value: timer.seconds, unit: "SECONDS" }}
                        />
                    )}
                </Flex>
            </Box>
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
