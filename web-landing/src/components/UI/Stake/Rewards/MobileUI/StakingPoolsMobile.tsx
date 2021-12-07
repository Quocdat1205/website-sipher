import { Img, Flex, Box, Text } from "@chakra-ui/react"
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
        <Box>
            <Text textAlign="center" letterSpacing="3px" size="large" fontWeight="semibold" mb={4}>
                STAKING POOLS
            </Text>
            <Box rounded="xl" border="1px" borderColor="#383838" py={4} px={2} bg="rgba(0, 0, 0, 0.9)">
                <Box w="full">
                    <Flex align="center" w="full" pb={4} px={4} borderBottom="1px" borderColor="#383838">
                        <Text fontWeight="semibold" w="35%">
                            Pool
                        </Text>
                        <Text fontWeight="semibold" w="35%">
                            Amount Staked
                        </Text>
                        <Text fontWeight="semibold" w="30%">
                            Claimable Rewards
                        </Text>
                    </Flex>
                    <Box borderBottom="1px" borderColor="#383838" p={4}>
                        <Box>
                            <Flex mb={4} w="full" align="center">
                                <Flex align="center" w="35%">
                                    <Img src="/images/icons/sipher.png" boxSize="1.5rem" />
                                    <Text ml={1}>$SIPHER</Text>
                                </Flex>
                                <Text w="35%" textAlign="left">
                                    ${currency(amountStaked * sipherPrice)}
                                </Text>
                                <Text w="30%" textAlign="left">
                                    {currency(claimableRewards)} SP
                                </Text>
                            </Flex>
                            <Box textAlign="left">
                                <ActionButton
                                    text="CLAIM"
                                    onClick={() => claim()}
                                    isLoading={isClaiming}
                                    disabled={claimableRewards <= 0}
                                    size="small"
                                    w="10rem"
                                />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default StakingPoolsMobile
