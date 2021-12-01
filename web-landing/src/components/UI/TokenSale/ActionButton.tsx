// * DESCRIPTION:

import React from "react"
import { Box, BoxProps, Spinner, Flex, Text } from "@chakra-ui/react"

interface ActionButtonProps extends BoxProps {
    text: React.ReactNode
    isLoading?: boolean
    loadingText?: string
    disabled?: boolean
    px?: number
    py?: number
    fontSize?: BoxProps["fontSize"]
}

export const ActionButton = ({
    text,
    isLoading,
    loadingText = "Loading",
    disabled,
    px = 8,
    py = 4,
    fontSize = "md",
    ...rest
}: ActionButtonProps) => {
    return (
        <Box
            as="button"
            textTransform="uppercase"
            rounded="md"
            bgGradient="linear(to-b, #FF6795, #FF710B 84.37%)"
            color={disabled ? "#979797" : "white"}
            shadow="base"
            letterSpacing="1px"
            textAlign="center"
            pointerEvents={disabled ? "none" : "all"}
            overflow="hidden"
            userSelect="none"
            {...rest}
        >
            <Box py={py} px={px} h="full" bg={disabled ? "blackAlpha.500" : "transparent"}>
                {isLoading ? (
                    <Flex align="center" justify="center">
                        <Spinner size="sm" thickness="3px" />
                        <Text ml={4} fontWeight="bold" color="inherit" fontSize={fontSize}>
                            {loadingText}
                        </Text>
                    </Flex>
                ) : (
                    <Text letterSpacing="2px" fontWeight="bold" color="inherit" fontSize={fontSize}>
                        {text}
                    </Text>
                )}
            </Box>
        </Box>
    )
}
