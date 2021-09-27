import { Text, TextProps } from "@chakra-ui/layout"
import React from "react"

interface MyTextProps extends TextProps {
    size?: "small" | "medium" | "large"
}

export const MyText = ({ size = "medium", ...rest }: MyTextProps) => {
    const fontSize = size === "small" ? ["xs", "sm"] : size === "medium" ? ["sm", "md"] : ["md", "lg", "xl"]
    return <Text fontSize={fontSize} {...rest} />
}
export default MyText
