import { Flex, Box, Text } from "@chakra-ui/react"
import { ActionButton, BoldText, MotionFlex, Typo } from "@components/shared"
import Title from "@components/shared/Title"
import { useRouter } from "next/router"
import PriceBox from "./PriceBox"

const FirstScreen = () => {
    const router = useRouter()

    return (
        <Flex
            direction="column"
            align="center"
            zIndex={2}
            justify="center"
            minH="100vh"
            w="full"
            flexShrink={0}
            pos="relative"
            bg="url(/images/pc/home/background.png)"
            bgSize={["cover"]}
            bgRepeat="no-repeat"
            bgPos="80% 20%"
            p={4}
            pt={[16, 16, 4]}
        >
            <Flex
                zIndex={1}
                direction="column"
                align="center"
                justify="center"
                w="full"
                maxW="64rem"
                pt={[8, 16, 16, 24]}
                overflow="hidden"
            >
                <Title text="THANK YOU!" />
                <MotionFlex
                    direction="column"
                    align="center"
                    w="full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: 1,
                        duration: 0.25,
                    }}
                >
                    <Box mb={6}>
                        <Typo.Heading textAlign="center" mb={2} fontSize={["3xl", "4xl", "4xl"]} letterSpacing="3px">
                            THE $SIPHER INITIAL PUBLIC SALE IS OVER
                        </Typo.Heading>
                        <BoldText textAlign="center">
                            Thanks so much to our community, partners, backers and contributors.
                        </BoldText>
                    </Box>
                    <Box mb={6}>
                        <ActionButton
                            size="large"
                            onClick={() => router.push("/token-sale")}
                            cursor="pointer"
                            text="CLAIM $SIPHER TOKEN"
                            px={6}
                            rounded="full"
                        />
                    </Box>
                    <Flex w="full" maxW="52rem" mb={6}>
                        <PriceBox />
                    </Flex>
                    <Flex mb={6} flexDir="column" justify="center">
                        <BoldText textAlign="center">EARN STAKING REWARDS WITH SIPHER</BoldText>
                        <Text textAlign="center" fontSize={"sm"}>
                            $SIPHER Staking begins: 13th of December @ 12:00 PM UTC
                        </Text>
                    </Flex>
                    <Box>
                        <ActionButton
                            size="small"
                            onClick={() =>
                                window.open("https://atlas.sipher.xyz/sipher-staking-instructions", "_blank")
                            }
                            cursor="pointer"
                            w="full"
                            text="LEARN MORE ON STAKING REWARDS"
                            px={6}
                            rounded="full"
                        />
                    </Box>
                </MotionFlex>
            </Flex>
        </Flex>
    )
}

export default FirstScreen
