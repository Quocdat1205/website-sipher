// * DESCRIPTION:

import { Box, Heading, Image, BoxProps } from "@chakra-ui/react"

interface TextContainerProps extends BoxProps {
    headline: React.ReactNode
    children: React.ReactNode
}

export const TextContainer = ({ headline, children, ...rest }: TextContainerProps) => {
    return (
        <Box w="full" maxW="40rem" {...rest}>
            <Heading fontSize="xl" textTransform="uppercase" w="full" textAlign="right" marginBottom={-4}>
                {headline}
            </Heading>
            <Image src="/images/general/line.png" mb={2} />
            <Box>{children}</Box>
        </Box>
    )
}
