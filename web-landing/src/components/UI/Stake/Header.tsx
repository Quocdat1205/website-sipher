import { Box, Flex, Link, chakra, Heading, Image, Text } from "@chakra-ui/react"
import React from "react"

interface Props {}

const Header = (props: Props) => {
    return (
        <Flex flexDir="row" align="center" justify="space-between" w="full">
            <Box>
                <Heading
                    fontFamily="Brandon"
                    letterSpacing="3px"
                    fontSize={["3rem", "4rem", "4rem", "4rem", "5rem"]}
                    textAlign="left"
                >
                    STAKE
                </Heading>
                <Heading fontWeight="semibold" letterSpacing="3px">
                    DONEC VIVERRA METUS EU
                </Heading>
                <Link
                    href="https://medium.com/sipherxyz/announcement-of-sipher-token-public-sale-8340a14d0fa1"
                    textDecoration="underline"
                    textAlign="center"
                    fontWeight="semibold"
                    letterSpacing="1px"
                >
                    Watch the how to stake video (30s)
                </Link>
            </Box>
            <Box maxW="320px" w="full">
                <Flex flexDir="row" justify="space-between" w="full" align="center">
                    <chakra.span display="flex" alignItems="center">
                        <Image alt="icon" mr={1} h="1rem" src="/images/icons/community/main-black.png" />
                        <Text size="small">SIPHER PRICE</Text>
                        <Text size="small" px={2} fontWeight="semibold">
                            $6,49
                        </Text>
                    </chakra.span>
                    <Text fontWeight="semibold" color="#25B700" size="small">
                        +4.5%
                    </Text>
                </Flex>
                <Flex
                    flexDir="column"
                    bg="rgba(41,41,41,0.9)"
                    p={8}
                    justify="center"
                    align="center"
                    mt={4}
                    rounded="lg"
                >
                    <Text size="small">Total Amount Staked:</Text>
                    <Text fontWeight="semibold">$185,940,234</Text>
                    <Text size="small" mt={4}>
                        Total Amount Claimed:
                    </Text>
                    <Text fontWeight="semibold">$440,940,234</Text>
                </Flex>
            </Box>
        </Flex>
    )
}

export default Header
