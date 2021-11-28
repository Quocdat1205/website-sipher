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
    const [isOpen, setIsOpen] = useState(false)

    const boxRef = useRef<HTMLDivElement>(null)
    useOutsideClick({
        ref: boxRef,
        handler: () => setIsOpen(false),
    })

    return (
        <Flex pos="relative" flexDir="column" w="full" ref={boxRef} mb={8}>
            <Flex
                align="center"
                rounded="full"
                border="1px"
                borderColor="#383838"
                bg="#131313"
                zIndex={3}
                py={3}
                px={6}
                justify="space-between"
                cursor="pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <Text>{selected}</Text>
                {isOpen ? <BiChevronUp size="1.5rem" /> : <BiChevronDown size="1.5rem" />}
            </Flex>
            <Box pos="absolute" w="full" top="50%" left={0} zIndex={2} borderBottomRadius={4}>
                <Collapse in={isOpen}>
                    <Box
                        onClick={() => {
                            onChange(dropdownOptions.find(option => option !== selected)!)
                            setIsOpen(false)
                        }}
                        bg="#131313"
                        border="1px"
                        borderColor="#383838"
                        sx={{ borderRadius: "0 0 1rem 1rem" }}
                        py={3}
                        px={6}
                        pt={8}
                        shadow="base"
                        userSelect="none"
                        cursor="pointer"
                    >
                        {dropdownOptions.find(option => option !== selected)!}
                    </Box>
                </Collapse>
            </Box>
        </Flex>
    )
}

export default Dropdown
