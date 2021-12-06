import {
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverTrigger,
} from "@chakra-ui/popover"
import React from "react"

interface Props {
    children?: React.ReactNode
    label: string
}

export const PopoverCustom = ({ children, label = "" }: Props) => {
    return (
        <Popover>
            <PopoverTrigger>{children}</PopoverTrigger>
            <PopoverContent
                _focus={{ boxShadow: "none", border: "none" }}
                rounded="lg"
                border="none"
                bg="#383838DD"
                color="white"
            >
                <PopoverArrow bg="#383838DD" />
                <PopoverCloseButton bg="none" color="#9B9E9D" />
                <PopoverBody>{label}</PopoverBody>
            </PopoverContent>
        </Popover>
    )
}
