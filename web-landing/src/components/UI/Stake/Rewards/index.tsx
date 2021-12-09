// * DESCRIPTION:

import { Flex, Box, VStack, Text } from "@chakra-ui/react"
import { Typo } from "@components/shared"
import React from "react"
import LockedRewardsMobile from "./MobileUI/LockedRewardsMobile"
import LockedRewardsDesktop from "./DesktopUI/LockedRewardsDesktop"
import StakingPools from "./StakingPools"
import useRewards from "./useRewards"

const Rewards = () => {
    const {
        dataFetch,
        claimLpPool,
        isClaimingLpPool,
        claimStakePool,
        isClaimingStakePool,
        sipherPrice,
        unlock,
        unlockingId,
        lpPrice,
    } = useRewards()

    return (
        <Flex direction="column" align="center" w="full">
            <Box w="full" maxW="60rem" px={4}>
                <Box mb={16}>
                    <Typo.Heading mb={2} textAlign={["center", "left"]}>
                        Rewards
                    </Typo.Heading>
                    <Text textAlign={["center", "left"]} letterSpacing="3px" fontSize="lg" fontWeight="semibold" mb={2}>
                        CLAIM YOUR SIPHER REWARDS
                    </Text>
                    <Text fontSize="sm">Staking rewards enter a 12 month vesting period after claiming.</Text>
                </Box>
                <VStack spacing={8} align="stretch">
                    <StakingPools
                        lpPrice={lpPrice!}
                        sipherPrice={sipherPrice}
                        claimLpPool={claimLpPool}
                        isClaimingLpPool={isClaimingLpPool}
                        claimStakePool={claimStakePool}
                        isClaimingStakePool={isClaimingStakePool}
                        amountStakedStakePool={dataFetch?.sipherPool.accountTotalDeposit || 0}
                        amountStakedLpPool={dataFetch?.lpPool.accountTotalDeposit || 0}
                        claimableRewardsLpPool={dataFetch?.lpPool.accountPendingRewards || 0}
                        claimableRewardsStakePool={dataFetch?.sipherPool.accountPendingRewards || 0}
                    />
                    <LockedRewardsDesktop
                        sipherPrice={sipherPrice}
                        unlock={unlock}
                        unlockingId={unlockingId}
                        deposits={dataFetch?.escrowPool.deposits || []}
                    />
                    <LockedRewardsMobile
                        sipherPrice={sipherPrice}
                        unlock={unlock}
                        unlockingId={unlockingId}
                        deposits={dataFetch?.escrowPool.deposits || []}
                    />
                </VStack>
            </Box>
        </Flex>
    )
}

export default Rewards
