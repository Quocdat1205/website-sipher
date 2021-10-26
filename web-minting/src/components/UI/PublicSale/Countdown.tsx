import { Flex, Box } from "@chakra-ui/react"
import PublicCountdown from "@components/shared/PublicCountdown"
import { Typo } from "@components/shared/Typo"
import { MyText } from "@sipher/web-components"
import Loader from "@components/shared/Loader"

interface CountdownProps {
    isOnSale: boolean
    minutesLeft: number
    secondsLeft: number
    percent: number
}

const Countdown = ({ isOnSale, minutesLeft, secondsLeft, percent }: CountdownProps) => {
    return (
        <Flex direction="column" align="center" flex={1} h="full" p={4} pos="relative">
            <Typo.Text textTransform="uppercase" fontWeight="semibold" fontSize="sm">
                Until Next Tier
            </Typo.Text>
            <Box boxSize="14rem" position="relative">
                <Flex pos="absolute" w="full" h="full" align="center" justify="center">
                    <PublicCountdown
                        time1={{ value: isOnSale ? minutesLeft : 0, unit: "MINS" }}
                        time2={{ value: isOnSale ? secondsLeft : 0, unit: "SECS" }}
                    />
                </Flex>
                <Loader percent={isOnSale ? percent : 100} />
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
