import { Box, Flex, Stack, Text } from "@chakra-ui/react"
import useRewards from "../useRewards"
import TablePoolDesktop from "./TablePoolDesktop"
import TablePoolMobile from "./TablePoolMobile"

export interface StakingPoolsProps {
    pools: ReturnType<typeof useRewards>["stakingPoolsData"]
}

const StakingPools = ({ pools }: StakingPoolsProps) => {
    return (
        <Box>
            {/* DESKTOP */}
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
                        {pools.map(pool => (
                            <TablePoolDesktop key={pool.poolName} poolData={pool} />
                        ))}
                    </Box>
                </Box>
            </Box>
            {/* MOBILE */}
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
                    {pools.map(pool => (
                        <TablePoolMobile key={pool.poolName} poolData={pool} />
                    ))}
                </Stack>
            </Box>
        </Box>
    )
}

export default StakingPools
