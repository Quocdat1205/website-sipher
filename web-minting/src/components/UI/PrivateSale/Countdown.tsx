import { Flex, Box } from "@chakra-ui/react"
import PublicCountdown from "@components/shared/PublicCountdown"
import { Typo } from "@components/shared/Typo"
import { MyText } from "@sipher/web-components"
import Loader from "@components/shared/Loader"

interface CountdownProps {
    isOnSale: boolean
    hoursLeft: number
    minutesLeft: number
    percent: number
}

const Countdown = ({ isOnSale, hoursLeft, minutesLeft, percent }: CountdownProps) => {
    return (
        <Flex direction="column" align="center" flex={1} h="full" p={4} pos="relative">
            <Typo.Text textTransform="uppercase" fontWeight="semibold" fontSize="sm">
                Until Over
            </Typo.Text>
            <Box boxSize="14rem" position="relative">
                <Flex pos="absolute" w="full" h="full" align="center" justify="center">
                    {!isOnSale ? (
                        <PublicCountdown
                            time1={{ value: hoursLeft, unit: "HOURS" }}
                            time2={{ value: minutesLeft, unit: "MINS" }}
                        />
                    ) : (
                        <MyText fontWeight="bold">NOT FOR SALE</MyText>
                    )}
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
