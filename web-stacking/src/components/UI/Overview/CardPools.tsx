import React from "react"
import { Table, Thead, Tbody, Tr, HStack, Flex, Button } from "@chakra-ui/react"
import { GradientButton } from "@components/shared/GradientButton"
import { MyTable } from "@components/shared/MyTable"

interface Props {}

const CardPools = (props: Props) => {
    return (
        <Flex flexDir="column" justify="center" align="center" p={4}>
            <Table variant="unstyled">
                <Thead>
                    <Tr color="stack.textBlack">
                        <MyTable.Th textTransform="capitalize">Core Pools</MyTable.Th>
                        <MyTable.Th textTransform="capitalize">Total Value Locked</MyTable.Th>
                        <MyTable.Th textTransform="capitalize">APR</MyTable.Th>
                        <MyTable.Th textTransform="capitalize"></MyTable.Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr borderTop="1px" borderColor="rgba(33,42,75,.1)" color="stack.textBlack">
                        <MyTable.Td>MC</MyTable.Td>
                        <MyTable.Td>millimetres (mm)</MyTable.Td>
                        <MyTable.Td>25.4</MyTable.Td>
                        <MyTable.Td textAlign="right">
                            <HStack spacing={2} justify="flex-end">
                                <Button
                                    p={2}
                                    _hover={{ boxShadow: "0 6px 16px rgb(0 0 0 / 10%)", borderColor: "white" }}
                                    fontWeight="normal"
                                    border="1px"
                                    borderColor="rgba(0,0,0,.1)"
                                    bg="white"
                                >
                                    Details
                                </Button>
                                <GradientButton>Stack</GradientButton>
                            </HStack>
                        </MyTable.Td>
                    </Tr>
                    <Tr borderTop="1px" borderColor="rgba(33,42,75,.1)" color="stack.textBlack">
                        <MyTable.Td>yards</MyTable.Td>
                        <MyTable.Td>metres (m)</MyTable.Td>
                        <MyTable.Td>0.91444</MyTable.Td>
                        <MyTable.Td textAlign="right">
                            <HStack spacing={2} justify="flex-end">
                                <Button
                                    p={2}
                                    _hover={{ boxShadow: "0 6px 16px rgb(0 0 0 / 10%)", borderColor: "white" }}
                                    fontWeight="normal"
                                    border="1px"
                                    borderColor="rgba(0,0,0,.1)"
                                    bg="white"
                                >
                                    Buy LP
                                </Button>
                                <Button
                                    p={2}
                                    _hover={{ boxShadow: "0 6px 16px rgb(0 0 0 / 10%)", borderColor: "white" }}
                                    fontWeight="normal"
                                    border="1px"
                                    borderColor="rgba(0,0,0,.1)"
                                    bg="white"
                                >
                                    Details
                                </Button>
                                <GradientButton>Stack</GradientButton>
                            </HStack>
                        </MyTable.Td>
                    </Tr>
                </Tbody>
            </Table>
        </Flex>
    )
}

export default CardPools
