import React from "react"
import { Table, Thead, Tbody, Tr, Th, Flex } from "@chakra-ui/react"
import { MyTable } from "@components/shared/MyTable"

interface Props {}

const CardLockedRewards = (props: Props) => {
    return (
        <Flex flexDir="column" justify="center" align="center" p={4}>
            <Table variant="unstyled">
                <Thead>
                    <Tr color="stack.textBlack">
                        <MyTable.Th textTransform="capitalize">Token</MyTable.Th>
                        <MyTable.Th textTransform="capitalize">Amount</MyTable.Th>
                        <MyTable.Th textTransform="capitalize">Dollar value</MyTable.Th>
                        <MyTable.Th textTransform="capitalize">Status</MyTable.Th>
                        <MyTable.Th textTransform="capitalize">Time Remaining</MyTable.Th>
                        <MyTable.Th textTransform="capitalize"></MyTable.Th>
                    </Tr>
                </Thead>
                <Tbody></Tbody>
            </Table>
        </Flex>
    )
}
export default CardLockedRewards
