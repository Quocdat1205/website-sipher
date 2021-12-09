import { Img } from "@chakra-ui/image"
import { Box, Flex, Text } from "@chakra-ui/layout"
import { Collapse } from "@chakra-ui/transition"
import { ActionButton } from "@components/shared"
import { useSipherPrice } from "@hooks/api"
import { currency } from "@source/utils"
import { useRouter } from "next/router"
import React, { useState } from "react"
import { BiChevronUp } from "react-icons/bi"

interface Props {
    totalValueLocked?: number
    APR?: number
    pendingRewards?: number
    myLiquidity?: number
    weight?: number
    TVL?: number
    poolName?: string
    isUniswap?: boolean
    onStake?: () => void
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
}: Props) => {
    const [isOpen, setIsOpen] = useState(false)

    const sipherPrice = useSipherPrice()

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
                    <Flex align="center" w="27%">
                        <Flex align="center" pos="relative" w="2rem">
                            <Img src="/images/icons/sipher.png" boxSize="1.5rem" />
                            {isUniswap && (
                                <Img pos="relative" left="-0.75rem" src="/images/icons/eth.png" boxSize="1.5rem" />
                            )}
                        </Flex>
                        <Text ml={6}>{poolName}</Text>
                    </Flex>
                    <Text w="23%" textAlign="left">
                        {currency(totalValueLocked * sipherPrice, "$")}
                    </Text>
                    <Text w="10%" textAlign="left">
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
            <Collapse in={isOpen}>
                <Box px={4} pt={4}>
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
                <Flex p={4}>
                    <Box flex={1}>
                        <Flex w="full" justify="space-between" mb={4}>
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
                    </Box>
                    <Box flex={1.25} ml={20}>
                        <Flex w="full" justify="space-between" mb={4}>
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
                    </Box>
                </Flex>
            </Collapse>
        </Box>
    )
}
export default StakingPoolTableDesktop
