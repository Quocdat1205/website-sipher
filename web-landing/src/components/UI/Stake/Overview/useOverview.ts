import { TOTAL_REWARDS_FOR_POOL } from "@constant/index"
import { useLpKyberPrice, useLpUniswapPrice, useSipherPrice } from "@hooks/api"
import useTransactionToast from "@hooks/useTransactionToast"
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
    const router = useRouter()
    const qc = useQueryClient()
    const toastTransaction = useTransactionToast()

    const sipherPrice = useSipherPrice()
    const lpUniswapPrice = useLpUniswapPrice()
    const lpKyberPrice = useLpKyberPrice()

    const { data: totalClaimed } = useQuery(["total-claimed", account], () => scCaller.current!.getTotalClaimed(), {
        enabled: !!scCaller.current,
        initialData: 0,
    })

    const { data: dataFetch } = useQuery(["fetch", account], () => scCaller.current!.View.fetchData(account!), {
        enabled: !!scCaller.current && !!account,
        onSuccess: data => console.log(data),
    })

    const { data: stakeData } = useQuery(["total-staked", account], () => scCaller.current!.getTotalStaked(), {
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

    const { data: lpUniswapTVL } = useQuery(["lp-tvl", "uniswap"], () => scCaller.current!.getLpUniswapTVL(), {
        initialData: 0,
        enabled: !!scCaller.current,
    })

    const { data: lpKyberTVL } = useQuery(["lp-tvl", "kyber"], () => scCaller.current!.getLpKyberTVL(), {
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
                toastTransaction({ status: "processing" })
            },
            onSuccess: () => {
                toastTransaction({ status: "success", message: ["You have successfully withdrawn your fund."] })
                qc.invalidateQueries("fetch")
            },
            onSettled: () => {
                setUnlockingId(null)
                setUnlockingPool(null)
            },
            onError: () => {
                toastTransaction({ status: "failed" })
            },
        }
    )

    const totalStakedInUSD = !dataFetch
        ? 0
        : dataFetch.StakingPools.accountTotalDeposit * sipherPrice +
          dataFetch.StakingLPSipherWethUniswap.accountTotalDeposit * lpUniswapPrice +
          dataFetch.StakingLPSipherWethKyber.accountTotalDeposit * lpKyberPrice

    const unclaimedRewards = !dataFetch
        ? 0
        : dataFetch.StakingPools.accountPendingRewards +
          dataFetch.StakingLPSipherWethKyber.accountPendingRewards +
          dataFetch.StakingLPSipherWethUniswap.accountPendingRewards

    const totalEarned = !dataFetch
        ? 0
        : dataFetch.StakingPools.accountClaimedRewards +
          dataFetch.StakingLPSipherWethUniswap.accountClaimedRewards +
          dataFetch.StakingLPSipherWethKyber.accountClaimedRewards

    const stakingPoolInfos = [
        {
            poolName: "$SIPHER",
            APR: !dataFetch
                ? 0
                : (((dataFetch.StakingPools.weight / dataFetch.totalWeight) * TOTAL_REWARDS_FOR_POOL) /
                      stakePoolTotalSupply!) *
                  2,
            totalValueLocked: stakeData?.stakePoolTotalStakedByUSD || 0,
            pendingRewards: dataFetch?.StakingPools.accountPendingRewards || 0,
            weight: !dataFetch ? 0 : Math.round((dataFetch.StakingPools.weight / dataFetch.totalWeight) * 100),
            TVL: 0,
            onStake: () => router.push(`/stake/deposit/$sipher`),
            isUniswap: false,
            myLiquidity: dataFetch?.StakingPools.accountTotalDeposit || 0,
            detailButtons: [
                {
                    text: "Buy $SIPHER on Uniswap",
                    link: `https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=${SipherTokenAddress}`,
                },
                {
                    text: "Buy $SIPHER on Kyberswap",
                    link: `https://kyberswap.com/#/swap?inputCurrency=ETH&outputCurrency=${SipherTokenAddress}`,
                },
            ],
        },
        {
            poolName: "Uniswap LP $SIPHER-ETH",
            APR: !dataFetch
                ? 0
                : (((dataFetch.StakingLPSipherWethUniswap.weight / dataFetch.totalWeight) *
                      TOTAL_REWARDS_FOR_POOL *
                      sipherPrice) /
                      (lpUniswapPoolTotalSupply! * lpUniswapPrice)) *
                  2,
            totalValueLocked: stakeData?.lpUniswapPoolTotalStakedByUSD || 0,
            pendingRewards: dataFetch?.StakingLPSipherWethUniswap.accountPendingRewards || 0,
            weight: !dataFetch
                ? 0
                : Math.round((dataFetch.StakingLPSipherWethUniswap.weight / dataFetch.totalWeight) * 100),
            TVL: lpUniswapTVL || 0,
            onStake: () => router.push(`/stake/deposit/uniswap-lp-$sipher-eth`),
            isUniswap: true,
            myLiquidity: dataFetch?.StakingLPSipherWethUniswap.accountTotalDeposit || 0,
            detailButtons: [
                {
                    text: "Buy Uniswap LP $SIPHER-ETH",
                    link: `https://app.uniswap.org/#/add/v2/${SipherTokenAddress}/ETH`,
                },
            ],
        },
        {
            poolName: "Kyber LP $SIPHER-ETH",

            APR: !dataFetch
                ? 0
                : (((dataFetch.StakingLPSipherWethKyber.weight / dataFetch.totalWeight) *
                      TOTAL_REWARDS_FOR_POOL *
                      sipherPrice) /
                      (lpKyberPoolTotalSupply! * lpKyberPrice)) *
                  2,
            totalValueLocked: stakeData?.lpKyberPoolTotalStakedByUSD || 0,
            pendingRewards: dataFetch?.StakingLPSipherWethKyber.accountPendingRewards || 0,
            weight: !dataFetch
                ? 0
                : Math.round((dataFetch.StakingLPSipherWethKyber.weight / dataFetch.totalWeight) * 100),
            TVL: lpKyberTVL || 0,
            onStake: () => router.push(`/stake/deposit/kyber-lp-$sipher-eth`),
            isUniswap: true,
            myLiquidity: dataFetch?.StakingLPSipherWethKyber.accountTotalDeposit || 0,
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
                (((stakingPoolInfos[0].weight / 100) * TOTAL_REWARDS_FOR_POOL) / stakePoolTotalSupply! / 365) *
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
                (((stakingPoolInfos[1].weight / 100) * TOTAL_REWARDS_FOR_POOL) / lpUniswapPoolTotalSupply! / 365) *
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
                (((stakingPoolInfos[2].weight / 100) * TOTAL_REWARDS_FOR_POOL) / lpKyberPoolTotalSupply! / 365) *
                    deposit.amount *
                    calWeight(deposit.start, deposit.end) *
                    sipherPrice,
                "$"
            ),
            lockDate: format(new Date(deposit.start), "MMM dd Y"),
            unlockDate: format(new Date(deposit.end), "MMM dd Y"),
            onUnlock: () => unlock({ pool: "StakingLPSipherWethKyber", depositId: idx }),
            isUnlockable: new Date().getTime() > deposit.end,
            isUnlocking: unlockingId === idx && unlockingPool === "StakingLPSipherWethKyber",
            isUniswap: true,
        })),
    ]

    return {
        stakeData,
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
