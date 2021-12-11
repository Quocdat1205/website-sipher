import { Img, Flex, Box, Text, VStack, chakra } from "@chakra-ui/react"
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
                <Box w="full" rounded="xl" border="1px" borderColor="#383838" p={8} bg="rgba(0, 0, 0, 0.9)">
                    <chakra.table w="full">
                        <chakra.thead>
                            <chakra.tr borderBottom="1px" borderColor="#383838">
                                <chakra.th fontWeight="semibold" fontSize="sm" p={2} textAlign="left" w="20%">
                                    Pool
                                </chakra.th>
                                <chakra.th fontWeight="semibold" fontSize="sm" p={2} textAlign="right">
                                    Staked
                                </chakra.th>
                                <chakra.th fontWeight="semibold" fontSize="sm" p={2} textAlign={"right"}>
                                    Est. Daily Rewards
                                </chakra.th>
                                <chakra.th fontWeight="semibold" fontSize="sm" p={2}>
                                    Lock Date
                                </chakra.th>
                                <chakra.th fontWeight="semibold" fontSize="sm" p={2}>
                                    Unlock Date
                                </chakra.th>
                                <chakra.th p={2}></chakra.th>
                            </chakra.tr>
                        </chakra.thead>
                        <chakra.tbody>
                            {deposits.map(deposit => (
                                <chakra.tr
                                    w="full"
                                    align="center"
                                    borderBottom="1px"
                                    borderColor="#383838"
                                    py={4}
                                    key={deposit.key}
                                >
                                    <chakra.td p={2}>
                                        <Flex align="center">
                                            <Flex align="center" w="3rem" flexShrink={0}>
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
                                            <Text fontSize="sm" textAlign={"left"}>
                                                {deposit.poolName}
                                            </Text>
                                        </Flex>
                                    </chakra.td>
                                    <chakra.td fontSize="sm" p={2} textAlign={"right"}>
                                        {deposit.staked}
                                    </chakra.td>
                                    <chakra.td fontSize="sm" p={2} textAlign={"right"}>
                                        {deposit.estimatedDailyRewards}
                                    </chakra.td>

                                    <chakra.td fontSize="sm" p={2}>
                                        {deposit.lockDate}
                                    </chakra.td>
                                    <chakra.td fontSize="sm" p={2}>
                                        {deposit.unlockDate}
                                    </chakra.td>
                                    <chakra.td p={2}>
                                        <ActionButton
                                            text="UNLOCK"
                                            ml="auto"
                                            onClick={deposit.onUnlock}
                                            disabled={!deposit.isUnlockable}
                                            isLoading={deposit.isUnlocking}
                                            size="small"
                                            w="10rem"
                                        />
                                    </chakra.td>
                                </chakra.tr>
                            ))}
                        </chakra.tbody>
                    </chakra.table>
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
                                    <Flex align="center" w="2rem" flexShrink={0}>
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
                                    <Text fontSize="sm" textAlign={"left"} pl={deposit.poolName !== "$SIPHER" ? 4 : 2}>
                                        {deposit.poolName}
                                    </Text>
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
