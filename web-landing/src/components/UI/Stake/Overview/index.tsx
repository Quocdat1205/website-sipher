// * DESCRIPTION:

import { Flex, Box, VStack } from "@chakra-ui/react"
import { TOTAL_REWARDS_FOR_POOL } from "@constant/index"
import useWalletContext from "@hooks/web3/useWalletContext"
import { StakingPoolAddress } from "@source/contract/code"
import React from "react"
import { useQuery } from "react-query"
import Dashboard from "./Dashboard"
import Header from "./Header"
import StakingDeposits from "./StakingDeposits"
import StakingPools from "./StakingPools"
import StakingPoolsMobile from "./MobileUI/StakingPoolsMobile"
import StakingDepositsMobile from "./MobileUI/StakingDepositsMobile"

const StakeOverview = () => {
    const { scCaller, account } = useWalletContext()
    const { data } = useQuery(["fetch", account], () => scCaller.current!.View.fetchData(account!), {
        enabled: !!scCaller.current && !!account,
    })

    const { data: totalValueLocked } = useQuery(
        "total-value-locked",
        () => scCaller.current!.SipherToken.getBalance(StakingPoolAddress),
        { enabled: !!scCaller.current, initialData: 0 }
    )

    const { data: stakeTotalSupply } = useQuery(
        "stake-total-supply",
        () => scCaller.current!.StakingPools.totalSupply(),
        {
            enabled: !!scCaller.current,
            initialData: 1,
        }
    )
    return (
        <Flex direction="column" align="center" w="full">
            <Box w="full" maxW="60rem" px={4}>
                <Header />
                <VStack spacing={8} align="stretch">
                    <Dashboard
                        totalStaked={data?.pool.accountTotalDeposit}
                        unclaimedRewards={data?.pendingRewards}
                        totalEarned={data?.pool.accountClaimedRewards}
                    />
                    <StakingPools
                        totalValueLocked={totalValueLocked! * (data?.pool.weight || 0)}
                        APR={(TOTAL_REWARDS_FOR_POOL / Math.max(stakeTotalSupply!, 1)) * 2}
                        pendingRewards={data?.pendingRewards}
                        myLiquidity={data?.pool.accountTotalDeposit}
                    />
                    <StakingPoolsMobile
                        totalValueLocked={totalValueLocked! * (data?.pool.weight || 0)}
                        APR={(TOTAL_REWARDS_FOR_POOL / Math.max(stakeTotalSupply!, 1)) * 2}
                        pendingRewards={data?.pendingRewards}
                        myLiquidity={data?.pool.accountTotalDeposit}
                    />
                    <StakingDeposits deposits={data?.pool.deposits || []} stakingDeposit={stakeTotalSupply!} />
                    <StakingDepositsMobile deposits={data?.pool.deposits || []} stakingDeposit={stakeTotalSupply!} />
                </VStack>
            </Box>
        </Flex>
    )
}

export default StakeOverview
