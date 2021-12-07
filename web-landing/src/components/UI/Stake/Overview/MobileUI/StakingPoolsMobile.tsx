import { Img, Flex, Box, Text, Collapse } from "@chakra-ui/react"
import { ActionButton } from "@components/shared"
import { useSipherPrice } from "@hooks/api"
import { currency, numberWithCommas } from "@source/utils"
import { useRouter } from "next/router"
import React, { useState } from "react"
import { BiChevronUp } from "react-icons/bi"

interface StakingPoolsProps {
    totalValueLocked?: number
    APR?: number
    pendingRewards?: number
    myLiquidity?: number
}

const StakingPoolsMobile = ({
    totalValueLocked = 0,
    APR = 0,
    pendingRewards = 0,
    myLiquidity = 0,
}: StakingPoolsProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const router = useRouter()

    const sipherPrice = useSipherPrice()

    return (
        <Box>
            <Text letterSpacing="3px" size="large" fontWeight="semibold" mb={4}>
                STAKING POOLS
            </Text>
            <Box rounded="xl" border="1px" borderColor="#383838" py={4} px={2} bg="rgba(0, 0, 0, 0.9)">
                <Box w="full">
                    <Flex align="center" w="full" pb={4} px={4}>
                        <Text fontWeight="semibold" w="35%">
                            Pool
                        </Text>
                        <Text fontWeight="semibold" w="40%">
                            Total Value Locked
                        </Text>
                        <Text fontWeight="semibold" w="25%">
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
                        <Box py={4} px={4}>
                            <Flex w="full" align="center" pb={4}>
                                <Flex align="center" w="35%">
                                    <Img src="/images/icons/sipher.png" boxSize="1.5rem" />
                                    <Text ml={1}>$SIPHER</Text>
                                </Flex>
                                <Text w="40%" textAlign="left">
                                    {currency(totalValueLocked * sipherPrice, "$")}
                                </Text>
                                <Text w="25%" textAlign="left">
                                    {(APR * 100).toFixed(2)}%
                                </Text>
                            </Flex>
                            <Flex
                                borderBottom="1px"
                                borderTop="1px"
                                borderColor={isOpen ? "#383838" : "transparent"}
                                w="full"
                                align="center"
                                justify="space-between"
                                p={2}
                            >
                                <Flex align="center" cursor="pointer" onClick={() => setIsOpen(!isOpen)}>
                                    <Text size="small" fontWeight="semibold">
                                        DETAIL
                                    </Text>
                                    <Box transform={isOpen ? "rotate(0deg)" : "rotate(180deg)"} ml={1}>
                                        <BiChevronUp size="1.2rem" />
                                    </Box>
                                </Flex>
                                <ActionButton
                                    text="STAKE"
                                    onClick={() => router.push("/stake/deposit")}
                                    size="small"
                                    w="10rem"
                                />
                            </Flex>
                        </Box>
                        <Collapse in={isOpen}>
                            <Box p={4}>
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
                        </Collapse>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default StakingPoolsMobile
