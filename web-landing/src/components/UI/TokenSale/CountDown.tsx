import { Flex, Box, Text } from "@chakra-ui/react"
import Loader from "@components/shared/Loader"
import { TimerResult } from "react-timer-hook"
import PrivateCountdown from "@components/shared/PrivateCountdown"

interface CountdownProps {
    percent: number
}

const Countdown = ({ percent }: CountdownProps) => {
    return (
        <Flex direction="column" align="center" h="full" px={4} py={20} pos="relative">
            <Text pt={2} textTransform="uppercase" fontWeight={500} mb={4}>
                Sale Period Ends
            </Text>
            <Box boxSize="14rem" position="relative">
                <Flex pos="absolute" w="full" h="full" align="center" justify="center">
                    <PrivateCountdown
                        time1={{ value: 0, unit: "DAYS" }}
                        time2={{ value: 0, unit: "HOURS" }}
                        time3={{ value: 0, unit: "MINS" }}
                    />
                </Flex>
                <Loader percent={percent} />
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
