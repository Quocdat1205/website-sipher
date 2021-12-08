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
            <Text textAlign="center" letterSpacing="3px" size="large" fontWeight="semibold" mb={2}>
                STAKING POOLS
            </Text>
            <Box rounded="xl" border="1px" borderColor="#383838" py={4} px={2} bg="rgba(0, 0, 0, 0.9)">
                <Stack spacing={2}>
                    <TablePoolMobile
                        poolName="SIPHER"
                        href="/stake/deposit/sipher"
                        sipherPrice={sipherPrice}
                        totalValueLocked={totalValueLocked}
                        APR={APR}
                        pendingRewards={pendingRewards}
                        myLiquidity={myLiquidity}
                    />
                    <TablePoolMobile
                        poolName="SIPHER/ETH LP"
                        href="/stake/deposit/sipher-eth-lp"
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
    )
}

export default StakingPoolsMobile
