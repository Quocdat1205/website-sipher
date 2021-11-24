import { useOutsideClick } from "@chakra-ui/hooks"
import { Box, Flex } from "@chakra-ui/react"
import { Typo } from "@components/shared"
import React, { useRef, useState } from "react"
import { BiChevronDown, BiChevronUp } from "react-icons/bi"
import { Collapse } from "@chakra-ui/transition"

const Dropdown = ({ dropdownOptions, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false)

    const renderedOptions = dropdownOptions.map(option => {
        if (option.value === selected.value) {
            return null
        }

        return (
            <Box
                _hover={{ color: "white" }}
                color="#9B9E9D"
                py={3}
                px={6}
                w="full"
                cursor="pointer"
                key={option.value}
                className="item"
                onClick={() => onSelectedChange(option)}
            >
                {option.label}
            </Box>
        )
    })

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
                borderColor={open ? "main.orange" : "border.gray"}
                _hover={{ borderColor: "main.orange" }}
                color={open ? "main.orange" : "white"}
                py={3}
                px={6}
                zIndex={3}
                flexDir="row"
                transition="all 0.5s"
                justify="space-between"
                cursor="pointer"
                onClick={() => {
                    setOpen(!open)
                }}
            >
                <Typo.Text color={open ? "main.orange" : "white"} size="small" className="text">
                    {selected.label}
                </Typo.Text>
                {open ? <BiChevronUp size="1.5rem" /> : <BiChevronDown size="1.5rem" />}
            </Flex>
            <Box pos="absolute" w="full" top="50%" left={0} zIndex={2} sx={{ borderRadius: "0 0 1rem 1rem" }}>
                <Collapse in={open}>
                    <Box
                        onClick={() => setOpen(false)}
                        bg="black"
                        border="1px"
                        borderTop="none"
                        borderColor={open ? "main.orange" : "border.gray"}
                        pt={7}
                        pb={3}
                        sx={{ borderRadius: "0 0 1rem 1rem" }}
                        shadow="base"
                    >
                        {renderedOptions}
                    </Box>
                </Collapse>
            </Box>
        </Flex>
    )
}

export default Dropdown
