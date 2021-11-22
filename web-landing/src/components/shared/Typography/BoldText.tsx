// * DESCRIPTION:

import { Text, TextProps } from "@chakra-ui/react"

interface BoldTextProps extends TextProps {
    isGradient?: boolean
}

const BoldText = ({ isGradient, ...rest }: BoldTextProps) => {
    return (
        <Text
            size="large"
            fontWeight="semibold"
            letterSpacing={["2px", "2px", "3px", "4px"]}
            bgClip={isGradient ? "text" : "border-box"}
            bgGradient={isGradient ? "linear(to-b,bgGradient.orange)" : ""}
            {...rest}
        />
    )
}

export default BoldText
