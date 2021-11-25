// * DESCRIPTION:

import { Box, BoxProps, Spinner, Text, Flex } from "@chakra-ui/react"
import { Typo } from "@components/shared/Typography"

interface GradientOutlineButtonProps extends BoxProps {
    text: React.ReactNode
    as?: BoxProps["as"]
    href?: string
    isLoading?: boolean
    loadingText?: string
    rel?: string
}

export const GradientOutlineButton = ({
    text,
    as = "button",
    href,
    isLoading,
    loadingText = "Submitting",
    rel,
    backgroundColor = "black",
    p,
    px = 6,
    py = 1,
    pt,
    pb,
    pl,
    pr,
    ...rest
}: GradientOutlineButtonProps) => {
    const padding = { p, px, py, pt, pb, pl, pr }
    return (
        <Box
            as={as}
            href={href}
            target="_blank"
            rel={rel}
            textTransform="uppercase"
            rounded="md"
            // bg="linear-gradient(#111, #111) padding-box, linear-gradient(180deg, #FF6795 0%, #FF710B 84.37%) border-box"
            bgGradient="linear(to-b, bgGradient.orange)"
            borderRadius="99"
            p="1px"
            fontWeight="bold"
            color="white"
            shadow="base"
            letterSpacing="1px"
            pos="relative"
            textAlign="center"
            {...rest}
        >
            <Box bg={backgroundColor} rounded="full" w="full" {...padding}>
                {isLoading ? (
                    <Flex align="center" justify="center">
                        <Spinner size="sm" thickness="3px" />
                        <Typo.Text fontSize="xs" ml={4} letterSpacing="2px">
                            {loadingText}
                        </Typo.Text>
                    </Flex>
                ) : (
                    <Typo.Text py={2} px={4} fontSize="xs" fontWeight="bold" letterSpacing="2px">
                        {text}
                    </Typo.Text>
                )}
            </Box>
        </Box>
    )
}
