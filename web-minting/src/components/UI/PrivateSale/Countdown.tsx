import { Flex } from "@chakra-ui/react"
import PrivateCountdown from "./PrivateCountdown"

interface CountdownProps {
    timeLeft: Record<"days" | "hours" | "minutes" | "seconds", number>
}

const Countdown = ({ timeLeft }: CountdownProps) => {
    const { days, hours, minutes, seconds } = timeLeft
    return (
        <Flex direction="column" align="center" justify="center" pos="relative" h="6rem">
            <PrivateCountdown
                time1={{ value: days, unit: "Days" }}
                time2={{ value: hours, unit: "Hours" }}
                time3={{ value: minutes, unit: "Mins" }}
                time4={{ value: seconds, unit: "Secs" }}
            />
        </Flex>
    )
}

export default Countdown
