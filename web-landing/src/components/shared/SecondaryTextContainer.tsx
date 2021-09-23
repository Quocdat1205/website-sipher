// * DESCRIPTION:

import { Box, Text, BoxProps } from "@chakra-ui/react"
import React from "react"
import GradientHeading from "./GradientHeading"

interface SecondaryTextContainerProps extends BoxProps {
    headline: React.ReactNode
    children?: React.ReactNode
}

export const SecondaryTextContainer = ({ headline, children }: SecondaryTextContainerProps) => {
    return (
        <Box mb={8}>
            {/* <Text fontWeight="bold" color="white" fontSize="lg" textTransform="uppercase">
                {headline}
            </Text> */}
            <GradientHeading fontSize="lg" fontWeight="bold">
                {headline}
            </GradientHeading>
            <Box>{children}</Box>
        </Box>
    )
}

export default SecondaryTextContainer
