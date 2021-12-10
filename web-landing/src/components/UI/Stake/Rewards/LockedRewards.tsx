import { Flex, Box, Text, Img, Stack, chakra } from "@chakra-ui/react"
import { ActionButton } from "@components/shared"
import React from "react"
import { format } from "date-fns"
import { currency } from "@source/utils"

export interface LockedRewardsProps {
    deposits: {
        amount: number
        start: number
        end: number
    }[]
    unlock: (id: number) => void
    unlockingId: number | null
    sipherPrice: number
}

const LockedRewards = ({ deposits, unlock, unlockingId, sipherPrice }: LockedRewardsProps) => {
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
                            {deposits.map((deposit, idx) => (
                                <chakra.tr
                                    w="full"
                                    align="center"
                                    borderBottom="1px"
                                    borderColor="#383838"
                                    py={4}
                                    key={idx}
                                >
                                    <chakra.td p={2}>
                                        <Flex align="center">
                                            <Img src="/images/icons/sipher.png" boxSize="1.5rem" />
                                            <Text ml={2} fontSize={"sm"}>
                                                $SIPHER
                                            </Text>
                                        </Flex>
                                    </chakra.td>
                                    <chakra.td textAlign="right" p={2} fontSize={"sm"}>
                                        {currency(deposit.amount)}
                                    </chakra.td>
                                    <chakra.td textAlign="right" p={2} fontSize={"sm"}>
                                        {currency(deposit.amount * sipherPrice)}
                                    </chakra.td>
                                    <chakra.td textAlign="right" p={2} fontSize={"sm"}>
                                        {new Date().getTime() > deposit.end ? "Available" : "Locked"}
                                    </chakra.td>
                                    <chakra.td textAlign="right" p={2} fontSize={"sm"}>
                                        {format(new Date(deposit.end), "MMM dd Y")}
                                    </chakra.td>
                                    <chakra.td textAlign="right" p={2}>
                                        <ActionButton
                                            text="UNLOCK"
                                            ml="auto"
                                            w="10rem"
                                            disabled={new Date().getTime() <= deposit.end}
                                            size="small"
                                            onClick={() => unlock(idx)}
                                            isLoading={unlockingId === idx}
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
                <Box rounded="xl" border="1px" borderColor="#383838" py={4} px={2} bg="rgba(0, 0, 0, 0.9)">
                    <Stack>
                        {deposits.map((deposit, idx) => (
                            <Flex
                                key={deposit.start}
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
                                            <Img src="/images/icons/sipher.png" boxSize="1.5rem" />
                                            <Text ml={2}>$SIPHER</Text>
                                        </Flex>
                                    </Flex>
                                    <Flex justify="space-between">
                                        <Text fontWeight="semibold">Amount</Text>
                                        <Text>{currency(deposit.amount)}</Text>
                                    </Flex>
                                    <Flex justify="space-between">
                                        <Text fontWeight="semibold">Dollar value</Text>
                                        <Text>{currency(deposit.amount * sipherPrice)}</Text>
                                    </Flex>
                                    <Flex justify="space-between">
                                        <Text fontWeight="semibold">Status</Text>
                                        <Text textAlign="left">
                                            {new Date().getTime() > deposit.end ? "Available" : "Locked"}
                                        </Text>
                                    </Flex>
                                    <Flex justify="space-between">
                                        <Text fontWeight="semibold">Time remaining</Text>
                                        <Text textAlign="left">{format(new Date(deposit.end), "MMM dd Y")}</Text>
                                    </Flex>
                                    <ActionButton
                                        text="UNLOCK"
                                        ml="auto"
                                        px={2}
                                        w="auto"
                                        disabled={new Date().getTime() <= deposit.end}
                                        size="small"
                                        onClick={() => unlock(idx)}
                                        isLoading={unlockingId === idx}
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
