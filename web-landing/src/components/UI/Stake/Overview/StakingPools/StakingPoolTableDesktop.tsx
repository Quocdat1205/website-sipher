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
            <Box borderBottom={isOpen ? "1px" : "0px"} borderColor="#383838" p={4}>
                <Flex w="full" align="center">
                    <Flex align="center" w="25%">
                        <Flex align="center" pos="relative" w="2rem">
                            <Img src="/images/icons/sipher.png" boxSize="1.5rem" pos="relative" zIndex={2} />
                            {isUniswap && (
                                <Img pos="relative" left="-0.75rem" src="/images/icons/eth.png" boxSize="1.5rem" />
                            )}
                        </Flex>
                        <Text ml={6} mr={4}>
                            {poolName}
                        </Text>
                    </Flex>
                    <Text w="23%" textAlign="right" pr={8}>
                        {currency(totalValueLocked, "$")}
                    </Text>
                    <Text w="15%" textAlign="left">
                        {(APR * 100).toFixed(2)}%
                    </Text>
                    <Flex align="center" cursor="pointer" onClick={() => setIsOpen(!isOpen)} ml="auto">
                        <Text size="small" fontWeight="semibold">
                            DETAIL
                        </Text>
                        <Box transform={isOpen ? "rotate(0deg)" : "rotate(180deg)"} ml={1}>
                            <BiChevronUp size="1.2rem" />
                        </Box>
                    </Flex>
                    <ActionButton text="STAKE" ml={4} onClick={onStake} size="small" w="10rem" />
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
                        />
                    ))}
                </Stack>
                <Flex p={4}>
                    <Box w="48%" pr={8}>
                        <Flex w="full" justify="space-between" mb={4}>
                            <Text size="small">Weight</Text>
                            <Text fontWeight="semibold" size="small">
                                {weight}%
                            </Text>
                        </Flex>
                        <Flex w="full" justify="space-between">
                            <Text size="small">TVL</Text>
                            <Text fontWeight="semibold" size="small">
                                ${currency(TVL)}
                            </Text>
                        </Flex>
                    </Box>
                    <Box flex={1}>
                        <Flex w="full" justify="space-between" mb={4}>
                            <Text size="small">Pending rewards</Text>
                            <Text fontWeight="semibold" size="small">
                                {currency(pendingRewards)} $SIPHER
                            </Text>
                        </Flex>
                        <Flex w="full" justify="space-between">
                            <Text size="small">My liquidity</Text>
                            <Text fontWeight="semibold" size="small">
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
