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
    bg? : string
    color? : string
    children?: React.ReactNode
    label: string
}

export const PopoverCustom = ({color="white" ,bg= "383838DD",children, label = "" }: Props) => {
    return (
        <Popover>
            <PopoverTrigger>{children}</PopoverTrigger>
            <PopoverContent
                _focus={{ boxShadow: "none", border: "none" }}
                rounded="lg"
                border="none"
                bg={bg}
                color={color}
            >
                <PopoverArrow bg={bg}/>
                <PopoverCloseButton bg="none" color="#9B9E9D" />
                <PopoverBody>{label}</PopoverBody>
            </PopoverContent>
        </Popover>
    )
}
