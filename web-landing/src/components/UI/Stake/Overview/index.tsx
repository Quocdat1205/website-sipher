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
import TablePool from "./TablePool"
import TablePoolMobile from "./MobileUI/TablePoolMobile"
import { useRouter } from "next/router"

const StakeOverview = () => {
    const { scCaller, account } = useWalletContext()

    const router = useRouter()

    const { data } = useQuery(["fetch", account], () => scCaller.current!.View.fetchData(account!), {
        enabled: !!scCaller.current && !!account,
    })

    const { data: stakeData } = useQuery("total-staked", () => scCaller.current!.getTotalStaked(), {
        initialData: {
            lpPoolTVL: 0,
            stakePoolTVL: 0,
            totalStaked: 0,
        },
    })

    const { data: stakePoolTotalSupply } = useQuery(
        "stake-pool-total-supply",
        () => scCaller.current!.StakingPools.totalSupply(),
        {
            initialData: 1,
        }
    )

    const { data: lpPoolTotalSupply } = useQuery(
        "lp-pool-total-supply",
        () => scCaller.current!.LpPools.totalSupply(),
        {
            initialData: 1,
        }
    )
    return (
        <Flex direction="column" align="center" w="full">
            <Box w="full" maxW="60rem" px={4}>
                <Header totalStaked={stakeData!.totalStaked} />
                <VStack spacing={8} align="stretch">
                    <Dashboard
                        totalStaked={
                            data?.sipherPool.accountTotalDeposit || 0 + (data?.lpPool.accountTotalDeposit || 0)
                        }
                        unclaimedRewards={data?.pendingRewards}
                        totalEarned={
                            data?.sipherPool.accountClaimedRewards || 0 + (data?.lpPool.accountClaimedRewards || 0)
                        }
                    />
                    <Box id="staking-pools">
                        <StakingPools>
                            <TablePool
                                poolName="SIPHER"
                                totalValueLocked={stakeData?.stakePoolTVL}
                                APR={
                                    ((((data?.sipherPool.weight || 0) / (data?.totalWeight || 1)) *
                                        TOTAL_REWARDS_FOR_POOL) /
                                        stakePoolTotalSupply!) *
                                    2
                                }
                                pendingRewards={data?.sipherPool.accountPendingRewards}
                                myLiquidity={data?.sipherPool.accountTotalDeposit}
                                onStake={() => router.push(`/stake/deposit/sipher`)}
                            />
                            <TablePool
                                poolName="SIPHER / ETH LP"
                                isUniswap
                                totalValueLocked={stakeData?.lpPoolTVL}
                                APR={
                                    ((((data?.lpPool.weight || 0) / (data?.totalWeight || 1)) *
                                        TOTAL_REWARDS_FOR_POOL) /
                                        lpPoolTotalSupply!) *
                                    2
                                }
                                pendingRewards={data?.lpPool.accountPendingRewards}
                                myLiquidity={data?.lpPool.accountTotalDeposit}
                                onStake={() => router.push(`/stake/deposit/sipher-eth-lp`)}
                            />
                        </StakingPools>
                        <StakingPoolsMobile>
                            <TablePoolMobile
                                poolName="$SIPHER"
                                totalValueLocked={stakeData?.stakePoolTVL}
                                APR={
                                    ((((data?.sipherPool.weight || 0) / (data?.totalWeight || 1)) *
                                        TOTAL_REWARDS_FOR_POOL) /
                                        stakePoolTotalSupply!) *
                                    2
                                }
                                pendingRewards={data?.sipherPool.accountPendingRewards}
                                myLiquidity={data?.sipherPool.accountTotalDeposit}
                                onStake={() => router.push(`/stake/deposit/sipher`)}
                            />
                            <TablePoolMobile
                                poolName="SIPHER/ETH Uniswap LP"
                                totalValueLocked={stakeData?.lpPoolTVL}
                                isUniswap
                                APR={
                                    ((((data?.lpPool.weight || 0) / (data?.totalWeight || 1)) *
                                        TOTAL_REWARDS_FOR_POOL) /
                                        lpPoolTotalSupply!) *
                                    2
                                }
                                pendingRewards={data?.lpPool.accountPendingRewards}
                                myLiquidity={data?.lpPool.accountTotalDeposit}
                                onStake={() => router.push(`/stake/deposit/sipher-eth-lp`)}
                            />
                        </StakingPoolsMobile>
                    </Box>
                    <StakingDeposits
                        lpPoolDeposits={data?.lpPool.deposits || []}
                        stakePoolDeposits={data?.sipherPool.deposits || []}
                        lpPoolTotalSupply={lpPoolTotalSupply!}
                        stakePoolTotalSupply={stakePoolTotalSupply!}
                    />
                    <StakingDepositsMobile
                        lpPoolDeposits={data?.lpPool.deposits || []}
                        stakePoolDeposits={data?.sipherPool.deposits || []}
                        lpPoolTotalSupply={lpPoolTotalSupply!}
                        stakePoolTotalSupply={stakePoolTotalSupply!}
                    />
                </VStack>
            </Box>
        </Flex>
    )
}

export default StakeOverview
