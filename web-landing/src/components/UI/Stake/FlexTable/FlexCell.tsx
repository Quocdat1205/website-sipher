import { Flex, FlexProps } from "@chakra-ui/layout"
import React from "react"

interface Props extends FlexProps {}

export const FlexCell = ({ children, ...rest }: Props) => {
    return (
        <Flex py={4} px={8} flexDir="row" align="center" {...rest} borderColor="border.gray">
            {children}
        </Flex>
    )
}
