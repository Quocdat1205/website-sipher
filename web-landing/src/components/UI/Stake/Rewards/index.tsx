// * DESCRIPTION:

import { Flex, Box, VStack, Text } from "@chakra-ui/react";
import { Typo } from "@components/shared";
import { useSipherPrice } from "@hooks/api";
import React from "react";
import LockedRewards from "./LockedRewards";
import LockedRewardsEarly from "./LockedRewardsEarly";
import StakingPools from "./StakingPools";
import useRewards from "./useRewards";

const Rewards = () => {
  const { stakingPoolsData, lockedRewardsData } = useRewards();
  const sipherPrice = useSipherPrice();

  return (
    <Flex direction="column" align="center" w="full">
      <Box w="full" maxW="60rem" px={4}>
        <Box mb={[8, 16]}>
          <Typo.Heading mb={2} textAlign={["center", "left"]}>
            Rewards
          </Typo.Heading>
          <Text textAlign={["center", "left"]} letterSpacing="3px" fontSize="lg" fontWeight="semibold" mb={2}>
            CLAIM YOUR SIPHER REWARDS
          </Text>
          <Text fontSize="sm" textAlign={["center", "left"]}>
            Staking rewards enter a 12 month lock-up period after claiming.
          </Text>
        </Box>
        <VStack spacing={8} align="stretch">
          <StakingPools stakingPoolsData={stakingPoolsData} sipherPrice={sipherPrice} />
          <LockedRewards lockedRewardsData={lockedRewardsData} />
          {/* <LockedRewardsEarly escrowedPool={escrowedPool} /> */}
        </VStack>
      </Box>
    </Flex>
  );
};

export default Rewards;
