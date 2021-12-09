// * DESCRIPTION:

import { Flex, Box, VStack } from "@chakra-ui/react"
import { TOTAL_REWARDS_FOR_POOL } from "@constant/index"
import React from "react"
import Dashboard from "./Dashboard"
import Header from "./Header"
import StakingDeposits from "./StakingDeposits"
import StakingPoolsDesktop from "./DesktopUI/StakingPoolsDesktop"
import StakingPoolsMobile from "./MobileUI/StakingPoolsMobile"
import TablePoolMobile from "./MobileUI/TablePoolMobile"
import { useRouter } from "next/router"
import useOverview from "./useOverview"
import StakingPoolTableDesktop from "./DesktopUI/StakingPoolTableDesktop"

const StakeOverview = () => {
    const router = useRouter()
    const {
        dataFetch,
        stakeData,
        stakePoolTotalSupply,
        lpPoolTotalSupply,
        lpTVL,
        totalClaimed,
        sipherPrice,
        claimRewards,
        isClaiming,
    } = useOverview()

    return (
        <Flex direction="column" align="center" w="full">
            <Box w="full" maxW="60rem" px={4}>
                <Header totalClaimed={totalClaimed!} sipherPrice={sipherPrice} totalStaked={stakeData!.totalStaked} />
                <VStack spacing={8} align="stretch">
                    <Dashboard
                        claimRewards={claimRewards}
                        isClaiming={isClaiming}
                        sipherPrice={sipherPrice}
                        totalStaked={
                            dataFetch?.sipherPool.accountTotalDeposit ||
                            0 + (dataFetch?.lpPool.accountTotalDeposit || 0)
                        }
                        unclaimedRewards={dataFetch?.pendingRewards || 0}
                        totalEarned={
                            dataFetch?.sipherPool.accountClaimedRewards ||
                            0 + (dataFetch?.lpPool.accountClaimedRewards || 0)
                        }
                    />
                    <Box id="staking-pools">
                        <StakingPoolsDesktop>
                            <StakingPoolTableDesktop
                                poolName="SIPHER"
                                totalValueLocked={stakeData?.stakePoolTotalStakedByUSD}
                                APR={
                                    ((((dataFetch?.sipherPool.weight || 0) / (dataFetch?.totalWeight || 1)) *
                                        TOTAL_REWARDS_FOR_POOL) /
                                        stakePoolTotalSupply!) *
                                    2
                                }
                                pendingRewards={dataFetch?.sipherPool.accountPendingRewards}
                                myLiquidity={dataFetch?.sipherPool.accountTotalDeposit}
                                onStake={() => router.push(`/stake/deposit/sipher`)}
                                weight={
                                    (Math.round(dataFetch?.sipherPool.weight || 0) / (dataFetch?.totalWeight || 1)) *
                                    100
                                }
                                TVL={0}
                            />
                            <StakingPoolTableDesktop
                                poolName="SIPHER / ETH LP"
                                isUniswap
                                totalValueLocked={stakeData?.lpPoolTotalStakedByUSD}
                                APR={
                                    ((((dataFetch?.lpPool.weight || 0) / (dataFetch?.totalWeight || 1)) *
                                        TOTAL_REWARDS_FOR_POOL) /
                                        lpPoolTotalSupply!) *
                                    2
                                }
                                pendingRewards={dataFetch?.lpPool.accountPendingRewards}
                                myLiquidity={dataFetch?.lpPool.accountTotalDeposit}
                                onStake={() => router.push(`/stake/deposit/sp-eth-lp`)}
                                weight={
                                    (Math.round(dataFetch?.lpPool.weight || 0) / (dataFetch?.totalWeight || 1)) * 100
                                }
                                TVL={lpTVL}
                            />
                        </StakingPoolsDesktop>
                        <StakingPoolsMobile>
                            <TablePoolMobile
                                poolName="$SIPHER"
                                totalValueLocked={stakeData?.stakePoolTotalStakedByUSD}
                                APR={
                                    ((((dataFetch?.sipherPool.weight || 0) / (dataFetch?.totalWeight || 1)) *
                                        TOTAL_REWARDS_FOR_POOL) /
                                        stakePoolTotalSupply!) *
                                    2
                                }
                                pendingRewards={dataFetch?.sipherPool.accountPendingRewards}
                                myLiquidity={dataFetch?.sipherPool.accountTotalDeposit}
                                onStake={() => router.push(`/stake/deposit/sipher`)}
                                weight={
                                    (Math.round(dataFetch?.sipherPool.weight || 0) / (dataFetch?.totalWeight || 1)) *
                                    100
                                }
                                TVL={0}
                            />
                            <TablePoolMobile
                                poolName="SIPHER/ETH Uniswap LP"
                                totalValueLocked={stakeData?.lpPoolTotalStakedByUSD}
                                isUniswap
                                APR={
                                    ((((dataFetch?.lpPool.weight || 0) / (dataFetch?.totalWeight || 1)) *
                                        TOTAL_REWARDS_FOR_POOL) /
                                        lpPoolTotalSupply!) *
                                    2
                                }
                                pendingRewards={dataFetch?.lpPool.accountPendingRewards}
                                myLiquidity={dataFetch?.lpPool.accountTotalDeposit}
                                onStake={() => router.push(`/stake/deposit/sipher-eth-lp`)}
                                weight={
                                    (Math.round(dataFetch?.lpPool.weight || 0) / (dataFetch?.totalWeight || 1)) * 100
                                }
                                TVL={lpTVL}
                            />
                        </StakingPoolsMobile>
                    </Box>
                    <StakingDeposits
                        lpPoolDeposits={dataFetch?.lpPool.deposits || []}
                        stakePoolDeposits={dataFetch?.sipherPool.deposits || []}
                        lpPoolTotalSupply={lpPoolTotalSupply!}
                        stakePoolTotalSupply={stakePoolTotalSupply!}
                    />
                </VStack>
            </Box>
        </Flex>
    )
}

export default StakeOverview
