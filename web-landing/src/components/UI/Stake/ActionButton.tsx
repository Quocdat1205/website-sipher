// * DESCRIPTION:

import React from "react"
import { Box, BoxProps, Spinner, Flex, TextProps, Text } from "@chakra-ui/react"

interface ActionButtonProps extends BoxProps {
    text: React.ReactNode
    isLoading?: boolean
    loadingText?: string
    disabled?: boolean
}

export const ActionButton = ({ text, isLoading, loadingText = "Loading", disabled, ...rest }: ActionButtonProps) => {
    return (
        <Box
            as="button"
            rounded="md"
            bgGradient="linear(to-b, #FF6795, #FF710B 84.37%)"
            color="white"
            shadow="base"
            fontSize={["xs", "sm", "sm", "md"]}
            letterSpacing="1px"
            textAlign="center"
            overflow="hidden"
            userSelect="none"
            py={2}
            px={4}
            {...rest}
        >
            <Text letterSpacing="2px" fontWeight="bold" color="inherit">
                {text}
            </Text>
        </Box>
    )
}
