// * DESCRIPTION:

import { Box, BoxProps, chakra, Spinner, Grid, Text, Flex } from "@chakra-ui/react"
import { MyText } from "@sipher/web-components"

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
            <Box bg="black" rounded="full" px={2} py={2}>
                {isLoading && (
                    <Grid pos="absolute" top={0} left={0} w="full" h="full" placeItems="center" pointerEvents="none">
                        <Flex align="center">
                            <Spinner size="sm" thickness="3px" />
                            <MyText ml={4}>{loadingText}</MyText>
                        </Flex>
                    </Grid>
                )}
                <chakra.span color={isLoading ? "transparent" : "inherit"}>{text}</chakra.span>
            </Box>
        </Box>
    )
}
