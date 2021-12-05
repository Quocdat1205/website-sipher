import { Img, Flex, Box, Text } from "@chakra-ui/react"
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

const LockedRewards = ({ deposits }: LockedRewardsProps) => {
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
        <Box>
            <Text letterSpacing="3px" size="large" fontWeight="semibold" mb={4}>
                LOCKED REWARDS
            </Text>
            <Box rounded="xl" border="1px" borderColor="#383838" p={8} bg="rgba(0, 0, 0, 0.9)">
                <Box w="full">
                    <Flex w="full" pb={4} px={4}>
                        <Text fontWeight="semibold" w="25%">
                            Token
                        </Text>
                        <Text fontWeight="semibold" w="13%">
                            Amount
                        </Text>
                        <Text fontWeight="semibold" w="13%">
                            Dollar value
                        </Text>
                        <Text fontWeight="semibold" w="13%">
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
                                <Flex align="center" w="25%">
                                    <Img src="/images/icons/sipher.png" boxSize="1.5rem" />
                                    <Text ml={4}>$SIPHER</Text>
                                </Flex>
                                <Text w="13%" textAlign="left">
                                    {currency(deposit.amount)}
                                </Text>
                                <Text w="13%" textAlign="left">
                                    {currency(deposit.amount * sipherPrice)}
                                </Text>
                                <Text w="13%" textAlign="left">
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

export default LockedRewards
