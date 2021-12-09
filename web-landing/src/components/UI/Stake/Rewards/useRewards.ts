import { useState } from "react"
import { useSipherPrice } from "@hooks/api"
import useWalletContext from "@hooks/web3/useWalletContext"
import { useMutation, useQuery } from "react-query"

const useRewards = () => {
    const [unlockingId, setUnlockingId] = useState<number | null>(null)
    const { scCaller, account } = useWalletContext()
    const sipherPrice = useSipherPrice()

    const { data: dataFetch } = useQuery(["fetch", account], () => scCaller.current!.View.fetchData(account!), {
        enabled: !!scCaller.current && !!account,
    })

    const { mutate: unlock } = useMutation<unknown, unknown, number>(
        depositId => scCaller.current!.EscrowPools.withdraw(depositId, account!),
        {
            onMutate: depositId => setUnlockingId(depositId),
            onSettled: () => setUnlockingId(null),
        }
    )

    const { data: lpPrice } = useQuery("lp-price", () => scCaller.current!.getLpPrice(), {
        enabled: !!scCaller.current,
        initialData: 0,
    })

    const { mutate: claimStakePool, isLoading: isClaimingStakePool } = useMutation(() =>
        scCaller.current!.StakingPools.claimRewards(account!)
    )

    const { mutate: claimLpPool, isLoading: isClaimingLpPool } = useMutation(() =>
        scCaller.current!.LpPools.claimRewards(account!)
    )

    return {
        dataFetch,
        unlock,
        sipherPrice,
        unlockingId,
        lpPrice,
        claimStakePool,
        isClaimingStakePool,
        claimLpPool,
        isClaimingLpPool,
    }
}

export default useRewards
