// * DESCRIPTION:

import { Text, TextProps } from "@chakra-ui/react"

interface BoldTextProps extends TextProps {
    isGradient?: boolean
}

const BoldText = ({ isGradient, ...rest }: BoldTextProps) => {
    return (
        <Text
            letterSpacing="-.01rem"
            size="large"
            fontWeight="bold"
            bgClip={isGradient ? "text" : "border-box"}
            bgGradient={isGradient ? "linear(to-b,bgGradient.orange)" : ""}
            color="stack.textBlack"
            {...rest}
        />
    )
}

export default BoldText
