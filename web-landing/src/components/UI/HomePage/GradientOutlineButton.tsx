// * DESCRIPTION:

import { Box, BoxProps, chakra, Spinner, Grid, Text, Flex } from "@chakra-ui/react"

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
    ...rest
}: GradientOutlineButtonProps) => {
    return (
        <Box
            as={as}
            href={href}
            target="_blank"
            rel={rel}
            textTransform="uppercase"
            rounded="md"
            py={2}
            px={6}
            bg="linear-gradient(#111, #111) padding-box, linear-gradient(180deg, #FF6795 0%, #FF710B 84.37%) border-box"
            borderRadius="99"
            border="1px solid transparent"
            fontWeight="semibold"
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
