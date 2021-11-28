import { Flex, Text } from "@chakra-ui/react"
import React, { useState } from "react"
import InputUI from "./InputUI"
import Dropdown from "./Dropdown"

export const dropdownOptions = ["Deposit", "Withdraw"] as const
export type DropdownOption = typeof dropdownOptions[number]

const SaleForm = () => {
    const [selected, setSelected] = useState<DropdownOption>(dropdownOptions[0])

    return (
        <Flex direction="column" align="center" w="full" flex={3}>
            <Text fontWeight="semibold" size="small" letterSpacing="3px" mb={4}>
                YOUR CONTRIBUTION
            </Text>
            <Flex pos="relative" w="full" direction="column" align="center" p={4}>
                <Dropdown selected={selected} dropdownOptions={dropdownOptions} onChange={setSelected} />
                <InputUI mode={selected} />
            </Flex>
        </Flex>
    )
}

export default SaleForm
