// * DESCRIPTION:

import { Flex, Box, VStack } from "@chakra-ui/react"
import React from "react"
import Dashboard from "./Dashboard"
import Header from "./Header"
import StakingDeposits from "./StakingDeposits"
import useOverview from "./useOverview"
import StakingPools from "./StakingPools"

const StakeOverview = () => {
    const {
        stakeData,
        totalClaimedInUSD,
        sipherPrice,
        totalStakedInUSD,
        unclaimedRewards,
        totalEarned,
        stakingPoolInfos,
        stakingPoolDeposits,
    } = useOverview()

    return (
        <Flex direction="column" align="center" w="full">
            <Box w="full" maxW="60rem" px={4}>
                <Header totalClaimed={totalClaimedInUSD!} totalStaked={stakeData!.totalStaked} />
                <VStack spacing={8} align="stretch">
                    <Dashboard
                        sipherPrice={sipherPrice}
                        totalStaked={totalStakedInUSD}
                        unclaimedRewards={unclaimedRewards}
                        totalEarned={totalEarned}
                    />
                    <StakingPools poolInfos={stakingPoolInfos} />
                    <StakingDeposits deposits={stakingPoolDeposits} />
                </VStack>
            </Box>
        </Flex>
    )
}

export default StakeOverview
