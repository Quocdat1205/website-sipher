import useWalletContext from "@hooks/web3/useWalletContext"
import { useMutation } from "react-query"
import StakingPoolsDesktop from "./DesktopUI/StakingPoolsDesktop"
import StakingPoolsMobile from "./MobileUI/StakingPoolsMobile"

interface StakingPoolsProps {
    amountStakedStakePool: number
    amountStakedLpPool: number
    claimableRewardsStakePool: number
    claimableRewardsLpPool: number
}

const StakingPools = ({
    amountStakedLpPool,
    amountStakedStakePool,
    claimableRewardsLpPool,
    claimableRewardsStakePool,
}: StakingPoolsProps) => {
    const { scCaller, account } = useWalletContext()

    const { mutate: claimStakePool, isLoading: isClaimingStakePool } = useMutation(() =>
        scCaller.current!.StakingPools.claimRewards(account!)
    )

    const { mutate: claimLpPool, isLoading: isClaimingLpPool } = useMutation(() =>
        scCaller.current!.LpPools.claimRewards(account!)
    )

    return (
        <>
            <StakingPoolsDesktop
                amountStakedStakePool={amountStakedStakePool}
                amountStakedLpPool={amountStakedLpPool}
                claimableRewardsLpPool={claimableRewardsLpPool}
                claimableRewardsStakePool={claimableRewardsStakePool}
                claimLpPool={claimLpPool}
                claimStakePool={claimStakePool}
                isClaimingLpPool={isClaimingLpPool}
                isClaimingStakePool={isClaimingStakePool}
            />
            <StakingPoolsMobile
                amountStakedStakePool={amountStakedStakePool}
                amountStakedLpPool={amountStakedLpPool}
                claimableRewardsLpPool={claimableRewardsLpPool}
                claimableRewardsStakePool={claimableRewardsStakePool}
                claimLpPool={claimLpPool}
                claimStakePool={claimStakePool}
                isClaimingLpPool={isClaimingLpPool}
                isClaimingStakePool={isClaimingStakePool}
            />
        </>
    )
}

export default StakingPools
