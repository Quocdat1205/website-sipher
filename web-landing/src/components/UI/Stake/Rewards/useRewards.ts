import { useState } from "react"
import { useLpKyberPrice, useLpUniswapPrice, useSipherPrice } from "@hooks/api"
import useWalletContext from "@hooks/web3/useWalletContext"
import { useMutation, useQuery, useQueryClient } from "react-query"
import { currency } from "@source/utils"
import { Pool } from "@@types"
import useTransactionToast from "@hooks/useTransactionToast"
import { format } from "date-fns"

export interface StakingPoolData {
    poolName: string
    amountStaked: string
    claimableRewards: string
    onClaim: () => void
    isClaiming: boolean
    isClaimable: boolean
    isUniswap: boolean
}

const useRewards = () => {
    const [unlockingId, setUnlockingId] = useState<number | null>(null)
    const { scCaller, account } = useWalletContext()
    const toastTransaction = useTransactionToast()
    const sipherPrice = useSipherPrice()
    const lpUniswapPrice = useLpUniswapPrice()
    const lpKyberPrice = useLpKyberPrice()
    const qc = useQueryClient()

    const { data: dataFetch } = useQuery(["fetch", account], () => scCaller.current!.View.fetchData(account!), {
        enabled: !!scCaller.current && !!account,
    })

    const { mutate: unlock } = useMutation<unknown, unknown, number>(
        depositId => scCaller.current!.EscrowPools.withdraw(depositId, account!),
        {
            onMutate: depositId => {
                setUnlockingId(depositId)
                toastTransaction({ status: "processing" })
            },
            onSettled: () => setUnlockingId(null),
            onSuccess: () => {
                toastTransaction({ status: "success", message: ["You have successfully withdrawn your fund."] }),
                    qc.invalidateQueries("fetch")
            },
        }
    )

    const [claimingPool, setClaimingPool] = useState<Pool | null>(null)
    const { mutate: claim, isLoading: isClaiming } = useMutation<unknown, unknown, Pool>(
        pool => scCaller.current![pool].claimRewards(account!),
        {
            onMutate: pool => {
                setClaimingPool(pool)
                toastTransaction({ status: "processing" })
            },
            onSettled: () => setClaimingPool(null),
            onSuccess: () => {
                toastTransaction({ status: "successClaim" })
                qc.invalidateQueries("fetch")
            },
        }
    )

    const stakingPoolsData: StakingPoolData[] = [
        {
            poolName: "$SIPHER",
            amountStaked: currency((dataFetch?.StakingPools.accountTotalDeposit || 0) * sipherPrice, "$"),
            claimableRewards: currency(dataFetch?.StakingPools.accountPendingRewards || 0) + " $SIPHER",
            onClaim: () => claim("StakingPools"),
            isClaiming: claimingPool === "StakingPools",
            isClaimable: (dataFetch?.StakingPools.accountPendingRewards || 0) > 0,
            isUniswap: false,
        },
        {
            poolName: "Uniswap LP $SIPHER-ETH",
            amountStaked: currency(
                (dataFetch?.StakingLPSipherWethUniswap.accountTotalDeposit || 0) * lpUniswapPrice,
                "$"
            ),
            claimableRewards: currency(dataFetch?.StakingLPSipherWethUniswap.accountPendingRewards || 0) + " $SIPHER",
            onClaim: () => claim("StakingLPSipherWethUniswap"),
            isClaiming: claimingPool === "StakingLPSipherWethUniswap",
            isClaimable: (dataFetch?.StakingLPSipherWethUniswap.accountPendingRewards || 0) > 0,
            isUniswap: true,
        },
        {
            poolName: "Kyber LP $SIPHER-ETH",
            amountStaked: currency((dataFetch?.StakingLPSipherWethKyber.accountTotalDeposit || 0) * lpKyberPrice, "$"),
            claimableRewards: currency(dataFetch?.StakingLPSipherWethKyber.accountPendingRewards || 0) + " $SIPHER",
            onClaim: () => claim("StakingLPSipherWethKyber"),
            isClaiming: claimingPool === "StakingLPSipherWethKyber",
            isClaimable: (dataFetch?.StakingLPSipherWethKyber.accountPendingRewards || 0) > 0,
            isUniswap: true,
        },
    ]

    const lockedRewardsData = !dataFetch
        ? []
        : dataFetch.escrowPool.deposits.map((deposit, idx) => ({
              key: deposit.start,
              amount: currency(deposit.amount),
              dollarValue: currency(deposit.amount * sipherPrice),
              status: new Date().getTime() > deposit.end ? "Available" : "Locked",
              timeRemaining: format(new Date(deposit.end), "MMM dd Y"),
              onUnlock: () => unlock(idx),
              isUnlocking: unlockingId === idx,
              isUnlockable: new Date().getTime() > deposit.end,
          }))

    return { stakingPoolsData, lockedRewardsData }
}

export default useRewards
