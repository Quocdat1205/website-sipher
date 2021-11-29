import { Flex, FlexProps } from "@chakra-ui/layout"
import React from "react"

interface Props extends FlexProps {
    text?: string
}

export const FlexHeader = ({ text = "", ...rest }: Props) => {
    return (
        <Flex py={4} px={8} textTransform="none" fontWeight="semibold" fontSize="lg" {...rest}>
            {text}
        </Flex>
    )
}
