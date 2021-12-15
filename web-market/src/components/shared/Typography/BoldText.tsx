import { Text, TextProps } from "@chakra-ui/react"

interface BoldTextProps extends TextProps {
    isGradient?: boolean
}

export const BoldText = ({ isGradient, ...props }: BoldTextProps) => {
    return (
        <Text
            fontSize={"lg"}
            fontWeight={"semibold"}
            letterSpacing={"3px"}
            textTransform={"uppercase"}
            bgGradient={isGradient ? "linear(to-b, gradient.orange)" : "none"}
            bgClip={isGradient ? "text" : "initial"}
            isTruncated={false}
            {...props}
        />
    )
}

export default BoldText
