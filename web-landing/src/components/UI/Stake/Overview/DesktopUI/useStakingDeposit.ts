import { useState } from "react"
import { useSipherPrice } from "@hooks/api"
import useWalletContext from "@hooks/web3/useWalletContext"
import { useMutation, useQuery, useQueryClient } from "react-query"

const useStakingDeposit = () => {
    const [unlockingId, setUnlockingId] = useState<number | null>(null)
    const { scCaller, account } = useWalletContext()
    const sipherPrice = useSipherPrice()

    const qc = useQueryClient()

    const { data: lpPrice } = useQuery("lp-price", () => scCaller.current!.getLpPrice(), { initialData: 0 })

    const { mutate: unlockStakePool, isLoading: isUnlockingStakePool } = useMutation<unknown, unknown, number>(
        depositId => scCaller.current!.StakingPools.withdraw(depositId, account!),
        {
            onMutate: depositId => {
                setUnlockingId(depositId)
            },
            onSuccess: () => {
                qc.invalidateQueries("fetch")
            },
            onSettled: () => {
                setUnlockingId(null)
            },
        }
    )

    const { mutate: unlockLpPool, isLoading: isUnlockingLpPool } = useMutation<unknown, unknown, number>(
        depositId => scCaller.current!.LpPools.withdraw(depositId, account!),
        {
            onMutate: depositId => {
                setUnlockingId(depositId)
            },
            onSuccess: () => {
                qc.invalidateQueries("fetch")
            },
            onSettled: () => {
                setUnlockingId(null)
            },
        }
    )

    return {
        sipherPrice,
        unlockLpPool,
        isUnlockingLpPool,
        isUnlockingStakePool,
        unlockStakePool,
        unlockingId,
        lpPrice,
    }
}

export default useStakingDeposit
