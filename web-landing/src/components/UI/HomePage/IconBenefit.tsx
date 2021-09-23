import { Image } from "@chakra-ui/image"
import { Flex, FlexProps, Heading, Text } from "@chakra-ui/layout"
import React from "react"

interface Props extends FlexProps {
    imgSrc: string
    title: string
}

const IconBenefit = ({ imgSrc, title, ...rest }: Props) => {
    return (
        <Flex flex="1 1 10rem" px="4" flexDir="column" align="center" {...rest}>
            <Image maxH="3.5rem" src={imgSrc} alt={title} />
            <Heading textAlign="center" mt="4" size="sm" textTransform="uppercase">
                {title}
            </Heading>
        </Flex>
    )
}

export default IconBenefit
