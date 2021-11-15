// * DESCRIPTION:

import { Heading, HeadingProps } from "@chakra-ui/layout"

interface HeadingTextProps extends HeadingProps {
    isGradient?: boolean
}

const HeadingText = ({ isGradient, ...rest }: HeadingTextProps) => {
    return (
        <Heading
            fontWeight="normal"
            w="full"
            textAlign="center"
            fontSize={["4xl", "5xl"]}
            letterSpacing={["1px", "2px", "4px"]}
            mb={4}
            bgClip={isGradient ? "text" : "border-box"}
            bgGradient={isGradient ? "linear(to-b,bgGradient.orange)" : ""}
            color="stack.textBlack"
            {...rest}
        />
    )
}

export default HeadingText
