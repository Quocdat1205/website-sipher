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
    py = 2,
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
            bgGradient="linear(to-b, bgGradient.orange)"
            borderRadius="full"
            p="1px"
            color="white"
            shadow="base"
            pos="relative"
            textAlign="center"
            {...rest}
        >
            <Box bg={backgroundColor} rounded="full" w="full" {...padding}>
                {isLoading ? (
                    <Flex align="center" justify="center">
                        <Spinner size="sm" thickness="3px" />
                        <Text size="small" ml={4} letterSpacing="2px">
                            {loadingText}
                        </Text>
                    </Flex>
                ) : (
                    <Text size="small" fontWeight="bold" letterSpacing="2px">
                        {text}
                    </Text>
                )}
            </Box>
        </Box>
    )
}
