// * DESCRIPTION:

import { Box, Heading, BoxProps } from "@chakra-ui/react"
import GradientHeading from "./GradientHeading"

interface TextContainerProps extends BoxProps {
    headline: React.ReactNode
    children?: React.ReactNode
}

export const TextContainer = ({ headline, children, maxW = "48rem", ...rest }: TextContainerProps) => {
    return (
        <Box w="full" maxW={maxW} {...rest}>
            <GradientHeading
                fontSize={["2xl", "3xl", "4xl"]}
                textTransform="uppercase"
                w="full"
                textAlign="center"
                fontWeight="semibold"
                mb={4}
            >
                {headline}
            </GradientHeading>
            {/* <Box bg="main.darkRed" w="full" h="1px" my={2} pos="relative">
                <Box pos="absolute" w="4%" minW="1rem" h="3px" top="-1px" bg="main.darkRed" rounded="full"></Box>
            </Box> */}
            <Box>{children}</Box>
        </Box>
    )
}
