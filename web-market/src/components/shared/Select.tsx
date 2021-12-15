// Simpler version of ComboBox, no search, and only select 1 item
import { Box, Collapse, Flex, Input, Text, useDisclosure, useOutsideClick } from "@chakra-ui/react"
import { FC, useEffect, useRef, useState } from "react"
import { BsChevronDown, BsChevronUp } from "react-icons/bs"

interface Option {
    code?: string | number
    [key: string]: any
}
interface SelectProps {
    selection: Option[]
    value: Option | null | undefined
    onSelect?: (option: Option) => void
    displayField?: string
    keyField?: string
    removable?: boolean
    readOnly?: boolean
    searchable?: boolean
    isDisabled?: boolean
}
const Select: FC<SelectProps> = ({
    selection,
    value,
    onSelect = option => option,
    displayField = "name",
    keyField = "code",
    removable = false,
    readOnly = false,
    searchable = false,
    isDisabled = false,
}) => {
    const { isOpen, onToggle, onClose } = useDisclosure()
    const ref = useRef<HTMLDivElement>(null)
    useOutsideClick({
        ref: ref,
        handler: onClose,
    })
    const inputRef = useRef<HTMLInputElement>(null)
    const [searchText, setSearchText] = useState("")
    useEffect(() => {
        if (isOpen && inputRef.current) inputRef.current.focus()
    }, [isOpen])
    const isOptionSelected = (option: Option) => value && option[keyField] === value[keyField]
    const handleSelect = (option: Option) => {
        if (isOptionSelected(option)) {
            if (removable) {
                onSelect({ id: "" })
            }
            onClose()
            return
        }
        onSelect(option)
        onClose()
    }
    const formatOption = (opt: Option) =>
        Object.values(opt)
            .map(value => {
                if (typeof value !== "string") return value.toString().toLowerCase()
                else return value.toLowerCase()
            })
            .join(" ")
    const selectionFilterer = (opt: Option) => formatOption(opt).includes(searchText.toLowerCase())
    useEffect(() => {
        if (!isOpen) setSearchText("")
    }, [isOpen])
    return (
        <Box pos="relative" ref={ref} cursor={isDisabled ? "not-allowed" : "auto"}>
            <Flex
                onClick={() => !isDisabled && onToggle()}
                align="center"
                px={2}
                h="full"
                pointerEvents={readOnly || isDisabled ? "none" : "all"}
                bg={isDisabled ? "border.gray" : "transparent"}
                opacity={isDisabled ? 0.6 : 1}
                rounded="md"
                border={"1px"}
                cursor="pointer"
                borderColor={isDisabled ? "border.gray" : "gray.50"}
                height="2rem"
            >
                <Box flex={1} userSelect="none">
                    <Text textAlign="center" isTruncated>
                        {value && value[displayField]}
                    </Text>
                </Box>
                {!readOnly && <Box>{isOpen ? <BsChevronUp /> : <BsChevronDown />}</Box>}
            </Flex>
            <Box
                pos="absolute"
                overflow="visible"
                width="100%"
                zIndex="dropdown"
                top={"100%"}
                transform={"translateY(0.5rem);"}
            >
                <Collapse in={isOpen} animateOpacity unmountOnExit>
                    <Flex
                        direction="column"
                        width="100%"
                        shadow="base"
                        bg="black"
                        rounded="md"
                        py={1}
                        border="1px"
                        borderColor="border.gray"
                    >
                        {searchable && (
                            <Input
                                color="white"
                                _focus={{ borderColor: "none" }}
                                value={searchText}
                                onChange={e => setSearchText(e.target.value)}
                                ref={inputRef}
                                variant="flushed"
                                mb={1}
                                placeholder="Search..."
                                px={4}
                            />
                        )}
                        <Box flex={1} overflow="overlay" maxH="10rem">
                            {selection.filter(selectionFilterer).map(option => (
                                <Box
                                    key={option[keyField]}
                                    cursor="pointer"
                                    onClick={() => handleSelect(option)}
                                    px={4}
                                    py={2}
                                    _hover={{ bg: isOptionSelected(option) ? "#404040" : "border.gray" }}
                                    bg={isOptionSelected(option) ? "#404040" : "transparent"}
                                    color={isOptionSelected(option) ? "white" : "white"}
                                    fontWeight={isOptionSelected(option) ? "semibold" : "normal"}
                                >
                                    {option[displayField]}
                                </Box>
                            ))}
                        </Box>
                    </Flex>
                </Collapse>
            </Box>
        </Box>
    )
}

export default Select
