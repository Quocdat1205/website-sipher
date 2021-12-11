import { Flex, Box, Text } from "@chakra-ui/react"
import { MotionFlex, ActionButton } from "@components/shared"
import Title from "./Title"
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
            bgImage="/images/pc/home/background.png"
            bgSize="cover"
            bgPos="center"
            bgRepeat="no-repeat"
            p={4}
            pt={[16, 16, 4]}
        >
            <Flex
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
                    mt={2}
                    w="full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: 1.5,
                    }}
                >
                    <Box py={[0, 8]}>
                        <Text
                            textAlign="center"
                            mb={2}
                            fontWeight="500"
                            fontSize={["1.6rem", "2.2rem"]}
                            letterSpacing="3px"
                        >
                            THE $SIPHER INITIAL PUBLIC SALE IS OVER
                        </Text>
                        <Text
                            textAlign="center"
                            fontWeight="semibold"
                            textTransform="uppercase"
                            fontSize="0.9rem"
                            letterSpacing="3px"
                        >
                            Thanks so much to our community, partners, backers and contributors.
                        </Text>
                    </Box>
                    <Box pt={4} pb={[4, 8]}>
                        <ActionButton
                            size="large"
                            onClick={() => router.push("/token-sale")}
                            cursor="pointer"
                            text="CLAIM $SIPHER TOKEN"
                            px={12}
                            rounded="full"
                        />
                    </Box>
                    <Flex w="full" maxW="52rem">
                        <PriceBox />
                    </Flex>
                    <Flex pt={[2, 12]} flexDir="column" justify="center">
                        <Text
                            textAlign="center"
                            fontWeight="semibold"
                            textTransform="uppercase"
                            fontSize="1rem"
                            letterSpacing="3px"
                        >
                            EARN STAKING REWARDS WITH SIPHER
                        </Text>
                        <Text textAlign="center" fontWeight="thin" textTransform="unset" fontSize="0.9rem">
                            $SIPHER Staking begins: 13th of December @ 12:00 PM UTC
                        </Text>
                    </Flex>
                    <Box mt={4}>
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
