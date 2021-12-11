import { TextProps, Text } from "@chakra-ui/react"

export const GradientText = (props: TextProps) => {
    return <Text bgClip="text" bgGradient="linear(to-b,bgGradient.orange)" {...props} />
}

export default GradientText
