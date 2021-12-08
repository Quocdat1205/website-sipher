import { Stack, Flex, Box, Text } from "@chakra-ui/react"
import { useSipherPrice } from "@hooks/api"
import React from "react"
import TablePool from "./TablePool"

interface StakingPoolsProps {
    totalValueLocked?: number
    APR?: number
    pendingRewards?: number
    myLiquidity?: number
}

const StakingPools = ({ totalValueLocked, APR, pendingRewards, myLiquidity }: StakingPoolsProps) => {
    const sipherPrice = useSipherPrice()

    return (
        <Box display={["none", "none", "block"]}>
            <Text letterSpacing="3px" size="large" fontWeight="semibold" mb={4}>
                STAKING POOLS
            </Text>
            <Box rounded="xl" border="1px" borderColor="#383838" p={8} bg="rgba(0, 0, 0, 0.9)">
                <Box w="full">
                    <Flex w="full" pb={4} px={4} mb={2}>
                        <Text fontWeight="semibold" w="27%">
                            Pool
                        </Text>
                        <Text fontWeight="semibold" w="23%">
                            Total Value Locked
                        </Text>
                        <Text fontWeight="semibold" w="10%">
                            APR
                        </Text>
                    </Flex>
                    <Stack>
                        <TablePool
                            poolName="SIPHER"
                            sipherPrice={sipherPrice}
                            totalValueLocked={totalValueLocked}
                            APR={APR}
                            pendingRewards={pendingRewards}
                            myLiquidity={myLiquidity}
                        />
                        <TablePool
                            poolName="SIPHER / ETH LP"
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

export default StakingPools
