import { Flex, FlexProps } from "@chakra-ui/layout"
import React from "react"

interface Props extends FlexProps {}

export const FlexCell = ({ children, ...rest }: Props) => {
    return (
        <Flex {...rest} borderColor="border.gray" py={4} px={8} flexDir="row" align="center">
            {children}
        </Flex>
    )
}
