import StakingPoolsDesktop from "./DesktopUI/StakingPoolsDesktop"
import StakingPoolsMobile from "./MobileUI/StakingPoolsMobile"

export interface StakingPoolsProps {
    amountStakedStakePool: number
    amountStakedLpPool: number
    claimableRewardsStakePool: number
    claimableRewardsLpPool: number
    claimLpPool: () => void
    claimStakePool: () => void
    isClaimingLpPool: boolean
    isClaimingStakePool: boolean
    sipherPrice: number
    lpPrice: number
}

const StakingPools = ({
    amountStakedLpPool,
    amountStakedStakePool,
    claimableRewardsLpPool,
    claimableRewardsStakePool,
    claimLpPool,
    claimStakePool,
    isClaimingLpPool,
    isClaimingStakePool,
    sipherPrice,
    lpPrice,
}: StakingPoolsProps) => {
    return (
        <>
            <StakingPoolsDesktop
                lpPrice={lpPrice}
                sipherPrice={sipherPrice}
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
                lpPrice={lpPrice}
                sipherPrice={sipherPrice}
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
