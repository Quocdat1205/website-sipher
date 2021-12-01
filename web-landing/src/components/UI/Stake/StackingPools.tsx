import { Flex, Box } from "@chakra-ui/layout"
import React from "react"
import { AccordionTable } from "./FlexTable"
import { FlexHeader } from "./FlexTable/FlexHeader"

interface Props {}

const StackingPools = (props: Props) => {
    return (
        <Flex
            rounded="xl"
            border="1px"
            borderColor="border.gray"
            p={8}
            flexDir="column"
            align="center"
            justify="center"
            bg="blackAlpha.900"
        >
            <Box w="full" h="full" overflow="hidden">
                <Flex flexDir="row" w="full">
                    <FlexHeader text="Pools" w="25%" />
                    <FlexHeader text="Total Value Locked" w="25%" />
                    <FlexHeader text="APR" w="20%" />
                    <FlexHeader text="" w="30%" />
                </Flex>
                <Flex flexDir="column" w="full">
                    <AccordionTable
                        img="/images/icons/community/main-black.png"
                        valueLocked={125424241.04}
                        APR={142.42}
                        weight={20.0}
                        pendingReward={0.0}
                        liquidity={0.0}
                        pools="$SIPHER"
                    />
                    <AccordionTable
                        img="/images/icons/community/main-black.png"
                        img1="/images/icons/eth.png"
                        valueLocked={125424241.04}
                        APR={142.42}
                        weight={20.0}
                        pendingReward={0.0}
                        liquidity={0.0}
                        pools="$SIPHER/ETH Uniswap LP"
                    />
                </Flex>
            </Box>
        </Flex>
    )
}

export default StackingPools
