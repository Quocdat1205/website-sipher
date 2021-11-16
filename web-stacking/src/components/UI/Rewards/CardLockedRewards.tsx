import React from "react"
import { Table, Thead, Tbody, Tr, Th, Flex } from "@chakra-ui/react"
import { MyTable } from "@components/shared/MyTable"
import { AppState } from "@hooks"
import ConnectWalletModal from "@components/shared/ConnectWalletModal"

interface Props {
    states: AppState
}

const CardLockedRewards = ({ states }: Props) => {
    return (
        <Flex flexDir="column" justify="center" align="center" p={4}>
            {states.accountLogin !== "" ? (
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
            ) : (
                <ConnectWalletModal />
            )}
        </Flex>
    )
}
export default CardLockedRewards
