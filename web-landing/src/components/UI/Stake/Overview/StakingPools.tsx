import { Img, Flex, Box, Text, Collapse } from "@chakra-ui/react"
import { ActionButton } from "@components/shared"
import { useSipherPrice } from "@hooks/api"
import { numberWithCommas } from "@source/utils"
import { useRouter } from "next/router"
import React, { useState } from "react"
import { BiChevronUp } from "react-icons/bi"

interface StakingPoolsProps {
    totalValueLocked?: number
    APR?: number
    pendingRewards?: number
    myLiquidity?: number
}

const StakingPools = ({ totalValueLocked = 0, APR = 0, pendingRewards = 0, myLiquidity = 0 }: StakingPoolsProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const router = useRouter()

    const sipherPrice = useSipherPrice()

    return (
        <Box>
            <Text letterSpacing="3px" size="large" fontWeight="semibold" mb={4}>
                STAKING POOLS
            </Text>
            <Box rounded="xl" border="1px" borderColor="#383838" p={8} bg="rgba(0, 0, 0, 0.9)">
                <Box w="full">
                    <Flex w="full" pb={4} px={4}>
                        <Text fontWeight="semibold" w="25%">
                            Pool
                        </Text>
                        <Text fontWeight="semibold" w="25%">
                            Total Value Locked
                        </Text>
                        <Text fontWeight="semibold" w="10%">
                            APR
                        </Text>
                    </Flex>
                    <Box
                        bg={isOpen ? "#1D1D1D" : "transparent"}
                        border={isOpen ? "1px" : "0px"}
                        borderTop="1px"
                        rounded={isOpen ? "xl" : "none"}
                        borderColor="#383838"
                        transition="background 0.25s ease-in-out"
                    >
                        <Box borderBottom="1px" borderColor="#383838" p={4}>
                            <Flex w="full" align="center">
                                <Flex align="center" w="25%">
                                    <Img src="/images/icons/sipher.png" boxSize="1.5rem" />
                                    <Text ml={4}>$SIPHER</Text>
                                </Flex>
                                <Text w="25%" textAlign="left">
                                    ${numberWithCommas(Math.round(totalValueLocked * sipherPrice))}
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
                                <ActionButton
                                    text="STAKE"
                                    ml={4}
                                    onClick={() => router.push("/stake/deposit")}
                                    size="small"
                                    w="10rem"
                                />
                            </Flex>
                        </Box>
                        <Collapse in={isOpen}>
                            <Box p={4} pl="50%">
                                <Flex w="full" justify="space-between" mb={4}>
                                    <Text size="small">Pending rewards</Text>
                                    <Text fontWeight="semibold" size="small">
                                        {pendingRewards} SIPHER
                                    </Text>
                                </Flex>
                                <Flex w="full" justify="space-between">
                                    <Text size="small">My liquidity</Text>
                                    <Text fontWeight="semibold" size="small">
                                        {myLiquidity} SIPHER
                                    </Text>
                                </Flex>
                            </Box>
                        </Collapse>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default StakingPools
