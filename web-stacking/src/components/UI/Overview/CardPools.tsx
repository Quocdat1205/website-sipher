import React from "react"
import { Table, Thead, Tbody, Tr, HStack, Flex, Button, Th, Td } from "@chakra-ui/react"
import { GradientButton } from "@components/shared/GradientButton"

interface Props {}

const CardPools = (props: Props) => {
    return (
        <Flex flexDir="column" justify="center" align="center" p={4}>
            <Table variant="unstyled">
                <Thead>
                    <Tr color="stack.textBlack">
                        <Th textTransform="capitalize">Core Pools</Th>
                        <Th textTransform="capitalize">Total Value Locked</Th>
                        <Th textTransform="capitalize" isNumeric>
                            APR
                        </Th>
                        <Th textTransform="capitalize"></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr borderTop="1px" borderColor="rgba(33,42,75,.1)" color="stack.textBlack">
                        <Td>MC</Td>
                        <Td>millimetres (mm)</Td>
                        <Td isNumeric>25.4</Td>
                        <Td textAlign="right">
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
                        </Td>
                    </Tr>
                    <Tr borderTop="1px" borderColor="rgba(33,42,75,.1)" color="stack.textBlack">
                        <Td>yards</Td>
                        <Td>metres (m)</Td>
                        <Td isNumeric>0.91444</Td>
                        <Td textAlign="right">
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
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </Flex>
    )
}

export default CardPools
