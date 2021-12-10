import { Box, Flex, Link, Img, Text, chakra, HStack, Stack } from "@chakra-ui/react"
import { Typo } from "@components/shared"
import { useSipherChangePercent, useSipherPrice } from "@hooks/api"
import { currency } from "@source/utils"
import React from "react"
import { AiFillPlayCircle } from "react-icons/ai"
import useOverview from "./useOverview"

interface HeaderProps {
    totalStaked: number
    totalClaimed: number
}

const Header = ({ totalStaked, totalClaimed }: HeaderProps) => {
    const sipherPriceChange = useSipherChangePercent()
    const sipherPrice = useSipherPrice()
    return (
        <Flex
            flexDir={["column", "row"]}
            align={["center", "flex-start"]}
            justify={["center", "space-between"]}
            w="full"
            mb={4}
        >
            <Flex flexDir="column" align={["center", "flex-start"]}>
                <Typo.Heading mb={2} textAlign={["center", "left"]}>
                    STAKE
                </Typo.Heading>
                <Text textAlign={["center", "left"]} letterSpacing="3px" fontSize="lg" fontWeight="semibold" mb={2}>
                    EARN STAKING REWARDS WITH SIPHER
                </Text>
                <HStack align="center" spacing={1}>
                    <Link
                        href="https://medium.com/sipherxyz/announcement-of-sipher-token-public-sale-8340a14d0fa1"
                        textDecoration="underline"
                        letterSpacing="1px"
                        color="#ff9800"
                        fontWeight="semibold"
                        fontSize="sm"
                    >
                        Watch the how to stake video (30s)
                    </Link>
                    <AiFillPlayCircle />
                </HStack>
            </Flex>
            <Box w={["full", "auto"]} maxW={["100%", "320px"]} mt={[4, 0]}>
                <Flex justify="space-between" w="full" align="center" mb={2}>
                    <Flex align="center">
                        <Img alt="sipher-token-icon" mr={1} h="1rem" src="/images/icons/sipher.png" />
                        <Text fontSize="sm">
                            PRICE <chakra.span fontWeight="semibold">${currency(sipherPrice)}</chakra.span>
                        </Text>
                    </Flex>
                    <Text
                        fontSize="sm"
                        fontWeight="semibold"
                        color={sipherPriceChange > 0 ? "#25B700" : "main.darkRed"}
                    >
                        {sipherPriceChange > 0 ? "+" : "-"} {Math.abs(sipherPriceChange * 100).toFixed(2)} %
                    </Text>
                </Flex>
                <Stack
                    bg="#292929"
                    direction={["row", "column"]}
                    py={[6, 8]}
                    px={[6, 12]}
                    justify={["space-between", "center"]}
                    align="center"
                    rounded="xl"
                    spacing={4}
                >
                    <Flex direction="column" align="center" flex={1} overflow="hidden">
                        <Text fontSize="sm">Total Amount Staked</Text>
                        <Text textAlign="center" fontWeight="semibold" w="full" isTruncated>
                            ${currency(totalStaked!)}
                        </Text>
                    </Flex>
                    <Flex direction="column" align="center" flex={1} overflow="hidden">
                        <Text fontSize="sm">Total Amount Claimed</Text>
                        <Text textAlign="center" fontWeight="semibold" w="full" isTruncated>
                            ${currency(totalClaimed!)}
                        </Text>
                    </Flex>
                </Stack>
            </Box>
        </Flex>
    )
}

export default Header
