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
                    <Flex align="center" w="full" pb={4} px={4}>
                        <Text fontWeight="semibold" w="40%">
                            Token
                        </Text>
                        <Text fontWeight="semibold" w="30%">
                            Amount
                        </Text>
                        <Text fontWeight="semibold" w="25%">
                            Dollar value
                        </Text>
                    </Flex>
                    <Box borderTop="1px" borderColor="#383838">
                        {deposits.map((deposit, idx) => (
                            <Flex
                                key={deposit.start}
                                w="full"
                                flexDir="column"
                                borderBottom="1px"
                                borderColor="#383838"
                                p={4}
                            >
                                <Flex align="center">
                                    <Flex align="center" w="40%">
                                        <Img src="/images/icons/sipher.png" boxSize="1.5rem" />
                                        <Text ml={4}>$SIPHER</Text>
                                    </Flex>
                                    <Text w="30%" textAlign="left">
                                        {currency(deposit.amount)}
                                    </Text>
                                    <Text w="25%" textAlign="left">
                                        {currency(deposit.amount * sipherPrice)}
                                    </Text>
                                </Flex>
                                <Flex bg="#292929" align="center" p={4} mt={4} rounded="xl">
                                    <Box w="25%">
                                        <Text fontWeight="semibold">Status</Text>
                                        <Text textAlign="left">
                                            {new Date().getTime() > deposit.end ? "Available" : "Locked"}
                                        </Text>
                                    </Box>
                                    <Box w="45%">
                                        <Text fontWeight="semibold">Time remaining</Text>

                                        <Text textAlign="left">{format(new Date(deposit.end), "MMM dd Y")}</Text>
                                    </Box>
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
                                </Flex>
                            </Flex>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default LockedRewardsMobile
