import { Flex, FlexProps } from "@chakra-ui/layout"
import React from "react"

interface Props extends FlexProps {}

export const FlexRow = ({ children, ...rest }: Props) => {
    return (
        <Flex flexDir="row" {...rest}>
            {children}
        </Flex>
    )
}
