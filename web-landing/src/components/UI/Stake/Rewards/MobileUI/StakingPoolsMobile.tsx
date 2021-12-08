import { Img, Flex, Box, Text, Stack } from "@chakra-ui/react"
import { ActionButton } from "@components/shared"
import { useSipherPrice } from "@hooks/api"
import useWalletContext from "@hooks/web3/useWalletContext"
import { currency } from "@source/utils"
import React from "react"
import { useMutation } from "react-query"

interface StakingPoolsInterface {
    amountStaked?: number
    claimableRewards?: number
}

const StakingPoolsMobile = ({ amountStaked = 0, claimableRewards = 0 }: StakingPoolsInterface) => {
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
                <Box w="full">
                    <Box bg="#292929" rounded="xl" border="1px" borderColor="#383838" p={4}>
                        <Stack>
                            <Flex justify="space-between">
                                <Text fontWeight="semibold">Pool</Text>
                                <Flex align="center">
                                    <Img src="/images/icons/sipher.png" boxSize="1.5rem" />
                                    <Text ml={1}>$SIPHER</Text>
                                </Flex>
                            </Flex>
                            <Flex justify="space-between">
                                <Text fontWeight="semibold">Amount Staked</Text>
                                <Text>${currency(amountStaked * sipherPrice)}</Text>
                            </Flex>
                            <Flex justify="space-between">
                                <Text fontWeight="semibold">Claimable Rewards</Text>
                                <Text>{currency(claimableRewards)} SP</Text>
                            </Flex>
                            <ActionButton
                                text="CLAIM"
                                onClick={() => claim()}
                                isLoading={isClaiming}
                                disabled={claimableRewards <= 0}
                                size="small"
                                w="auto"
                            />
                        </Stack>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default StakingPoolsMobile
