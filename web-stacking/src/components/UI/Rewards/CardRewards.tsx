import React from "react"
import { Table, Thead, Tbody, Tr, Flex } from "@chakra-ui/react"
import { GradientButton } from "@components/shared/GradientButton"
import { MyTable } from "@components/shared/MyTable"

interface Props {}

const CardRewards = (props: Props) => {
    return (
        <Flex flexDir="column" justify="center" align="center" p={4}>
            <Table variant="unstyled">
                <Thead>
                    <Tr color="stack.textBlack">
                        <MyTable.Th textTransform="capitalize">Core Pools</MyTable.Th>
                        <MyTable.Th textTransform="capitalize">TAmount Staked</MyTable.Th>
                        <MyTable.Th textTransform="capitalize">Claimable Rewards</MyTable.Th>
                        <MyTable.Th textTransform="capitalize"></MyTable.Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr borderTop="1px" borderColor="rgba(33,42,75,.1)" color="stack.textBlack">
                        <MyTable.Td>MC</MyTable.Td>
                        <MyTable.Td>millimetres (mm)</MyTable.Td>
                        <MyTable.Td isNumeric>25.4</MyTable.Td>
                        <MyTable.Td textAlign="right">
                            <GradientButton>Claim</GradientButton>
                        </MyTable.Td>
                    </Tr>
                    <Tr borderTop="1px" borderColor="rgba(33,42,75,.1)" color="stack.textBlack">
                        <MyTable.Td>yards</MyTable.Td>
                        <MyTable.Td>metres (m)</MyTable.Td>
                        <MyTable.Td isNumeric>0.91444</MyTable.Td>
                        <MyTable.Td textAlign="right">
                            <GradientButton>Claim</GradientButton>
                        </MyTable.Td>
                    </Tr>
                </Tbody>
            </Table>
        </Flex>
    )
}

export default CardRewards
