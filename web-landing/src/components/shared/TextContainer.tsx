// * DESCRIPTION:

import { Box, BoxProps } from "@chakra-ui/react"
import { GradientHeading } from "@sipher/web-components"

interface TextContainerProps extends BoxProps {
    headline: React.ReactNode
    children?: React.ReactNode
}

export const TextContainer = ({ headline, children, maxW = "48rem", ...rest }: TextContainerProps) => {
    return (
        <Box w="full" maxW={maxW} {...rest}>
            <GradientHeading
                textTransform="uppercase"
                fontWeight="normal"
                w="full"
                textAlign="center"
                fontSize={["4xl", "5xl"]}
                letterSpacing={["1px", "2px", "4px"]}
                mb={4}
            >
                {headline}
            </GradientHeading>

            <Box>{children}</Box>
        </Box>
    )
}
