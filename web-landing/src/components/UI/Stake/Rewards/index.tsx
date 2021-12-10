// * DESCRIPTION:

import { Flex, Box, VStack, Text } from "@chakra-ui/react"
import { Typo } from "@components/shared"
import React from "react"
import LockedRewards from "./LockedRewards"
import StakingPools from "./StakingPools"
import useRewards from "./useRewards"

const Rewards = () => {
    const { dataFetch, sipherPrice, unlock, unlockingId, stakingPoolsData } = useRewards()

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
                    <StakingPools pools={stakingPoolsData} />
                    <LockedRewards
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
