import { TOTAL_REWARDS_FOR_POOL } from "@constant/index"
import { useSipherPrice } from "@hooks/api"
import useWalletContext from "@hooks/web3/useWalletContext"
import { SipherTokenAddress } from "@source/contract/code"
import { LPSipherWethKyberAddress } from "@source/contract/code/LPSipherWethKyber"
import { calWeight, currency } from "@source/utils"
import { format } from "date-fns"
import { useRouter } from "next/router"
import { useState } from "react"
import { useMutation, useQuery, useQueryClient } from "react-query"

type Pool = "StakingPools" | "StakingLPSipherWethUniswap" | "StakingLPSipherWethKyber"

const useOverview = () => {
    const { scCaller, account } = useWalletContext()
    const sipherPrice = useSipherPrice()
    const router = useRouter()
    const qc = useQueryClient()

    const { data: lpUniswapPrice } = useQuery(["lp-price", "uniswap"], () => scCaller.current?.getLpUniswapPrice(), {
        initialData: 0,
        enabled: !!scCaller.current,
    })

    const { data: lpKyberPrice } = useQuery(["lp-price", "kyber"], () => scCaller.current?.getLpKyberPrice(), {
        initialData: 0,
        enabled: !!scCaller.current,
    })

    const { data: totalClaimed } = useQuery("total-claimed", () => scCaller.current!.getTotalClaimed(), {
        enabled: !!scCaller.current,
        initialData: 0,
    })

    const { data: dataFetch } = useQuery(["fetch", account], () => scCaller.current!.View.fetchData(account!), {
        enabled: !!scCaller.current && !!account,
    })

    const { data: stakeData } = useQuery("total-staked", () => scCaller.current!.getTotalStaked(), {
        initialData: {
            lpUniswapPoolTotalStakedByUSD: 0,
            lpKyberPoolTotalStakedByUSD: 0,
            stakePoolTotalStakedByUSD: 0,
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

    const { data: lpUniswapPoolTotalSupply } = useQuery(
        "lp-uniswap-pool-total-supply",
        () => scCaller.current!.StakingLPSipherWethUniswap.totalSupply(),
        {
            initialData: 1,
            enabled: !!scCaller.current,
        }
    )

    const { data: lpKyberPoolTotalSupply } = useQuery(
        "lp-kyber-pool-total-supply",
        () => scCaller.current!.StakingLPSipherWethKyber.totalSupply(),
        {
            initialData: 1,
            enabled: !!scCaller.current,
        }
    )

    const { data: lpTVL } = useQuery("lp-tvl", () => scCaller.current!.getLpUniswapTVL(), {
        initialData: 0,
        enabled: !!scCaller.current,
    })

    const [unlockingId, setUnlockingId] = useState<number | null>(null)
    const [unlockingPool, setUnlockingPool] = useState<Pool | null>(null)

    const { mutate: unlock } = useMutation<unknown, unknown, { pool: Pool; depositId: number }>(
        ({ depositId, pool }) => scCaller.current![pool].withdraw(depositId, account!),
        {
            onMutate: ({ pool, depositId }) => {
                setUnlockingId(depositId)
                setUnlockingPool(pool)
            },
            onSuccess: () => {
                qc.invalidateQueries("fetch")
            },
            onSettled: () => {
                setUnlockingId(null)
                setUnlockingPool(null)
            },
        }
    )

    const totalStakedInUSD =
        (dataFetch?.StakingPools.accountTotalDeposit || 0) * sipherPrice +
        (dataFetch?.StakingLPSipherWethUniswap.accountTotalDeposit || 0) * lpUniswapPrice! +
        (dataFetch?.StakingLPSipherWethKyber.accountTotalDeposit || 0) * lpKyberPrice!

    const unclaimedRewards = dataFetch?.pendingRewards || 0

    const totalEarned =
        dataFetch?.StakingPools.accountClaimedRewards ||
        0 +
            (dataFetch?.StakingLPSipherWethUniswap.accountClaimedRewards || 0) +
            (dataFetch?.StakingLPSipherWethKyber.accountClaimedRewards || 0)

    const stakingPoolInfos = [
        {
            poolName: "$SIPHER",
            APR:
                ((((dataFetch?.StakingPools.weight || 0) / (dataFetch?.totalWeight || 1)) * TOTAL_REWARDS_FOR_POOL) /
                    stakePoolTotalSupply!) *
                2,
            totalValueLocked: stakeData?.stakePoolTotalStakedByUSD,
            pendingRewards: dataFetch?.StakingPools.accountPendingRewards,
            weight: Math.round(((dataFetch?.StakingPools.weight || 0) / (dataFetch?.totalWeight || 1)) * 100),
            TVL: 0,
            onStake: () => router.push(`/stake/deposit/$sipher`),
            isUniswap: false,
            detailButtons: [
                {
                    text: "Buy $SIPHER on Uniswap",
                    link: `https://app.uniswap.org/#/swap?outputCurrency=${SipherTokenAddress}`,
                },
                {
                    text: "Buy $SIPHER on Kyberswap",
                    link: `https://kyberswap.com/#/swap?inputCurrency=${SipherTokenAddress}&outputCurrency=ETH`,
                },
            ],
        },
        {
            poolName: "Uniswap LP $SIPHER-ETH",
            APR:
                ((((dataFetch?.StakingLPSipherWethUniswap.weight || 0) / (dataFetch?.totalWeight || 1)) *
                    TOTAL_REWARDS_FOR_POOL) /
                    lpUniswapPoolTotalSupply!) *
                2,
            totalValueLocked: stakeData?.lpUniswapPoolTotalStakedByUSD,
            pendingRewards: dataFetch?.StakingLPSipherWethUniswap.accountPendingRewards,
            weight: Math.round(
                ((dataFetch?.StakingLPSipherWethUniswap.weight || 0) / (dataFetch?.totalWeight || 1)) * 100
            ),
            TVL: lpTVL,
            onStake: () => router.push(`/stake/deposit/uniswap-lp-$sipher-eth`),
            isUniswap: true,
            detailButtons: [
                {
                    text: "Buy Uniswap LP $SIPHER-ETH",
                    link: `https://app.uniswap.org/#/add/v2/${SipherTokenAddress}/ETH`,
                },
            ],
        },
        {
            poolName: "Kyber LP $SIPHER-ETH",
            APR:
                ((((dataFetch?.StakingLPSipherWethKyber.weight || 0) / (dataFetch?.totalWeight || 1)) *
                    TOTAL_REWARDS_FOR_POOL) /
                    lpKyberPoolTotalSupply!) *
                2,
            totalValueLocked: stakeData?.lpKyberPoolTotalStakedByUSD,
            pendingRewards: dataFetch?.StakingLPSipherWethKyber.accountPendingRewards,
            weight: Math.round(
                ((dataFetch?.StakingLPSipherWethKyber.weight || 0) / (dataFetch?.totalWeight || 1)) * 100
            ),
            TVL: lpTVL,
            onStake: () => router.push(`/stake/deposit/kyber-lp-$sipher-eth`),
            isUniswap: true,
            detailButtons: [
                {
                    text: "Buy Kyber LP $SIPHER-ETH",
                    link: `https://kyberswap.com/#/add/${SipherTokenAddress}/ETH/${LPSipherWethKyberAddress}`,
                },
            ],
        },
    ]

    const stakingPoolDeposits = [
        ...(dataFetch?.StakingPools.deposits || []).map((deposit, idx) => ({
            key: deposit.start,
            poolName: "$SIPHER",
            staked: currency(deposit.amount * sipherPrice, "$"),
            estimatedDailyRewards: currency(
                ((stakingPoolInfos[0].weight * TOTAL_REWARDS_FOR_POOL) / stakePoolTotalSupply! / 365) *
                    deposit.amount *
                    calWeight(deposit.start, deposit.end) *
                    sipherPrice,
                "$"
            ),
            lockDate: format(new Date(deposit.start), "MMM dd Y"),
            unlockDate: format(new Date(deposit.end), "MMM dd Y"),
            onUnlock: () => unlock({ pool: "StakingPools", depositId: idx }),
            isUnlockable: new Date().getTime() > deposit.end,
            isUnlocking: unlockingId === idx && unlockingPool === "StakingPools",
            isUniswap: false,
        })),
        ...(dataFetch?.StakingLPSipherWethUniswap.deposits || []).map((deposit, idx) => ({
            key: deposit.start,
            poolName: "Uniswap LP $SIPHER-ETH",
            staked: currency(deposit.amount * lpUniswapPrice!, "$"),
            estimatedDailyRewards: currency(
                ((stakingPoolInfos[1].weight * TOTAL_REWARDS_FOR_POOL) / stakePoolTotalSupply! / 365) *
                    deposit.amount *
                    calWeight(deposit.start, deposit.end) *
                    sipherPrice,
                "$"
            ),
            lockDate: format(new Date(deposit.start), "MMM dd Y"),
            unlockDate: format(new Date(deposit.end), "MMM dd Y"),
            onUnlock: () => unlock({ pool: "StakingLPSipherWethUniswap", depositId: idx }),
            isUnlockable: new Date().getTime() > deposit.end,
            isUnlocking: unlockingId === idx && unlockingPool === "StakingLPSipherWethUniswap",
            isUniswap: true,
        })),
        ...(dataFetch?.StakingLPSipherWethKyber.deposits || []).map((deposit, idx) => ({
            key: deposit.start,
            poolName: "Kyber LP $SIPHER-ETH",
            staked: currency(deposit.amount * lpKyberPrice!, "$"),
            estimatedDailyRewards: currency(
                ((stakingPoolInfos[1].weight * TOTAL_REWARDS_FOR_POOL) / stakePoolTotalSupply! / 365) *
                    deposit.amount *
                    calWeight(deposit.start, deposit.end) *
                    sipherPrice,
                "$"
            ),
            lockDate: format(new Date(deposit.start), "MMM dd Y"),
            unlockDate: format(new Date(deposit.end), "MMM dd Y"),
            onUnlock: () => unlock({ pool: "StakingLPSipherWethUniswap", depositId: idx }),
            isUnlockable: new Date().getTime() > deposit.end,
            isUnlocking: unlockingId === idx && unlockingPool === "StakingLPSipherWethUniswap",
            isUniswap: true,
        })),
    ]

    return {
        dataFetch,
        stakeData,
        stakePoolTotalSupply,
        lpPoolTotalSupply: lpUniswapPoolTotalSupply,
        lpTVL,
        /** Total claimed (USD) */
        totalClaimedInUSD: totalClaimed! * sipherPrice,
        sipherPrice,
        /** Total staked (USD) */
        totalStakedInUSD,
        unclaimedRewards,
        totalEarned,
        stakingPoolInfos,
        stakingPoolDeposits,
    }
}

export default useOverview
