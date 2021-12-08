import { Box, Text, Stack } from "@chakra-ui/react"
import { useSipherPrice } from "@hooks/api"
import useWalletContext from "@hooks/web3/useWalletContext"
import React from "react"
import { useMutation } from "react-query"
import TablePoolMobile from "./TablePoolMobile"

interface StakingPoolsInterface {
    amountStaked?: number
    claimableRewards?: number
}

const StakingPoolsMobile = ({ amountStaked, claimableRewards }: StakingPoolsInterface) => {
    const sipherPrice = useSipherPrice()

    const { scCaller, account } = useWalletContext()

    const { mutate: claim, isLoading: isClaiming } = useMutation(() =>
        scCaller.current!.StakingPools.claimRewards(account!)
    )

    return (
        <Box display={["block", "block", "none"]}>
            <Text textAlign="center" letterSpacing="3px" size="large" fontWeight="semibold" mb={4}>
                STAKING POOLS
            </Text>
            <Box rounded="xl" border="1px" borderColor="#383838" py={4} px={2} bg="rgba(0, 0, 0, 0.9)">
                <Stack>
                    <TablePoolMobile
                        poolName="SIPHER"
                        sipherPrice={sipherPrice}
                        amountStaked={amountStaked}
                        claimableRewards={claimableRewards}
                        onClick={() => claim()}
                        isLoading={isClaiming}
                    />
                    <TablePoolMobile
                        poolName="SIPHER/ETH LP"
                        isUniswap
                        sipherPrice={sipherPrice}
                        amountStaked={amountStaked}
                        claimableRewards={claimableRewards}
                        onClick={() => claim()}
                        isLoading={isClaiming}
                    />
                </Stack>
            </Box>
        </Box>
    )
}

export default StakingPoolsMobile
