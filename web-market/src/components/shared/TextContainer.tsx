// * DESCRIPTION:

import { Box, BoxProps } from "@chakra-ui/react"
import { Typo } from "."

interface TextContainerProps extends BoxProps {
    headline: React.ReactNode
    children?: React.ReactNode
}

export const TextContainer = ({
    headline,
    children,
    maxW = ["48rem", "48rem", "56rem", "64rem", "72rem"],
    ...rest
}: TextContainerProps) => {
    return (
        <Box w="full" maxW={maxW} {...rest}>
            <Typo.Heading isGradient>{headline}</Typo.Heading>
            <Box>{children}</Box>
        </Box>
    )
}
