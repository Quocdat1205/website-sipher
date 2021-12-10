import { Img } from "@chakra-ui/image"
import { Box, Flex, Text } from "@chakra-ui/layout"
import { chakra } from "@chakra-ui/react"
import { ActionButton } from "@components/shared"
import { currency } from "@source/utils"
import React from "react"
import useRewards, { StakingPoolData } from "../useRewards"

export interface TablePoolsProps {
    poolData: StakingPoolData
}

const TablePoolDesktop = ({ poolData }: TablePoolsProps) => {
    return (
        <chakra.tr w="full" align="center" borderBottom="1px" borderColor="#383838" py={4}>
            <chakra.td p={2}>
                <Flex align="center">
                    <Flex align="center" w="3rem" flexShrink={0}>
                        <Img src="/images/icons/sipher.png" boxSize="1.5rem" zIndex={2} pos="relative" />
                        {poolData.isUniswap && (
                            <Img pos="relative" left="-0.75rem" src="/images/icons/eth.png" boxSize="1.5rem" />
                        )}
                    </Flex>
                    <Text fontSize="sm" textAlign={"left"}>
                        {poolData.poolName}
                    </Text>
                </Flex>
            </chakra.td>
            <chakra.td textAlign="right" p={2} fontSize={"sm"}>
                {poolData.amountStaked}
            </chakra.td>
            <chakra.td textAlign="right" p={2} fontSize={"sm"}>
                {poolData.claimableRewards}
            </chakra.td>
            <chakra.td textAlign="right" p={2}>
                <ActionButton
                    text="CLAIM"
                    ml="auto"
                    onClick={poolData.onClaim}
                    isLoading={poolData.isClaiming}
                    disabled={!poolData.isClaimable}
                    size="small"
                    w="10rem"
                />
            </chakra.td>
        </chakra.tr>
    )
}
export default TablePoolDesktop
