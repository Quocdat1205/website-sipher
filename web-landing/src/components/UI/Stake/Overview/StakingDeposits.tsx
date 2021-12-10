import { Img, Flex, Box, Text, VStack } from "@chakra-ui/react"
import { ActionButton } from "@components/shared"
import React from "react"
import useOverview from "./useOverview"
interface StakingDepositsProps {
    deposits: ReturnType<typeof useOverview>["stakingPoolDeposits"]
}

const StakingDeposits = ({ deposits }: StakingDepositsProps) => {
    return (
        <Box id="staking-deposits">
            {/* Deposit desktop */}
            <Box display={["none", "none", "block"]}>
                <Text letterSpacing="3px" fontSize="lg" fontWeight="semibold" mb={4}>
                    STAKING DEPOSITS
                </Text>
                <Box rounded="xl" border="1px" borderColor="#383838" p={8} bg="rgba(0, 0, 0, 0.9)">
                    <Box w="full">
                        <Flex w="full" pb={4}>
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
                            {deposits.map(deposit => (
                                <Flex
                                    w="full"
                                    align="center"
                                    borderBottom="1px"
                                    borderColor="#383838"
                                    py={4}
                                    key={deposit.key}
                                >
                                    <Flex align="center" w="17%">
                                        <Flex align="center" w="2.5rem">
                                            <Img
                                                src="/images/icons/sipher.png"
                                                boxSize="1.5rem"
                                                zIndex={2}
                                                pos="relative"
                                            />
                                            {deposit.poolName !== "$SIPHER" && (
                                                <Img
                                                    src="/images/icons/eth.png"
                                                    boxSize="1.5rem"
                                                    pos="relative"
                                                    left="-0.75rem"
                                                />
                                            )}
                                        </Flex>
                                        <Text ml={2} fontSize="sm">
                                            {deposit.poolName}
                                        </Text>
                                    </Flex>
                                    <Text w="15%" textAlign="left" fontSize="sm">
                                        {deposit.staked}
                                    </Text>
                                    <Text w="20%" textAlign="left" fontSize="sm">
                                        {deposit.estimatedDailyRewards}
                                    </Text>

                                    <Text w="15%" textAlign="left" fontSize="sm">
                                        {deposit.lockDate}
                                    </Text>
                                    <Text w="15%" textAlign="left" fontSize="sm">
                                        {deposit.unlockDate}
                                    </Text>
                                    <ActionButton
                                        text="UNLOCK"
                                        ml="auto"
                                        onClick={deposit.onUnlock}
                                        disabled={!deposit.isUnlockable}
                                        isLoading={deposit.isUnlocking}
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
                    {deposits.map(deposit => (
                        <VStack
                            bg="#1D1D1D"
                            w="full"
                            rounded="xl"
                            border="1px"
                            borderColor="#383838"
                            p={4}
                            key={deposit.key}
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
                                <Text textAlign="right">{deposit.staked}</Text>
                            </Flex>
                            <Flex justify="space-between">
                                <Text fontWeight="semibold">Est. Daily Rewards</Text>
                                <Text textAlign="right">{deposit.estimatedDailyRewards}</Text>
                            </Flex>
                            <Flex justify="space-between">
                                <Text fontWeight="semibold">Lock Date</Text>
                                <Text textAlign="right">{deposit.lockDate}</Text>
                            </Flex>
                            <Flex justify="space-between">
                                <Text fontWeight="semibold">Unlock Date</Text>
                                <Text textAlign="right">{deposit.unlockDate}</Text>
                            </Flex>
                            <ActionButton
                                text="UNLOCK"
                                px={2}
                                ml="auto"
                                onClick={deposit.onUnlock}
                                disabled={!deposit.isUnlockable}
                                isLoading={deposit.isUnlocking}
                                size="small"
                                w="auto"
                            />
                        </VStack>
                    ))}
                </VStack>
            </Box>
        </Box>
    )
}

export default StakingDeposits
