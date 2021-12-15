import { Flex, Box, Text, Img, Stack, chakra } from "@chakra-ui/react"
import { ActionButton } from "@components/shared"
import React from "react"
import useRewards from "./useRewards"

export interface LockedRewardsProps {
    lockedRewardsData: ReturnType<typeof useRewards>["lockedRewardsData"]
}

const LockedRewards = ({ lockedRewardsData }: LockedRewardsProps) => {
    return (
        <Box>
            {/* DESKTOP */}
            <Box display={["none", "none", "block"]}>
                <Text letterSpacing="3px" size="large" fontWeight="semibold" mb={4}>
                    LOCKED REWARDS
                </Text>
                <Box rounded="xl" border="1px" borderColor="#383838" p={8} bg="rgba(0, 0, 0, 0.9)">
                    <chakra.table w="full">
                        <chakra.thead>
                            <chakra.tr borderBottom="1px" borderColor="#383838">
                                <chakra.th fontWeight="semibold" fontSize="sm" p={2} textAlign="left" w="20%">
                                    Token
                                </chakra.th>
                                <chakra.th textAlign="right" fontWeight="semibold" fontSize="sm" p={2}>
                                    Amount
                                </chakra.th>
                                <chakra.th textAlign="right" fontWeight="semibold" fontSize="sm" p={2}>
                                    Dollar value
                                </chakra.th>
                                <chakra.th textAlign="right" fontWeight="semibold" fontSize="sm" p={2}>
                                    Status
                                </chakra.th>
                                <chakra.th textAlign="right" fontWeight="semibold" fontSize="sm" p={2}>
                                    Time remaining
                                </chakra.th>
                                <chakra.th p={2}></chakra.th>
                            </chakra.tr>
                        </chakra.thead>
                        <chakra.tbody>
                            {lockedRewardsData.map(deposit => (
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
                                            <Img alt="sipher-token" src="/images/icons/sipher.png" boxSize="1.5rem" />
                                            <Text ml={2} fontSize={"sm"}>
                                                $SIPHER
                                            </Text>
                                        </Flex>
                                    </chakra.td>
                                    <chakra.td textAlign="right" p={2} fontSize={"sm"}>
                                        {deposit.amount}
                                    </chakra.td>
                                    <chakra.td textAlign="right" p={2} fontSize={"sm"}>
                                        {deposit.dollarValue}
                                    </chakra.td>
                                    <chakra.td textAlign="right" p={2} fontSize={"sm"}>
                                        {deposit.status}
                                    </chakra.td>
                                    <chakra.td textAlign="right" p={2} fontSize={"sm"}>
                                        {deposit.timeRemaining}
                                    </chakra.td>
                                    <chakra.td textAlign="right" p={2}>
                                        <ActionButton
                                            text="UNLOCK"
                                            ml="auto"
                                            w="10rem"
                                            disabled={!deposit.isUnlockable}
                                            size="small"
                                            onClick={deposit.onUnlock}
                                            isLoading={deposit.isUnlocking}
                                        />
                                    </chakra.td>
                                </chakra.tr>
                            ))}
                        </chakra.tbody>
                    </chakra.table>
                </Box>
            </Box>
            {/* MOBILE */}
            <Box display={["block", "block", "none"]}>
                <Text textAlign="center" letterSpacing="3px" size="large" fontWeight="semibold" mb={4}>
                    LOCKED REWARDS
                </Text>
                <Box rounded="xl" border="1px" borderColor="#383838" p={4} bg="rgba(0, 0, 0, 0.9)">
                    <Stack direction="column" spacing={4}>
                        {lockedRewardsData.map(deposit => (
                            <Flex
                                key={deposit.key}
                                w="full"
                                flexDir="column"
                                bg="#292929"
                                rounded="xl"
                                border="1px"
                                borderColor="#383838"
                                p={4}
                            >
                                <Stack>
                                    <Flex justify="space-between">
                                        <Text fontWeight="semibold">Token</Text>
                                        <Flex align="center">
                                            <Img alt="sipher-token" src="/images/icons/sipher.png" boxSize="1.5rem" />
                                            <Text ml={2}>$SIPHER</Text>
                                        </Flex>
                                    </Flex>
                                    <Flex justify="space-between">
                                        <Text fontWeight="semibold">Amount</Text>
                                        <Text>{deposit.amount}</Text>
                                    </Flex>
                                    <Flex justify="space-between">
                                        <Text fontWeight="semibold">Dollar value</Text>
                                        <Text>{deposit.dollarValue}</Text>
                                    </Flex>
                                    <Flex justify="space-between">
                                        <Text fontWeight="semibold">Status</Text>
                                        <Text textAlign="left">{deposit.status}</Text>
                                    </Flex>
                                    <Flex justify="space-between">
                                        <Text fontWeight="semibold">Time remaining</Text>
                                        <Text textAlign="left">{deposit.timeRemaining}</Text>
                                    </Flex>
                                    <ActionButton
                                        text="UNLOCK"
                                        ml="auto"
                                        px={2}
                                        w="auto"
                                        disabled={!deposit.isUnlockable}
                                        size="small"
                                        onClick={deposit.onUnlock}
                                        isLoading={deposit.isUnlocking}
                                    />
                                </Stack>
                            </Flex>
                        ))}
                    </Stack>
                </Box>
            </Box>
        </Box>
    )
}

export default LockedRewards
