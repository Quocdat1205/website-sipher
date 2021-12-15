// * DESCRIPTION:

import React from "react"
import { Box, BoxProps, Spinner, Flex, Text } from "@chakra-ui/react"

interface ActionButtonProps extends BoxProps {
    text: React.ReactNode
    isLoading?: boolean
    as?: BoxProps["as"]
    loadingText?: string
    rel?: string
    href?: string
    disabled?: boolean
    size?: "small" | "medium" | "large"
}

export const ActionButton = ({
    letterSpacing = "2px",
    fontWeight = "bold",
    as = "button",
    text,
    isLoading,
    rel,
    loadingText = "Loading",
    disabled,
    px = 4,
    py = 2,
    fontSize = "sm",
    href,
    ...rest
}: ActionButtonProps) => {
    return (
        <Box
            rel={rel}
            as={as}
            href={href}
            textTransform="uppercase"
            rounded="md"
            bgGradient={disabled ? "linear(to-b, #131313 0%, #232323 84.37%)" : "linear(to-b, #FF6795, #FF710B 84.37%)"}
            color={disabled ? "#979797" : "white"}
            shadow="base"
            letterSpacing="1px"
            textAlign="center"
            pos="relative"
            pointerEvents={disabled ? "none" : "all"}
            overflow="hidden"
            userSelect="none"
            {...rest}
        >
            <Box py={py} px={px} h="full">
                {isLoading ? (
                    <Flex align="center" justify="center">
                        <Spinner size="sm" thickness="3px" />
                        <Text ml={4} fontWeight={fontWeight} color="inherit" fontSize={fontSize}>
                            {loadingText}
                        </Text>
                    </Flex>
                ) : (
                    <Text letterSpacing={letterSpacing} fontWeight={fontWeight} color="inherit" fontSize={fontSize}>
                        {text}
                    </Text>
                )}
            </Box>
        </Box>
    )
}
