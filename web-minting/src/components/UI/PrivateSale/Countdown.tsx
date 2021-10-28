import { Flex, Box } from "@chakra-ui/react"
import PublicCountdown from "@components/shared/PublicCountdown"
import { Typo } from "@components/shared/Typo"
import { MyText } from "@sipher/web-components"
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
