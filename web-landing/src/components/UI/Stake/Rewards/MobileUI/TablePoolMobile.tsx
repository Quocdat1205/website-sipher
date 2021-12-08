import { Img } from "@chakra-ui/image"
import { Box, Flex, Stack, Text } from "@chakra-ui/layout"
import { ActionButton } from "@components/shared"
import { currency } from "@source/utils"
import React from "react"

interface Props {
    poolName: string
    amountStaked?: number
    claimableRewards?: number
    isLoading?: boolean
    sipherPrice?: number
    onClick?: () => void
    isUniswap?: boolean
}

const TablePoolMobile = ({
    amountStaked = 0,
    claimableRewards = 0,
    isLoading = false,
    sipherPrice = 0,
    onClick,
    isUniswap = false,
    poolName = "",
}: Props) => {
    return (
        <Box bg="#292929" rounded="xl" border="1px" borderColor="#383838" p={4}>
            <Stack>
                <Flex justify="space-between">
                    <Text fontWeight="semibold">Pool</Text>
                    <Flex align="center">
                        <Box pos="relative">
                            <Img src="/images/icons/sipher.png" boxSize="1.5rem" />
                            {isUniswap && (
                                <Img
                                    pos="absolute"
                                    top="0"
                                    left="0"
                                    transform="translateX(50%)"
                                    src="/images/icons/eth.png"
                                    boxSize="1.5rem"
                                />
                            )}
                        </Box>
                        <Text ml={isUniswap ? 4 : 2}>{poolName}</Text>
                    </Flex>
                </Flex>
                <Flex justify="space-between">
                    <Text fontWeight="semibold">Amount Staked</Text>
                    <Text>${currency(amountStaked * sipherPrice)}</Text>
                </Flex>
                <Flex justify="space-between">
                    <Text fontWeight="semibold">Claimable Rewards</Text>
                    <Text>{currency(claimableRewards)} SP</Text>
                </Flex>
                <ActionButton
                    text="CLAIM"
                    onClick={onClick}
                    isLoading={isLoading}
                    disabled={claimableRewards <= 0}
                    size="small"
                    w="auto"
                />
            </Stack>
        </Box>
    )
}

export default TablePoolMobile
