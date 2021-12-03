import { Img, Flex, Box, Text } from "@chakra-ui/react"
import { ActionButton } from "@components/shared"
import { useSipherPrice } from "@hooks/api"
import useWalletContext from "@hooks/web3/useWalletContext"
import React from "react"
import { useMutation } from "react-query"

interface StakingPoolsInterface {
    amountStaked?: number
    claimableRewards?: number
}

const StakingPools = ({ amountStaked = 0, claimableRewards = 0 }: StakingPoolsInterface) => {
    const sipherPrice = useSipherPrice()

    const { scCaller, account } = useWalletContext()

    const { mutate: claim, isLoading: isClaiming } = useMutation(() =>
        scCaller.current!.StakingPools.claimRewards(account!)
    )

    return (
        <Box>
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
                    <Box borderBottom="1px" borderColor="#383838" p={4}>
                        <Flex w="full" align="center">
                            <Flex align="center" w="25%">
                                <Img src="/images/icons/sipher.png" boxSize="1.5rem" />
                                <Text ml={4}>$SIPHER</Text>
                            </Flex>
                            <Text w="25%" textAlign="left">
                                ${(amountStaked * sipherPrice).toFixed(2)}
                            </Text>
                            <Text w="25%" textAlign="left">
                                {claimableRewards.toFixed(2)} SIPHER
                            </Text>

                            <ActionButton
                                text="CLAIM"
                                fontSize="sm"
                                ml="auto"
                                onClick={() => claim()}
                                isLoading={isClaiming}
                                w="10rem"
                            />
                        </Flex>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default StakingPools
