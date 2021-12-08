import { Box, Text, Stack } from "@chakra-ui/react"
import { useSipherPrice } from "@hooks/api"
import useWalletContext from "@hooks/web3/useWalletContext"
import React from "react"
import { useMutation } from "react-query"
import TablePoolMobile from "./TablePoolMobile"

interface StakingPoolsInterface {
    amountStakedStakePool: number
    amountStakedLpPool: number
    claimableRewardsStakePool: number
    claimableRewardsLpPool: number
}

const StakingPoolsMobile = ({
    amountStakedLpPool,
    amountStakedStakePool,
    claimableRewardsLpPool,
    claimableRewardsStakePool,
}: StakingPoolsInterface) => {
    const sipherPrice = useSipherPrice()

    const { scCaller, account } = useWalletContext()

    const { mutate: claimStakePool, isLoading: isClaimingStakePool } = useMutation(() =>
        scCaller.current!.StakingPools.claimRewards(account!)
    )

    const { mutate: claimLpPool, isLoading: isClaimingLpPool } = useMutation(() =>
        scCaller.current!.LpPools.claimRewards(account!)
    )

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
                    poolName="$SIPHER"
                    sipherPrice={sipherPrice}
                    amountStaked={amountStakedStakePool}
                    claimableRewards={claimableRewardsStakePool}
                    onClick={() => claimStakePool()}
                    isLoading={isClaimingStakePool}
                />
                <TablePoolMobile
                    poolName="SIPHER/ETH LP"
                    isUniswap
                    sipherPrice={sipherPrice}
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
