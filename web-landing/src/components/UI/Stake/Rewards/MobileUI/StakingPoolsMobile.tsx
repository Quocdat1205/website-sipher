import { Box, Text, Stack } from "@chakra-ui/react"
import React from "react"
import { StakingPoolsProps } from "../StakingPools"
import TablePoolMobile from "./TablePoolMobile"

const StakingPoolsMobile = ({
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
        <Box display={["block", "block", "none"]}>
            <Text textAlign="center" letterSpacing="3px" size="large" fontWeight="semibold" mb={4}>
                STAKING POOLS
            </Text>
            <Stack
                rounded="xl"
                border="1px"
                borderColor="#383838"
                p={4}
                bg="rgba(0, 0, 0, 0.9)"
                spacing={4}
                direction="column"
            >
                <TablePoolMobile
                    lpPrice={lpPrice}
                    sipherPrice={sipherPrice}
                    poolName="$SIPHER"
                    amountStaked={amountStakedStakePool}
                    claimableRewards={claimableRewardsStakePool}
                    onClick={() => claimStakePool()}
                    isLoading={isClaimingStakePool}
                />
                <TablePoolMobile
                    lpPrice={lpPrice}
                    sipherPrice={sipherPrice}
                    poolName="SIPHER/ETH LP"
                    isUniswap
                    amountStaked={amountStakedLpPool}
                    claimableRewards={claimableRewardsLpPool}
                    onClick={() => claimLpPool()}
                    isLoading={isClaimingLpPool}
                />
            </Stack>
        </Box>
    )
}

export default StakingPoolsMobile
