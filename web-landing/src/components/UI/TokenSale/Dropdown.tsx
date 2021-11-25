import { Box, Flex, Text, useOutsideClick, Collapse } from "@chakra-ui/react"
import React, { useRef, useState } from "react"
import { BiChevronDown, BiChevronUp } from "react-icons/bi"
import { DropdownOption } from "./SaleForm"

interface DropdownProps {
    selected: DropdownOption
    dropdownOptions: readonly ["Deposit", "Withdraw"]
    onChange: (option: DropdownOption) => void
}

const Dropdown = ({ dropdownOptions, selected, onChange }: DropdownProps) => {
    const [open, setOpen] = useState(false)

    const renderedOptions = () => {
        const option = dropdownOptions.find(option => option !== selected)!
        return (
            <Box
                _hover={{ color: "white" }}
                color="#9B9E9D"
                py={2}
                px={6}
                w="full"
                cursor="pointer"
                className="item"
                onClick={() => onChange(option)}
            >
                {option}
            </Box>
        )
    }

    const boxRef = useRef<HTMLDivElement>(null)
    useOutsideClick({
        ref: boxRef,
        handler: () => setOpen(false),
    })

    return (
        <Flex pos="relative" flexDir="column" w="full" ref={boxRef}>
            <Flex
                align="center"
                rounded="full"
                border="1px"
                borderColor="#383838"
                bg="#131313"
                zIndex={3}
                py={3}
                px={6}
                mb={8}
                justify="space-between"
                cursor="pointer"
                onClick={() => {
                    setOpen(!open)
                }}
            >
                <Text>{selected}</Text>
                {open ? <BiChevronUp size="1.5rem" /> : <BiChevronDown size="1.5rem" />}
            </Flex>
            <Box pos="absolute" w="full" top="50%" left={0} zIndex={2} borderBottomRadius={4}>
                <Collapse in={open}>
                    <Box
                        onClick={() => setOpen(false)}
                        bg="#131313"
                        border="1px"
                        borderTop="none"
                        borderColor="#383838"
                        pt={7}
                        sx={{ borderRadius: "0 0 1rem 1rem" }}
                        shadow="base"
                    >
                        {renderedOptions()}
                    </Box>
                </Collapse>
            </Box>
        </Flex>
    )
}

export default Dropdown
