// * DESCRIPTION:

import { Flex, Box, VStack, Text } from "@chakra-ui/react"
import { Typo } from "@components/shared"
import useWalletContext from "@hooks/web3/useWalletContext"
import React from "react"
import { useQuery } from "react-query"
import LockedRewardsMobile from "./MobileUI/LockedRewardsMobile"
import LockedRewardsDesktop from "./DesktopUI/LockedRewardsDesktop"
import StakingPools from "./StakingPools"

const Rewards = () => {
    const { scCaller, account } = useWalletContext()

    const { data } = useQuery(["fetch", account], () => scCaller.current!.View.fetchData(account!), {
        enabled: !!scCaller.current && !!account,
    })

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
                        amountStakedStakePool={data?.sipherPool.accountTotalDeposit || 0}
                        amountStakedLpPool={data?.lpPool.accountTotalDeposit || 0}
                        claimableRewardsLpPool={data?.lpPool.accountPendingRewards || 0}
                        claimableRewardsStakePool={data?.sipherPool.accountPendingRewards || 0}
                    />
                    <LockedRewardsDesktop deposits={data?.escrowPool.deposits || []} />
                    <LockedRewardsMobile deposits={data?.escrowPool.deposits || []} />
                </VStack>
            </Box>
        </Flex>
    )
}

export default Rewards
