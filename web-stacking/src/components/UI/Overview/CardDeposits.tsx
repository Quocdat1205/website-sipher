import React from "react"
import { Table, Thead, Tbody, Tr, Th, Flex } from "@chakra-ui/react"
import { MyTable } from "@components/shared/MyTable"

interface Props {}

const CardDeposits = (props: Props) => {
    return (
        <Flex flexDir="column" justify="center" align="center" p={4}>
            <Table variant="unstyled">
                <Thead>
                    <Tr color="stack.textBlack">
                        <MyTable.Th textTransform="capitalize">Pool</MyTable.Th>
                        <MyTable.Th textTransform="capitalize">Amount Staked</MyTable.Th>
                        <MyTable.Th textTransform="capitalize">Lock Date</MyTable.Th>
                        <MyTable.Th textTransform="capitalize">Unlock Date</MyTable.Th>
                        <MyTable.Th textTransform="capitalize"></MyTable.Th>
                    </Tr>
                </Thead>
                <Tbody></Tbody>
            </Table>
        </Flex>
    )
}
export default CardDeposits
