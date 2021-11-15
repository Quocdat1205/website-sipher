import React from "react"
import { Table, Thead, Tbody, Tr, Th, Flex } from "@chakra-ui/react"

interface Props {}

const CardDeposits = (props: Props) => {
    return (
        <Flex flexDir="column" justify="center" align="center" p={4}>
            <Table variant="unstyled">
                <Thead>
                    <Tr color="stack.textBlack">
                        <Th textTransform="capitalize">Pool</Th>
                        <Th textTransform="capitalize">Amount Staked</Th>
                        <Th textTransform="capitalize">Lock Date</Th>
                        <Th textTransform="capitalize">Unlock Date</Th>
                        <Th textTransform="capitalize"></Th>
                    </Tr>
                </Thead>
                <Tbody></Tbody>
            </Table>
        </Flex>
    )
}
export default CardDeposits
