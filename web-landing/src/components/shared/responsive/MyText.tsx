// * DESCRIPTION:

import { Text, TextProps } from "@chakra-ui/react"

interface MyTextProps extends TextProps {
    size?: "small" | "medium" | "large" | "xsmall" | string
}

export const MyText = ({ size = "medium", ...rest }: MyTextProps) => {
    const fontSize =
        size === "xsmall"
            ? ["xs", "xs"]
            : size === "small"
            ? ["xs", "sm"]
            : size === "medium"
            ? ["sm", "md"]
            : ["md", "lg", "xl"]
    return <Text fontSize={fontSize} {...rest} />
}

export default MyText
