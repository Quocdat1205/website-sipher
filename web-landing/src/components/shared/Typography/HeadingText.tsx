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
            fontSize={["2xl", "3xl", "4xl", "4xl", "4xl"]}
            letterSpacing={["1px", "2px", "4px"]}
            mb={4}
            bgClip={isGradient ? "text" : "border-box"}
            bgGradient={isGradient ? "linear(to-b,bgGradient.orange)" : ""}
            {...rest}
        />
    )
}

export default HeadingText
