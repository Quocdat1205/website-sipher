import { Img } from "@chakra-ui/image"
import { Box, Flex, Text, Stack } from "@chakra-ui/layout"
import { Collapse } from "@chakra-ui/transition"
import { ActionButton } from "@components/shared"
import { currency } from "@source/utils"
import React, { useState } from "react"
import { BiChevronUp } from "react-icons/bi"

export interface StakingPoolTable {
    totalValueLocked: number
    APR: number
    pendingRewards: number
    myLiquidity: number
    weight: number
    TVL: number
    poolName?: string
    isUniswap: boolean
    onStake: () => void
    detailButtons: Record<"text" | "link", string>[]
}

const StakingPoolTableDesktop = ({
    poolName = "",
    weight = 0,
    TVL = 0,
    totalValueLocked = 0,
    APR = 0,
    pendingRewards = 0,
    myLiquidity = 0,
    isUniswap = false,
    onStake,
    detailButtons,
}: StakingPoolTable) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Box
            bg={isOpen ? "#1D1D1D" : "transparent"}
            border={isOpen ? "1px" : "0px"}
            rounded={isOpen ? "xl" : "none"}
            borderColor="#383838"
            transition="background 0.25s ease-in-out"
        >
            <Box borderBottom={"1px"} borderColor="#383838" p={4}>
                <Flex w="full" align="center">
                    <Flex align="center" w="22%">
                        <Flex align="center" pos="relative" w="2rem" flexShrink={0}>
                            <Img
                                alt="sipher-token"
                                src="/images/icons/sipher.png"
                                boxSize="1.5rem"
                                pos="relative"
                                zIndex={2}
                            />
                            {isUniswap && (
                                <Img
                                    alt="eth"
                                    pos="relative"
                                    left="-0.75rem"
                                    src="/images/icons/eth.png"
                                    boxSize="1.5rem"
                                />
                            )}
                        </Flex>
                        <Text ml={6} mr={4} fontSize={"sm"}>
                            {poolName}
                        </Text>
                    </Flex>
                    <Text w="23%" textAlign="right" pr={8} fontSize={"sm"}>
                        {currency(totalValueLocked, "$")}
                    </Text>
                    <Text w="20%" pl={8} textAlign="left" fontSize={"sm"}>
                        {(APR * 100).toFixed(2)}%
                    </Text>
                    <Flex align="center" cursor="pointer" onClick={() => setIsOpen(!isOpen)} ml="auto">
                        <Text fontWeight="semibold" fontSize={"sm"}>
                            DETAIL
                        </Text>
                        <Box transform={isOpen ? "rotate(0deg)" : "rotate(180deg)"} ml={1}>
                            <BiChevronUp size="1.2rem" />
                        </Box>
                    </Flex>
                    <ActionButton text="STAKE" ml={4} onClick={onStake} fontSize="sm" w="10rem" />
                </Flex>
            </Box>

            {/* DETAIL */}
            <Collapse in={isOpen}>
                <Stack spacing={4} direction="row" px={4} pt={4}>
                    {detailButtons.map(btn => (
                        <ActionButton
                            key={btn.text}
                            onClick={() => window.open(btn.link, "_blank")}
                            textTransform="unset"
                            text={btn.text}
                            px={2}
                            py={2}
                            fontWeight="normal"
                            letterSpacing="0px"
                            fontSize="md"
                        />
                    ))}
                </Stack>
                <Flex p={4}>
                    <Box w="45%" pr={8}>
                        <Flex w="full" justify="space-between" mb={4}>
                            <Text fontSize="sm">Weight</Text>
                            <Text fontWeight="semibold" fontSize="sm">
                                {weight}%
                            </Text>
                        </Flex>
                        <Flex w="full" justify="space-between">
                            <Text fontSize="sm">Pool TVL</Text>
                            <Text fontWeight="semibold" fontSize="sm">
                                ${currency(TVL)}
                            </Text>
                        </Flex>
                    </Box>
                    <Box flex={1} pl={8}>
                        <Flex w="full" justify="space-between" mb={4}>
                            <Text fontSize="sm">Pending rewards</Text>
                            <Text fontWeight="semibold" fontSize="sm">
                                {currency(pendingRewards)} $SIPHER
                            </Text>
                        </Flex>
                        <Flex w="full" justify="space-between">
                            <Text fontSize="sm">My liquidity</Text>
                            <Text fontWeight="semibold" fontSize="sm">
                                {currency(myLiquidity)} {poolName}
                            </Text>
                        </Flex>
                    </Box>
                </Flex>
            </Collapse>
        </Box>
    )
}
export default StakingPoolTableDesktop
