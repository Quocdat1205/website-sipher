import { Flex } from "@chakra-ui/layout"
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/table"
import React from "react"
import AccordionTable from "./AccordionTable"

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
        >
            <Table variant="unstyled" style={{ borderCollapse: "separate", borderSpacing: 0 }}>
                <Thead>
                    <Tr>
                        <Th textTransform="none" fontWeight="semibold" fontSize="lg" w="35%">
                            Pools
                        </Th>
                        <Th textTransform="none" fontWeight="semibold" fontSize="lg" w="25%">
                            Total Value Locked
                        </Th>
                        <Th textTransform="none" fontWeight="semibold" fontSize="lg" w="15%">
                            APR
                        </Th>
                        <Th w="25%"></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <AccordionTable
                        img="/images/icons/community/main-black.png"
                        valueLocked={125424241.04}
                        APR={142.42}
                        weight={20.0}
                        pendingReward={0.0}
                        liquidity={0.0}
                    />
                    <AccordionTable
                        img="/images/icons/community/main-black.png"
                        img1="/images/icons/eth.png"
                        valueLocked={125424241.04}
                        APR={142.42}
                        weight={20.0}
                        pendingReward={0.0}
                        liquidity={0.0}
                    />
                </Tbody>
            </Table>
        </Flex>
    )
}

export default StackingPools
