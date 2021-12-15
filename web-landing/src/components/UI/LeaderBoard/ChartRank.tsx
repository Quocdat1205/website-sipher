import { Box, chakra, Flex, Input, InputGroup, InputLeftElement, Stack } from "@chakra-ui/react"
import React, { useState } from "react"
import { BsSearch } from "react-icons/bs"
import TabButton from "./TabButton"

interface Props {}

export const tabOptions = ["Top 10", "Top 50", "Top 200"]
export type TabOptionProps = typeof tabOptions[number]

const ChartRank = (props: Props) => {
    const [selected, setSelected] = useState<TabOptionProps>("Top 10")

    return (
        <Flex flexDir="column" rounded="xl" border="1px" borderColor="border.gray" w="full" bg="blackAlpha.900" p={8}>
            <TabButton selected={selected} tabOptions={tabOptions} onChange={setSelected} />
            <InputGroup mb={4}>
                <InputLeftElement py={6} pointerEvents="none" children={<BsSearch color="gray.300" />} />
                <Input
                    py={6}
                    border="1px"
                    borderColor="border.gray"
                    rounded="full"
                    placeholder="Search for an address"
                />
            </InputGroup>
            <Stack spacing={4}>
                <Box bgGradient="linear(180deg, #FFA667 0%, #FF710B 84.37%)" w="full" rounded="md" p={4}>
                    <chakra.table w="full">
                        <chakra.thead>
                            <chakra.tr>
                                <chakra.th fontWeight="semibold" fontSize="sm" textAlign="left" w="10%">
                                    Rank
                                </chakra.th>
                                <chakra.th fontWeight="semibold" fontSize="sm" textAlign="left">
                                    Address
                                </chakra.th>
                                <chakra.th fontWeight="semibold" fontSize="sm" textAlign={"left"}>
                                    Contributed
                                </chakra.th>
                                <chakra.th fontWeight="semibold" fontSize="sm" textAlign="left">
                                    USD Value
                                </chakra.th>
                            </chakra.tr>
                        </chakra.thead>
                        <chakra.tbody>
                            <chakra.tr w="full" align="center">
                                <chakra.td pt={2} fontSize="sm" textAlign="left">
                                    #1
                                </chakra.td>
                                <chakra.td fontSize="sm" pt={2} textAlign={"left"}>
                                    0x1212...123
                                </chakra.td>
                                <chakra.td fontSize="sm" pt={2} textAlign={"left"}>
                                    $SIPHER 232,432.12
                                </chakra.td>
                                <chakra.td fontSize="sm" pt={2} textAlign="left">
                                    $232,432.12
                                </chakra.td>
                            </chakra.tr>
                        </chakra.tbody>
                    </chakra.table>
                </Box>
            </Stack>
        </Flex>
    )
}

export default ChartRank
