import { Img, Flex, Box, Text, Stack } from "@chakra-ui/react"
import { ActionButton } from "@components/shared"
import { useSipherPrice } from "@hooks/api"
import React, { useState } from "react"
import { format } from "date-fns"
import { useMutation } from "react-query"
import useWalletContext from "@hooks/web3/useWalletContext"
import { currency } from "@source/utils"

interface LockedRewardsProps {
    deposits: {
        amount: number
        start: number
        end: number
    }[]
}

const LockedRewardsMobile = ({ deposits }: LockedRewardsProps) => {
    const sipherPrice = useSipherPrice()

    const { scCaller, account } = useWalletContext()

    const [unlockingId, setUnlockingId] = useState<number | null>(null)

    const { mutate: unlock } = useMutation<unknown, unknown, number>(
        depositId => scCaller.current!.EscrowPools.withdraw(depositId, account!),
        {
            onMutate: depositId => setUnlockingId(depositId),
            onSettled: () => setUnlockingId(null),
        }
    )

    return (
        <Box display={["block", "block", "none"]}>
            <Text textAlign="center" letterSpacing="3px" size="large" fontWeight="semibold" mb={4}>
                LOCKED REWARDS
            </Text>
            <Box rounded="xl" border="1px" borderColor="#383838" py={4} px={2} bg="rgba(0, 0, 0, 0.9)">
                <Box w="full">
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
                </Box>
            </Box>
        </Box>
    )
}

export default LockedRewardsMobile
