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

const StakingDeposits = ({
    stakePoolDeposits,
    lpPoolDeposits,
    stakePoolTotalSupply,
    lpPoolTotalSupply,
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
        <Box display={["none", "none", "block"]}>
            <Text letterSpacing="3px" fontSize="lg" fontWeight="semibold" mb={4}>
                STAKING DEPOSITS
            </Text>
            <Box rounded="xl" border="1px" borderColor="#383838" p={8} bg="rgba(0, 0, 0, 0.9)">
                <Box w="full">
                    <Flex w="full" pb={4} px={4}>
                        <Text fontWeight="semibold" w="17%">
                            Pool
                        </Text>
                        <Text fontWeight="semibold" w="15%">
                            Staked
                        </Text>
                        <Text fontWeight="semibold" w="20%">
                            Est. Daily Rewards
                        </Text>

                        <Text fontWeight="semibold" w="15%">
                            Lock Date
                        </Text>
                        <Text fontWeight="semibold" w="15%">
                            Unlock Date
                        </Text>
                    </Flex>
                    <Box borderTop="1px" borderColor="#383838">
                        {stakePoolDeposits.map((deposit, idx) => (
                            <Flex
                                w="full"
                                align="center"
                                borderBottom="1px"
                                borderColor="#383838"
                                p={4}
                                key={deposit.start}
                            >
                                <Flex align="center" w="17%">
                                    <Img src="/images/icons/sipher.png" boxSize="1.5rem" />
                                    <Text ml={4}>$SIPHER</Text>
                                </Flex>
                                <Text w="15%" textAlign="left">
                                    ${currency(deposit.amount * sipherPrice)}
                                </Text>
                                <Text w="20%" textAlign="left">
                                    $
                                    {currency(
                                        (((9 / 29) * TOTAL_REWARDS_FOR_POOL) / stakePoolTotalSupply / 365) *
                                            deposit.amount *
                                            calWeight(deposit.start, deposit.end) *
                                            sipherPrice
                                    )}
                                </Text>

                                <Text w="15%" textAlign="left">
                                    {format(new Date(deposit.start), "MMM dd Y")}
                                </Text>
                                <Text w="15%" textAlign="left">
                                    {format(new Date(deposit.end), "MMM dd Y")}
                                </Text>
                                <ActionButton
                                    text="UNLOCK"
                                    ml="auto"
                                    onClick={() => unlockStakePool(idx)}
                                    disabled={new Date().getTime() <= deposit.end}
                                    isLoading={unlockingId === idx && isUnlockingStakePool}
                                    size="small"
                                    w="10rem"
                                />
                            </Flex>
                        ))}
                        {lpPoolDeposits.map((deposit, idx) => (
                            <Flex
                                w="full"
                                align="center"
                                borderBottom="1px"
                                borderColor="#383838"
                                p={4}
                                key={deposit.start}
                            >
                                <Flex align="center" w="17%">
                                    <Img src="/images/icons/sipher.png" boxSize="1.5rem" />
                                    <Text ml={4}>SIPHER/ETH Uniswap LP</Text>
                                </Flex>
                                <Text w="15%" textAlign="left">
                                    ${currency(deposit.amount * sipherPrice)}
                                </Text>
                                <Text w="20%" textAlign="left">
                                    $
                                    {currency(
                                        (((20 / 29) * TOTAL_REWARDS_FOR_POOL) / lpPoolTotalSupply / 365) *
                                            deposit.amount *
                                            calWeight(deposit.start, deposit.end) *
                                            sipherPrice
                                    )}
                                </Text>

                                <Text w="15%" textAlign="left">
                                    {format(new Date(deposit.start), "MMM dd Y")}
                                </Text>
                                <Text w="15%" textAlign="left">
                                    {format(new Date(deposit.end), "MMM dd Y")}
                                </Text>
                                <ActionButton
                                    text="UNLOCK"
                                    ml="auto"
                                    onClick={() => unlockLpPool(idx)}
                                    disabled={new Date().getTime() <= deposit.end}
                                    isLoading={unlockingId === idx && isUnlockingLpPool}
                                    size="small"
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
