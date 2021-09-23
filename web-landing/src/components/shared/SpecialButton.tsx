// * DESCRIPTION:

import { Box, BoxProps, chakra, Spinner, Grid, Text, Flex } from "@chakra-ui/react"

interface SpecialButtonProps extends BoxProps {
    text: React.ReactNode
    as?: BoxProps["as"]
    href?: string
    isLoading?: boolean
    loadingText?: string
    rel?: string
}

export const SpecialButton = ({
    text,
    as = "button",
    href,
    isLoading,
    loadingText = "Submitting",
    rel,
    ...rest
}: SpecialButtonProps) => {
    return (
        <Box
            as={as}
            href={href}
            target="_blank"
            rel={rel}
            textTransform="uppercase"
            w="full"
            rounded="md"
            p={2}
            bgGradient="linear(to-b, bgGradient.orange)"
            _hover={{ bgGradient: "linear(to-t, bgGradient.orange)" }}
            fontSize="sm"
            fontWeight="bold"
            color="white"
            shadow="base"
            letterSpacing="1px"
            pos="relative"
            textAlign="center"
            {...rest}
        >
            {isLoading && (
                <Grid pos="absolute" top={0} left={0} w="full" h="full" placeItems="center" pointerEvents="none">
                    <Flex align="center">
                        <Spinner size="sm" thickness="3px" />
                        <Text ml={4}>{loadingText}</Text>
                    </Flex>
                </Grid>
            )}
            <chakra.span color={isLoading ? "transparent" : "inherit"}>{text}</chakra.span>
        </Box>
    )
}
