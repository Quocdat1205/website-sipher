import { Heading, HeadingProps } from "@chakra-ui/layout"
import React from "react"

interface Props extends HeadingProps {}

const GradientHeading = (props: Props) => {
    return (
        <Heading
            fontSize={["2xl", "3xl", "4xl", "5xl"]}
            bgClip="text"
            bgGradient="linear(to-b,bgGradient.orange)"
            textTransform="uppercase"
            fontWeight="normal"
            {...props}
        />
    )
}
export default GradientHeading
