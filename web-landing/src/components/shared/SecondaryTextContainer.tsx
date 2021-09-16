// * DESCRIPTION:

import { Box, Text, BoxProps } from "@chakra-ui/react"
import React from "react"

interface SecondaryTextContainerProps extends BoxProps {
    headline: React.ReactNode
    children?: React.ReactNode
}

export const SecondaryTextContainer = ({ headline, children }: SecondaryTextContainerProps) => {
    return (
        <Box mb={8}>
            <Text fontWeight="bold" color="main.darkRed" fontSize="lg" textTransform="uppercase">
                {headline}
            </Text>
            <Box>{children}</Box>
        </Box>
    )
}

export default SecondaryTextContainer
