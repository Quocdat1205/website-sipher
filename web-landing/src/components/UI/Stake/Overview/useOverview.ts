import { useSipherPrice } from "@hooks/api"
import useWalletContext from "@hooks/web3/useWalletContext"
import { useMutation, useQuery, useQueryClient } from "react-query"

const useOverview = () => {
    const { scCaller, account } = useWalletContext()
    const sipherPrice = useSipherPrice()

    const qc = useQueryClient()

    const { mutate: claimRewards, isLoading: isClaiming } = useMutation(() =>
        scCaller.current!.StakingPools.claimRewards(account!)
    )

    const { data: totalClaimed } = useQuery("total-claimed", () => scCaller.current!.getTotalClaimed(), {
        enabled: !!scCaller.current,
        initialData: 0,
    })

    const { data: dataFetch } = useQuery(["fetch", account], () => scCaller.current!.View.fetchData(account!), {
        enabled: !!scCaller.current && !!account,
    })

    const { data: stakeData } = useQuery("total-staked", () => scCaller.current!.getTotalStaked(), {
        initialData: {
            lpPoolTotalStakedByUSD: 0,
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

    const { data: lpPoolTotalSupply } = useQuery(
        "lp-pool-total-supply",
        () => scCaller.current!.LpPools.totalSupply(),
        {
            initialData: 1,
            enabled: !!scCaller.current,
        }
    )

    const { data: lpTVL } = useQuery("lp-tvl", () => scCaller.current!.getLpTVL(), {
        initialData: 0,
        enabled: !!scCaller.current,
    })

    return {
        claimRewards,
        isClaiming,
        dataFetch,
        stakeData,
        stakePoolTotalSupply,
        lpPoolTotalSupply,
        lpTVL,
        totalClaimed,
        sipherPrice,
    }
}

export default useOverview
