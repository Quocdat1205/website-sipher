import { Img, Flex, Box, Text } from "@chakra-ui/react"
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
        <Box>
            <Text letterSpacing="3px" size="large" fontWeight="semibold" mb={4}>
                STAKING DEPOSITS
            </Text>
            <Box rounded="xl" border="1px" borderColor="#383838" py={4} px={2} bg="rgba(0, 0, 0, 0.9)">
                <Box w="full">
                    <Flex align="center" w="full" pb={4} px={4}>
                        <Text fontWeight="semibold" w="45%">
                            Pool
                        </Text>
                        <Text fontWeight="semibold" w="30%">
                            Staked
                        </Text>
                        <Text fontWeight="semibold" w="25%">
                            Est. Daily Rewards
                        </Text>
                    </Flex>
                    <Box borderTop="1px" borderColor="#383838">
                        {deposits.map((deposit, idx) => (
                            <Flex
                                w="full"
                                flexDir="column"
                                borderBottom="1px"
                                borderColor="#383838"
                                p={4}
                                key={deposit.start}
                            >
                                <Flex align="center">
                                    <Flex align="center" w="45%">
                                        <Img src="/images/icons/sipher.png" boxSize="1.5rem" />
                                        <Text ml={4}>$SIPHER</Text>
                                    </Flex>
                                    <Text w="30%" textAlign="left">
                                        ${currency(deposit.amount * sipherPrice)}
                                    </Text>
                                    <Text w="25%" textAlign="left">
                                        $
                                        {currency(
                                            (TOTAL_REWARDS_FOR_POOL / stakingDeposit / 365) *
                                                deposit.amount *
                                                calWeight(deposit.start, deposit.end) *
                                                sipherPrice
                                        )}
                                    </Text>
                                </Flex>
                                <Flex bg="#292929" align="center" p={4} mt={4} rounded="xl">
                                    <Box w="35%">
                                        <Text fontWeight="semibold">Lock Date</Text>
                                        <Text textAlign="left">{format(new Date(deposit.start), "MMM dd Y")}</Text>
                                    </Box>
                                    <Box w="35%">
                                        <Text fontWeight="semibold">Unlock Date</Text>
                                        <Text textAlign="left">{format(new Date(deposit.end), "MMM dd Y")}</Text>
                                    </Box>
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
                                </Flex>
                            </Flex>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default StakingDepositsMobile
