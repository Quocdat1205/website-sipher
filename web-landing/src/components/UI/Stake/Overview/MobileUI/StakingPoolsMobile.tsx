import { Flex, Box, Text, Stack } from "@chakra-ui/react"
import { useSipherPrice } from "@hooks/api"
import React from "react"
import TablePoolMobile from "./TablePoolMobile"

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
    const sipherPrice = useSipherPrice()

    return (
        <Box display={["block", "block", "none"]}>
            <Text textAlign="center" letterSpacing="3px" size="large" fontWeight="semibold" mb={4}>
                STAKING POOLS
            </Text>
            <Box rounded="xl" border="1px" borderColor="#383838" py={4} px={2} bg="rgba(0, 0, 0, 0.9)">
                <Box w="full">
                    <Flex align="center" w="full" pb={4} px={4}>
                        <Text fontWeight="semibold" w="37%">
                            Pool
                        </Text>
                        <Text fontWeight="semibold" w="38%">
                            Total Value Locked
                        </Text>
                        <Text fontWeight="semibold" w="25%">
                            APR
                        </Text>
                    </Flex>
                    <Stack>
                        <TablePoolMobile
                            poolName="SIPHER"
                            sipherPrice={sipherPrice}
                            totalValueLocked={totalValueLocked}
                            APR={APR}
                            pendingRewards={pendingRewards}
                            myLiquidity={myLiquidity}
                        />
                        <TablePoolMobile
                            poolName="SP / ETH LP"
                            isUniswap
                            sipherPrice={sipherPrice}
                            totalValueLocked={totalValueLocked}
                            APR={APR}
                            pendingRewards={pendingRewards}
                            myLiquidity={myLiquidity}
                        />
                    </Stack>
                </Box>
            </Box>
        </Box>
    )
}

export default StakingPoolsMobile
