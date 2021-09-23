import { Heading, HeadingProps } from "@chakra-ui/layout"
import React from "react"

interface Props extends HeadingProps {
    title: string
}

const HeadingGradient = (props: Props) => {
    return (
        <Heading
            fontSize={["2xl", "3xl", "4xl", "5xl"]}
            bgClip="text"
            bgGradient="linear(180deg,bgGradient.orange)"
            textTransform="uppercase"
            fontWeight="normal"
            {...props}
        >
            {props.title}
        </Heading>
    )
}
export default HeadingGradient
