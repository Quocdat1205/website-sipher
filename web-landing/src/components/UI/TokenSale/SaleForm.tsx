import { Flex, Box } from "@chakra-ui/react"
import React, { useState } from "react"
import InputUI from "./InputUI"
import Dropdown from "./Dropdown"

interface SaleFormProps {}

export const dropdownOptions = ["Deposit", "Withdraw"] as const
export type DropdownOption = typeof dropdownOptions[number]

const SaleForm = ({}: SaleFormProps) => {
    const [selected, setSelected] = useState<DropdownOption>(dropdownOptions[0])

    return (
        <Flex pos="relative" w="full" direction="column" align="center" p={4}>
            <Dropdown selected={selected} dropdownOptions={dropdownOptions} onChange={setSelected} />
            <InputUI mode={selected} isSale lockedAmount={100} maxLockedAmount={200} walletBalance={100} />
        </Flex>
    )
}

export default SaleForm
