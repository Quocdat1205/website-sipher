import { Img } from "@chakra-ui/image"
import { Box, Flex, Text, Stack } from "@chakra-ui/layout"
import { Collapse } from "@chakra-ui/transition"
import { ActionButton } from "@components/shared"
import { currency } from "@source/utils"
import { useRouter } from "next/router"
import React, { useState } from "react"
import { BiChevronUp } from "react-icons/bi"

interface Props {
    sipherPrice?: number
    totalValueLocked?: number
    APR?: number
    pendingRewards?: number
    myLiquidity?: number
    weight?: number
    TVL?: number
    poolName?: string
    isUniswap?: boolean
}

const TablePoolMobile = ({
    poolName = "",
    weight = 0,
    TVL = 0,
    totalValueLocked = 0,
    sipherPrice = 0,
    APR = 0,
    pendingRewards = 0,
    myLiquidity = 0,
    isUniswap = false,
}: Props) => {
    const [isOpen, setIsOpen] = useState(false)

    const router = useRouter()
    return (
        <Box
            bg={isOpen ? "#383838" : "#1D1D1D"}
            border="1px"
            rounded="xl"
            borderColor="#383838"
            transition="background 0.25s ease-in-out"
            p={4}
        >
            <Box>
                <Flex flexDir="column" w="full" pb={2}>
                    <Flex w="full" justify="space-between">
                        <Text fontWeight="semibold">Pool</Text>
                        <Flex align="center">
                            <Box pos="relative">
                                <Img src="/images/icons/sipher.png" boxSize="1.5rem" />
                                {isUniswap && (
                                    <Img
                                        pos="absolute"
                                        top="0"
                                        left="0"
                                        transform="translateX(50%)"
                                        src="/images/icons/eth.png"
                                        boxSize="1.5rem"
                                    />
                                )}
                            </Box>
                            <Text textAlign="right" ml={isUniswap ? 4 : 2}>
                                ${poolName}
                            </Text>
                        </Flex>
                    </Flex>
                    <Flex justify="space-between">
                        <Text fontWeight="semibold">Total Value Locked</Text>
                        <Text textAlign="right">{currency(totalValueLocked * sipherPrice, "$")}</Text>
                    </Flex>
                    <Flex justify="space-between">
                        <Text fontWeight="semibold">APR</Text>
                        <Text textAlign="right">{(APR * 100).toFixed(2)}%</Text>
                    </Flex>
                </Flex>
                <Flex
                    borderBottom="1px"
                    borderTop="1px"
                    borderColor={isOpen ? "whiteAlpha.300" : "transparent"}
                    py={2}
                    mb={2}
                    w="full"
                    align="center"
                    justify="space-between"
                >
                    <Flex align="center" cursor="pointer" onClick={() => setIsOpen(!isOpen)}>
                        <Text size="small" fontWeight="semibold">
                            DETAIL
                        </Text>
                        <Box transform={isOpen ? "rotate(0deg)" : "rotate(180deg)"} ml={1}>
                            <BiChevronUp size="1.2rem" />
                        </Box>
                    </Flex>
                    <ActionButton text="STAKE" onClick={() => router.push("/stake/deposit")} size="small" w="6rem" />
                </Flex>
            </Box>
            <Collapse in={isOpen}>
                <Box>
                    <ActionButton
                        disabled={!isUniswap}
                        onClick={() => window.open("https://app.uniswap.org/", "_blank")}
                        textTransform="unset"
                        text="Buy SP/ETH Uniswap LP"
                        px={2}
                        py={2}
                        fontWeight="normal"
                        letterSpacing="0px"
                    />
                </Box>
                <Stack pt={2} spacing={3}>
                    <Flex w="full" justify="space-between">
                        <Text size="small">Weight</Text>
                        <Text fontWeight="semibold" size="small">
                            ${currency(weight)}
                        </Text>
                    </Flex>
                    <Flex w="full" justify="space-between">
                        <Text size="small">TVL</Text>
                        <Text fontWeight="semibold" size="small">
                            {currency(TVL)}%
                        </Text>
                    </Flex>
                    <Flex w="full" justify="space-between">
                        <Text size="small">Pending rewards</Text>
                        <Text fontWeight="semibold" size="small">
                            {currency(pendingRewards)} SIPHER
                        </Text>
                    </Flex>
                    <Flex w="full" justify="space-between">
                        <Text size="small">My liquidity</Text>
                        <Text fontWeight="semibold" size="small">
                            {currency(myLiquidity)} SIPHER
                        </Text>
                    </Flex>
                </Stack>
            </Collapse>
        </Box>
    )
}

export default TablePoolMobile
