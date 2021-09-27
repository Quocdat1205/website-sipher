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
                w="full"
                textAlign="center"
                fontWeight="semibold"
                fontSize={["2xl", "3xl", "4xl"]}
                letterSpacing={["1px", "2px", "4px"]}
                mb={4}
            >
                {headline}
            </GradientHeading>

            <Box>{children}</Box>
        </Box>
    )
}
