import { Flex, Box, Text } from "@chakra-ui/react"
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

const LockedRewardsDesktop = ({ deposits, unlock, unlockingId, sipherPrice }: LockedRewardsProps) => {
    return (
        <Box display={["none", "none", "block"]}>
            <Text letterSpacing="3px" size="large" fontWeight="semibold" mb={4}>
                LOCKED REWARDS
            </Text>
            <Box rounded="xl" border="1px" borderColor="#383838" p={8} bg="rgba(0, 0, 0, 0.9)">
                <Box w="full">
                    <Flex w="full" pb={4} px={4}>
                        <Text fontWeight="semibold" w="15%">
                            Amount
                        </Text>
                        <Text fontWeight="semibold" w="15%">
                            Dollar value
                        </Text>
                        <Text fontWeight="semibold" w="15%">
                            Status
                        </Text>
                        <Text fontWeight="semibold" w="15%">
                            Time remaining
                        </Text>
                    </Flex>
                    <Box borderTop="1px" borderColor="#383838">
                        {deposits.map((deposit, idx) => (
                            <Flex
                                key={deposit.start}
                                w="full"
                                align="center"
                                borderBottom="1px"
                                borderColor="#383838"
                                p={4}
                            >
                                <Text w="15%" textAlign="left">
                                    {currency(deposit.amount)}
                                </Text>
                                <Text w="15%" textAlign="left">
                                    {currency(deposit.amount * sipherPrice)}
                                </Text>
                                <Text w="15%" textAlign="left">
                                    {new Date().getTime() > deposit.end ? "Available" : "Locked"}
                                </Text>
                                <Text w="15%" textAlign="left">
                                    {format(new Date(deposit.end), "MMM dd Y")}
                                </Text>
                                <ActionButton
                                    text="UNLOCK"
                                    ml="auto"
                                    w="10rem"
                                    disabled={new Date().getTime() <= deposit.end}
                                    size="small"
                                    onClick={() => unlock(idx)}
                                    isLoading={unlockingId === idx}
                                />
                            </Flex>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default LockedRewardsDesktop
