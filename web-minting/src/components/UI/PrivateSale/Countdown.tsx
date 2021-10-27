import { Flex, Box } from "@chakra-ui/react"
import PublicCountdown from "@components/shared/PublicCountdown"
import { Typo } from "@components/shared/Typo"
import { MyText } from "@sipher/web-components"
import PrivateCountdown from "./PrivateCountdown"

interface CountdownProps {
    isOnSale: boolean
    timeLeft: Record<"days" | "hours" | "minutes" | "seconds", number>
}

const Countdown = ({ isOnSale, timeLeft }: CountdownProps) => {
    const { days, hours, minutes, seconds } = timeLeft
    return (
        <Flex direction="column" align="center" justify="center" pos="relative" h="6rem">
            <PrivateCountdown
                time1={{ value: isOnSale ? days : 0, unit: "Days" }}
                time2={{ value: isOnSale ? hours : 0, unit: "Hours" }}
                time3={{ value: isOnSale ? minutes : 0, unit: "Mins" }}
                time4={{ value: isOnSale ? seconds : 0, unit: "Secs" }}
            />
        </Flex>
    )
}

export default Countdown
