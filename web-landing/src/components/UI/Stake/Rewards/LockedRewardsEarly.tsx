import { Flex, Box, Text, Img, Stack, chakra } from "@chakra-ui/react"
import { ActionButton } from "@components/shared"
import { currency } from "@source/utils"
import React from "react"

export interface LockedRewardsProps {
    escrowedPool?: number
}

const LockedRewardsEarly = ({ escrowedPool = 0 }: LockedRewardsProps) => {
    return (
        <Box>
            {/* DESKTOP */}
            <Box display={["none", "none", "block"]}>
                <Text letterSpacing="3px" size="large" fontWeight="semibold" mb={4}>
                    LOCKED REWARDS EARLY
                </Text>
                <Box rounded="xl" border="1px" borderColor="#383838" p={8} bg="rgba(0, 0, 0, 0.9)">
                    <chakra.table w="full">
                        <chakra.thead>
                            <chakra.tr borderBottom="1px" borderColor="#383838">
                                <chakra.th fontWeight="semibold" fontSize="sm" p={2} textAlign="left" w="20%">
                                    Token
                                </chakra.th>
                                <chakra.th textAlign="right" fontWeight="semibold" fontSize="sm" p={2}>
                                    Accumulated
                                </chakra.th>
                                <chakra.th textAlign="right" fontWeight="semibold" fontSize="sm" p={2}>
                                    Withdrawn
                                </chakra.th>
                                <chakra.th textAlign="right" fontWeight="semibold" fontSize="sm" p={2}>
                                    Withdrawable
                                </chakra.th>
                                <chakra.th p={2}></chakra.th>
                            </chakra.tr>
                        </chakra.thead>
                        <chakra.tbody>
                            <chakra.tr w="full" align="center" borderBottom="1px" borderColor="#383838" py={4}>
                                <chakra.td p={2}>
                                    <Flex align="center">
                                        <Img alt="sipher-token" src="/images/icons/sipher.png" boxSize="1.5rem" />
                                        <Text ml={2} fontSize={"sm"}>
                                            $SIPHER
                                        </Text>
                                    </Flex>
                                </chakra.td>
                                <chakra.td textAlign="right" p={2} fontSize={"sm"}>
                                    {currency(escrowedPool)}
                                </chakra.td>
                                <chakra.td textAlign="right" p={2} fontSize={"sm"}>
                                    {currency(0)}
                                </chakra.td>
                                <chakra.td textAlign="right" p={2} fontSize={"sm"}>
                                    {currency(0)}
                                </chakra.td>
                                <chakra.td textAlign="right" p={2}>
                                    <ActionButton text="Withdraw" ml="auto" w="10rem" disabled size="small" />
                                </chakra.td>
                            </chakra.tr>
                        </chakra.tbody>
                    </chakra.table>
                </Box>
            </Box>
            {/* MOBILE */}
            <Box display={["block", "block", "none"]}>
                <Text textAlign="center" letterSpacing="3px" size="large" fontWeight="semibold" mb={4}>
                    LOCKED REWARDS EARLY
                </Text>
                <Box rounded="xl" border="1px" borderColor="#383838" p={4} bg="rgba(0, 0, 0, 0.9)">
                    <Stack direction="column" spacing={4}>
                        <Flex
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
                                    <Text></Text>
                                </Flex>
                                <Flex justify="space-between">
                                    <Text fontWeight="semibold">Dollar value</Text>
                                    <Text></Text>
                                </Flex>
                                <Flex justify="space-between">
                                    <Text fontWeight="semibold">Status</Text>
                                    <Text textAlign="left"></Text>
                                </Flex>
                                <Flex justify="space-between">
                                    <Text fontWeight="semibold">Time remaining</Text>
                                    <Text textAlign="left"></Text>
                                </Flex>
                                <ActionButton text="UNLOCK" ml="auto" px={2} w="auto" disabled size="small" />
                            </Stack>
                        </Flex>
                    </Stack>
                </Box>
            </Box>
        </Box>
    )
}

export default LockedRewardsEarly
