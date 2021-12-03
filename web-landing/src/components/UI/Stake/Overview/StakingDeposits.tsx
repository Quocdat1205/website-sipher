import { Img, Flex, Box, Text } from "@chakra-ui/react"
import { ActionButton } from "@components/shared"
import React, { useState } from "react"
import { format } from "date-fns"
import { useSipherPrice } from "@hooks/api"
import useWalletContext from "@hooks/web3/useWalletContext"
import { useMutation, useQueryClient } from "react-query"
interface StakingDepositsProps {
    deposits: {
        amount: number
        start: number
        end: number
    }[]
    reward: number
}

const StakingDeposits = ({ deposits, reward }: StakingDepositsProps) => {
    const sipherPrice = useSipherPrice()

    const qc = useQueryClient()

    const { scCaller, account } = useWalletContext()

    const [unlockingId, setUnlockingId] = useState<number | null>(null)

    const { mutate: unlock, isLoading: isUnlocking } = useMutation<unknown, unknown, number>(
        depositId => scCaller.current!.StakingPools.withdraw(depositId, account!),
        {
            onMutate: depositId => {
                setUnlockingId(depositId)
            },
            onSuccess: () => {
                qc.invalidateQueries("fetch")
            },
            onSettled: () => {
                setUnlockingId(null)
            },
        }
    )

    return (
        <Box>
            <Text letterSpacing="3px" size="large" fontWeight="semibold" mb={4}>
                STAKING DEPOSITS
            </Text>
            <Box rounded="xl" border="1px" borderColor="#383838" p={8} bg="rgba(0, 0, 0, 0.9)">
                <Box w="full">
                    <Flex w="full" pb={4} px={4}>
                        <Text fontWeight="semibold" w="20%">
                            Pool
                        </Text>
                        <Text fontWeight="semibold" w="15%">
                            Staked
                        </Text>
                        <Text fontWeight="semibold" w="15%">
                            Est. Rewards
                        </Text>
                        <Text fontWeight="semibold" w="15%">
                            Lock Date
                        </Text>
                        <Text fontWeight="semibold" w="15%">
                            Unlock Date
                        </Text>
                    </Flex>
                    <Box borderTop="1px" borderColor="#383838">
                        {deposits.map((deposit, idx) => (
                            <Flex
                                w="full"
                                align="center"
                                borderBottom="1px"
                                borderColor="#383838"
                                p={4}
                                key={deposit.start}
                            >
                                <Flex align="center" w="20%">
                                    <Img src="/images/icons/sipher.png" boxSize="1.5rem" />
                                    <Text ml={4}>$SIPHER</Text>
                                </Flex>
                                <Text w="15%" textAlign="left">
                                    ${(deposit.amount * sipherPrice).toFixed(2)}
                                </Text>
                                <Text w="15%" textAlign="left">
                                    ${(reward * sipherPrice).toFixed(2)}
                                </Text>
                                <Text w="15%" textAlign="left">
                                    {format(new Date(deposit.start), "MMM dd Y")}
                                </Text>
                                <Text w="15%" textAlign="left">
                                    {format(new Date(deposit.end), "MMM dd Y")}
                                </Text>
                                <ActionButton
                                    text="UNLOCK"
                                    fontSize="sm"
                                    ml="auto"
                                    onClick={() => unlock(idx)}
                                    disabled={new Date().getTime() <= deposit.end}
                                    isLoading={unlockingId === idx}
                                    w="10rem"
                                />
                            </Flex>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default StakingDeposits
