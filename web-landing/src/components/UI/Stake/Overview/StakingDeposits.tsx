import { Img, Flex, Box, Text, VStack } from "@chakra-ui/react"
import { ActionButton } from "@components/shared"
import React from "react"
import { format } from "date-fns"
import { TOTAL_REWARDS_FOR_POOL } from "@constant/index"
import { calWeight, currency } from "@source/utils"
import useStakingDeposit from "./DesktopUI/useStakingDeposit"
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
    const {
        sipherPrice,
        unlockLpPool,
        isUnlockingLpPool,
        isUnlockingStakePool,
        unlockStakePool,
        unlockingId,
        lpPrice,
    } = useStakingDeposit()

    return (
        <>
            {/* Deposit desktop */}
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
                                        <Flex align="center" w="2rem">
                                            <Img src="/images/icons/sipher.png" boxSize="1.5rem" />
                                        </Flex>
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
                                        <Flex align="center" w="2rem">
                                            <Img src="/images/icons/sipher.png" boxSize="1.5rem" />
                                            <Img
                                                src="/images/icons/eth.png"
                                                boxSize="1.5rem"
                                                pos="relative"
                                                left="-0.75rem"
                                            />
                                        </Flex>
                                        <Text ml={4}>SIPHER/ETH Uniswap LP</Text>
                                    </Flex>
                                    <Text w="15%" textAlign="left">
                                        ${currency(deposit.amount * lpPrice!)}
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
            {/* Deposit mobile */}
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
                                <Text textAlign="right">${currency(deposit.amount * lpPrice!)}</Text>
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
        </>
    )
}

export default StakingDeposits
