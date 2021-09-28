// * DESCRIPTION:

import React from "react"
import { Box, BoxProps, Spinner, Flex } from "@chakra-ui/react"
import { MyText } from "."

interface GradientButtonProps extends BoxProps {
    text: React.ReactNode
    as?: BoxProps["as"]
    href?: string
    isLoading?: boolean
    loadingText?: string
    rel?: string
}

export const GradientButton = ({
    text,
    as = "button",
    href,
    isLoading,
    loadingText = "Submitting",
    rel,
    ...rest
}: GradientButtonProps) => {
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
            bgGradient="linear(to-b, #FF6795, #FF710B 84.37%)"
            fontSize="sm"
            fontWeight="semibold"
            color="white"
            shadow="base"
            letterSpacing="1px"
            pos="relative"
            textAlign="center"
            {...rest}
        >
            {isLoading ? (
                <Flex align="center" justify="center">
                    <Spinner size="sm" thickness="3px" />
                    <MyText ml={4}>{loadingText}</MyText>
                </Flex>
            ) : (
                <MyText>{text}</MyText>
            )}
        </Box>
    )
}
