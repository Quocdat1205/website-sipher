import { Flex, FlexProps } from "@chakra-ui/layout"
import { Typo } from "@components/shared"
import React from "react"

interface Props extends FlexProps {}

export const DetailRow = ({ children, ...rest }: Props) => {
    return (
        <Flex h="45px" flexDir="row" align="center" justify="space-between" {...rest}>
            {children}
        </Flex>
    )
}
