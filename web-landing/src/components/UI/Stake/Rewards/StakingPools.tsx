import { Flex, Box, Text } from "@chakra-ui/react"
import useWalletContext from "@hooks/web3/useWalletContext"
import React from "react"
import { useMutation } from "react-query"
import TablePool from "./TablePool"

interface StakingPoolsInterface {
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
}: StakingPoolsInterface) => {
    const { scCaller, account } = useWalletContext()

    const { mutate: claimStakePool, isLoading: isClaimingStakePool } = useMutation(() =>
        scCaller.current!.StakingPools.claimRewards(account!)
    )

    const { mutate: claimLpPool, isLoading: isClaimingLpPool } = useMutation(() =>
        scCaller.current!.LpPools.claimRewards(account!)
    )

    return (
        <Box display={["none", "none", "block"]}>
            <Text letterSpacing="3px" size="large" fontWeight="semibold" mb={4}>
                STAKING POOLS
            </Text>
            <Box rounded="xl" border="1px" borderColor="#383838" p={8} bg="rgba(0, 0, 0, 0.9)">
                <Box w="full">
                    <Flex w="full" pb={4} px={4} borderBottom="1px" borderColor="#383838">
                        <Text fontWeight="semibold" w="25%">
                            Pool
                        </Text>
                        <Text fontWeight="semibold" w="25%">
                            Amount Staked
                        </Text>
                        <Text fontWeight="semibold" w="25%">
                            Claimable Rewards
                        </Text>
                    </Flex>
                    <TablePool
                        poolName="$SIPHER"
                        isLoading={isClaimingStakePool}
                        amountStaked={amountStakedStakePool}
                        claimableRewards={claimableRewardsStakePool}
                        onClick={() => claimStakePool()}
                    />
                    <TablePool
                        poolName="SIPHER/ETH LP"
                        isUniswap
                        isLoading={isClaimingLpPool}
                        amountStaked={amountStakedLpPool}
                        claimableRewards={claimableRewardsLpPool}
                        onClick={() => claimLpPool()}
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default StakingPools
