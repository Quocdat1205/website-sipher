// * DESCRIPTION:

import { Heading, HeadingProps } from "@chakra-ui/layout"

interface HeadingTextProps extends HeadingProps {
    isGradient?: boolean
}

const HeadingText = ({ isGradient, ...rest }: HeadingTextProps) => {
    return (
        <Heading
            fontFamily="Brandon"
            textTransform="uppercase"
            fontWeight={500}
            w="full"
            textAlign="center"
            fontSize={"4xl"}
            letterSpacing={"4px"}
            mb={4}
            bgClip={isGradient ? "text" : "border-box"}
            bgGradient={isGradient ? "linear(to-b,bgGradient.orange)" : ""}
            {...rest}
        />
    )
}

export default HeadingText
