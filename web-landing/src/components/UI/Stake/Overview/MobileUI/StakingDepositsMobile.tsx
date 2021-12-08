import { Img, Flex, Box, Text, Stack, VStack } from "@chakra-ui/react"
import { ActionButton } from "@components/shared"
import React, { useState } from "react"
import { format } from "date-fns"
import { useSipherPrice } from "@hooks/api"
import useWalletContext from "@hooks/web3/useWalletContext"
import { useMutation, useQueryClient } from "react-query"
import { TOTAL_REWARDS_FOR_POOL } from "@constant/index"
import { currency } from "@source/utils"
interface StakingDepositsProps {
    stakePoolDeposits: {
        amount: number
        start: number
        end: number
    }[]
    lpPoolDeposits: {
        amount: number
        start: number
        end: number
    }[]
    stakePoolTotalSupply: number
    lpPoolTotalSupply: number
}

const StakingDepositsMobile = ({
    lpPoolDeposits,
    lpPoolTotalSupply,
    stakePoolDeposits,
    stakePoolTotalSupply,
}: StakingDepositsProps) => {
    const sipherPrice = useSipherPrice()

    const qc = useQueryClient()

    const { scCaller, account } = useWalletContext()

    const [unlockingId, setUnlockingId] = useState<number | null>(null)

    const { mutate: unlockStakePool, isLoading: isUnlockingStakePool } = useMutation<unknown, unknown, number>(
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

    const { mutate: unlockLpPool, isLoading: isUnlockingLpPool } = useMutation<unknown, unknown, number>(
        depositId => scCaller.current!.LpPools.withdraw(depositId, account!),
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
            <VStack
                spacing={4}
                rounded="xl"
                border="1px"
                borderColor="#383838"
                p={4}
                align="stretch"
                bg="rgba(0, 0, 0, 0.9)"
            >
                {stakePoolDeposits.map((deposit, idx) => (
                    <VStack
                        bg="#1D1D1D"
                        w="full"
                        rounded="xl"
                        border="1px"
                        borderColor="#383838"
                        p={4}
                        key={deposit.start}
                        align="stretch"
                    >
                        <Flex justify="space-between">
                            <Text fontWeight="semibold">Pool</Text>
                            <Flex align="center">
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
                                    (((9 / 29) * TOTAL_REWARDS_FOR_POOL) / stakePoolTotalSupply / 365) *
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
                            onClick={() => unlockStakePool(idx)}
                            disabled={new Date().getTime() <= deposit.end}
                            isLoading={unlockingId === idx && isUnlockingStakePool}
                            size="small"
                            w="auto"
                        />
                    </VStack>
                ))}
                {lpPoolDeposits.map((deposit, idx) => (
                    <VStack
                        bg="#1D1D1D"
                        w="full"
                        rounded="xl"
                        border="1px"
                        borderColor="#383838"
                        p={4}
                        key={deposit.start}
                        align="stretch"
                    >
                        <Flex justify="space-between">
                            <Text fontWeight="semibold">Pool</Text>
                            <Flex align="center" justify="center">
                                <Img src="/images/icons/sipher.png" boxSize="1.5rem" />
                                <Text ml={4}>SIPHER/ETH Uniswap LP</Text>
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
                                    (((20 / 29) * TOTAL_REWARDS_FOR_POOL) / lpPoolTotalSupply / 365) *
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
                            onClick={() => unlockLpPool(idx)}
                            disabled={new Date().getTime() <= deposit.end}
                            isLoading={unlockingId === idx && isUnlockingLpPool}
                            size="small"
                            w="auto"
                        />
                    </VStack>
                ))}
            </VStack>
        </Box>
    )
}

export default StakingDepositsMobile
