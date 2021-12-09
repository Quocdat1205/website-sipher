import { Img } from "@chakra-ui/image"
import { Box, Flex, Stack, Text } from "@chakra-ui/layout"
import { ActionButton } from "@components/shared"

import { currency } from "@source/utils"
import React from "react"
import { TablePoolsProps } from "../DesktopUI/TablePoolDesktop"

const TablePoolMobile = ({
    amountStaked = 0,
    claimableRewards = 0,
    isLoading = false,
    onClick,
    isUniswap = false,
    poolName,
    lpPrice,
    sipherPrice,
}: TablePoolsProps) => {
    return (
        <Box bg="#292929" rounded="xl" border="1px" borderColor="#383838" p={4}>
            <Stack>
                <Flex justify="space-between">
                    <Text fontWeight="semibold">Pool</Text>
                    <Flex align="center">
                        <Flex align="center" w="2rem">
                            <Img src="/images/icons/sipher.png" boxSize="1.5rem" />
                            {isUniswap && (
                                <Img pos="relative" left="-0.75rem" src="/images/icons/eth.png" boxSize="1.5rem" />
                            )}
                        </Flex>
                        <Text ml={isUniswap ? 4 : 2}>{poolName}</Text>
                    </Flex>
                </Flex>
                <Flex justify="space-between">
                    <Text fontWeight="semibold">Amount Staked</Text>
                    <Text>${currency(amountStaked * (poolName === "$SIPHER" ? sipherPrice : lpPrice!))}</Text>
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
