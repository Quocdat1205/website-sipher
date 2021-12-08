import { Img, Flex, Box, Text, Stack } from "@chakra-ui/react"
import { ActionButton } from "@components/shared"
import React, { useState } from "react"
import { format } from "date-fns"
import { useSipherPrice } from "@hooks/api"
import useWalletContext from "@hooks/web3/useWalletContext"
import { useMutation, useQueryClient } from "react-query"
import { TOTAL_REWARDS_FOR_POOL } from "@constant/index"
import { currency } from "@source/utils"
interface StakingDepositsProps {
    deposits: {
        amount: number
        start: number
        end: number
    }[]
    stakingDeposit: number
}

const StakingDepositsMobile = ({ deposits, stakingDeposit }: StakingDepositsProps) => {
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

    const calWeight = (start: number, end: number) => {
        return 1 + (end - start) / 1000 / (365 * 24 * 60 * 60)
    }

    return (
        <Box display={["block", "block", "none"]}>
            <Text textAlign="center" letterSpacing="3px" size="large" fontWeight="semibold" mb={2}>
                STAKING DEPOSITS
            </Text>
            <Stack spacing={2} rounded="xl" border="1px" borderColor="#383838" py={4} px={2} bg="rgba(0, 0, 0, 0.9)">
                {deposits.map((deposit, idx) => (
                    <Flex
                        bg="#292929"
                        w="full"
                        rounded="xl"
                        flexDir="column"
                        border="1px"
                        borderColor="#383838"
                        p={4}
                        key={deposit.start}
                    >
                        <Stack>
                            <Flex justify="space-between">
                                <Text fontWeight="semibold">Pool</Text>
                                <Flex align="center" justify="center">
                                    <Img src="/images/icons/sipher.png" boxSize="1.5rem" />
                                    <Text ml={4}>$SIPHER</Text>
                                </Flex>
                            </Flex>
                            <Flex justify="space-between">
                                <Text fontWeight="semibold">Staked</Text>
                                <Text textAlign="right">${currency(deposit.amount * sipherPrice)}</Text>
                            </Flex>
                            <Flex justify="space-between">
                                <Text fontWeight="semibold">Est. Daily Rewards</Text>
                                <Text textAlign="right">
                                    $
                                    {currency(
                                        (TOTAL_REWARDS_FOR_POOL / stakingDeposit / 365) *
                                            deposit.amount *
                                            calWeight(deposit.start, deposit.end) *
                                            sipherPrice
                                    )}
                                </Text>
                            </Flex>
                            <Flex justify="space-between">
                                <Text fontWeight="semibold">Lock Date</Text>
                                <Text textAlign="right">{format(new Date(deposit.start), "MMM dd Y")}</Text>
                            </Flex>
                            <Flex justify="space-between">
                                <Text fontWeight="semibold">Unlock Date</Text>
                                <Text textAlign="right">{format(new Date(deposit.end), "MMM dd Y")}</Text>
                            </Flex>
                            <ActionButton
                                text="UNLOCK"
                                px={2}
                                ml="auto"
                                onClick={() => unlock(idx)}
                                disabled={new Date().getTime() <= deposit.end}
                                isLoading={unlockingId === idx}
                                size="small"
                                w="auto"
                            />
                        </Stack>
                    </Flex>
                ))}
            </Stack>
        </Box>
    )
}

export default StakingDepositsMobile
