// * DESCRIPTION:

import { Flex, Box, Text } from "@chakra-ui/react"
import { LinkButton, MotionFlex, Typo } from "@components/shared"
import Title from "./Title"
import { CgMouse } from "react-icons/cg"
import { BiChevronDown } from "react-icons/bi"
import CountDown from "./CountDown"
import { startTime, endTime } from "@constant/index"

interface FirstScreenProps {}

const FirstScreen = ({}: FirstScreenProps) => {
    return (
        <Flex
            direction="column"
            align="center"
            zIndex={2}
            justify="center"
            h="100vh"
            w="full"
            flexShrink={0}
            bgImage="/images/pc/home/background.png"
            bgSize="cover"
            bgPos="center"
            bgRepeat="no-repeat"
            p={4}
            pt={[16, 16, 4]}
        >
            <Flex direction="column" align="center" justify="center" w="full" maxW="64rem" pt={32}>
                <Title text="$SIPHER INITIAL" />
                <Title text="PUBLIC SALE" custom={1} />
                <MotionFlex
                    direction="column"
                    align="center"
                    mt={4}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: 1.5,
                    }}
                >
                    <Typo.Heading textAlign="center" mb={[0, 0, 0, 4]}>
                        BE PART OF THE SIPHER UNIVERSE
                    </Typo.Heading>
                    <Text mb={[4, 4, 4, 8]} textAlign="center" size="sm" fontWeight="semibold" letterSpacing="3px">
                        OFFICIAL LAUNCH 06/12/2021 - 01:00AM UTC
                    </Text>
                    <CountDown startTime={startTime} endTime={endTime} />
                    <Flex mt={6}>
                        <LinkButton
                            text="LEARN MORE ON MEDIUM"
                            size="large"
                            href="https://medium.com/sipherxyz/sipher-initial-public-sale-mechanic-8ff988e9ede1"
                            px={12}
                        />
                    </Flex>
                    <Flex direction="column" align="center" mt={8}>
                        <CgMouse size="2rem" />
                        <Box mt={-1}>
                            <BiChevronDown size="1.5rem" />
                        </Box>
                        <Text fontSize="xs">Scroll down to discover</Text>
                    </Flex>
                </MotionFlex>
            </Flex>
        </Flex>
    )
}

export default FirstScreen
