import { Img } from "@chakra-ui/image"
import { Box, Flex, Text } from "@chakra-ui/layout"
import { ActionButton } from "@components/shared"
import { currency } from "@source/utils"
import React from "react"
import useRewards, { StakingPoolData } from "../useRewards"

export interface TablePoolsProps {
    poolData: StakingPoolData
}

const TablePoolDesktop = ({ poolData }: TablePoolsProps) => {
    return (
        <Box borderBottom="1px" borderColor="#383838" p={4}>
            <Flex w="full" align="center">
                <Flex align="center" w="25%">
                    <Flex align="center" w="2rem" pos="relative">
                        <Img src="/images/icons/sipher.png" boxSize="1.5rem" pos="relative" zIndex={2} />
                        {poolData.isUniswap && (
                            <Img pos="relative" left="-0.75rem" src="/images/icons/eth.png" boxSize="1.5rem" />
                        )}
                    </Flex>
                    <Text ml={4} pr={4}>
                        {poolData.poolName}
                    </Text>
                </Flex>
                <Text w="25%" textAlign="left">
                    {poolData.amountStaked}
                </Text>
                <Text w="25%" textAlign="left">
                    {poolData.claimableRewards}
                </Text>
                <ActionButton
                    text="CLAIM"
                    ml="auto"
                    onClick={poolData.onClaim}
                    isLoading={poolData.isClaiming}
                    disabled={!poolData.isClaimable}
                    size="small"
                    w="10rem"
                />
            </Flex>
        </Box>
    )
}
export default TablePoolDesktop
