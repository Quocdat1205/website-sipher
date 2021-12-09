import { Img } from "@chakra-ui/image"
import { Box, Flex, Text } from "@chakra-ui/layout"
import { ActionButton } from "@components/shared"
import { currency } from "@source/utils"
import { useSipherPrice } from "@hooks/api"
import React from "react"

interface Props {
    poolName: string
    amountStaked?: number
    isLoading?: boolean
    claimableRewards?: number
    onClick?: () => void
    isUniswap?: boolean
}

const TablePoolDesktop = ({
    poolName = "",
    amountStaked = 0,
    claimableRewards = 0,
    isLoading = false,
    onClick,
    isUniswap = false,
}: Props) => {
    const sipherPrice = useSipherPrice()

    return (
        <Box borderBottom="1px" borderColor="#383838" p={4}>
            <Flex w="full" align="center">
                <Flex align="center" w="25%">
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
                    <Text ml={4}>{poolName}</Text>
                </Flex>
                <Text w="25%" textAlign="left">
                    ${currency(amountStaked * sipherPrice)}
                </Text>
                <Text w="25%" textAlign="left">
                    {currency(claimableRewards)} SIPHER
                </Text>
                <ActionButton
                    text="CLAIM"
                    ml="auto"
                    onClick={onClick}
                    isLoading={isLoading}
                    disabled={claimableRewards <= 0}
                    size="small"
                    w="10rem"
                />
            </Flex>
        </Box>
    )
}
export default TablePoolDesktop
