import { FlexProps, Flex } from "@chakra-ui/layout"
import React from "react"

interface Props extends FlexProps {}

export const FlexContainer = ({ ...rest }: Props) => {
    return <Flex my={1} align="center" justify="center" bg="#191b2e" rounded="md" p={4} {...rest} />
}
