// * DESCRIPTION:

import { Box, Heading, BoxProps } from "@chakra-ui/react"

interface TextContainerProps extends BoxProps {
    headline: React.ReactNode
    children?: React.ReactNode
}

export const TextContainer = ({ headline, children, maxW = "40rem", ...rest }: TextContainerProps) => {
    return (
        <Box w="full" maxW={maxW} {...rest}>
            <Heading fontSize={["lg", "xl"]} textTransform="uppercase" w="full" textAlign="right">
                {headline}
            </Heading>
            <Box bg="main.darkRed" w="full" h="1px" my={2} pos="relative">
                <Box pos="absolute" w="4%" minW="1rem" h="3px" top="-1px" bg="main.darkRed" rounded="full"></Box>
            </Box>
            <Box>{children}</Box>
        </Box>
    )
}
