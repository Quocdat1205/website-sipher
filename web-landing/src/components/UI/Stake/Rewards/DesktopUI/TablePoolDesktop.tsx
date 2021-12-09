import { Img } from "@chakra-ui/image"
import { Box, Flex, Text } from "@chakra-ui/layout"
import { ActionButton } from "@components/shared"
import { currency } from "@source/utils"
import { useSipherPrice } from "@hooks/api"
import React from "react"
import { useQueries, useQuery } from "react-query"
import useWalletContext from "@hooks/web3/useWalletContext"

interface Props {
    poolName: "$SIPHER" | "SIPHER/ETH LP"
    amountStaked?: number
    isLoading?: boolean
    claimableRewards?: number
    onClick?: () => void
    isUniswap?: boolean
}

const TablePoolDesktop = ({
    amountStaked = 0,
    claimableRewards = 0,
    isLoading = false,
    onClick,
    isUniswap = false,
    poolName,
}: Props) => {
    const sipherPrice = useSipherPrice()

    const { scCaller } = useWalletContext()

    const { data: lpPrice } = useQuery("lp-price", () => scCaller.current!.getLpPrice(), {
        enabled: !!scCaller.current,
        initialData: 0,
    })

    return (
        <Box borderBottom="1px" borderColor="#383838" p={4}>
            <Flex w="full" align="center">
                <Flex align="center" w="25%">
                    <Flex align="center" w="2rem" pos="relative">
                        <Img src="/images/icons/sipher.png" boxSize="1.5rem" />
                        {isUniswap && (
                            <Img pos="relative" left="-0.75rem" src="/images/icons/eth.png" boxSize="1.5rem" />
                        )}
                    </Flex>
                    <Text ml={4}>{poolName}</Text>
                </Flex>
                <Text w="25%" textAlign="left">
                    ${currency(amountStaked * (poolName === "$SIPHER" ? sipherPrice : lpPrice!))}
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
