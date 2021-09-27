import { Image } from "@chakra-ui/image"
import { Flex, FlexProps } from "@chakra-ui/layout"
import { MyText } from "@sipher/web-components"
import React from "react"

interface BenefitTagProps extends FlexProps {
    icon: string
    text: string
    linkText?: string
}

const BenefitTag = ({ icon, text, linkText, ...rest }: BenefitTagProps) => {
    return (
        <Flex flex="1 1 10rem" px="4" flexDir="column" align="center" {...rest}>
            <Image maxH="3.5rem" src={icon} alt={text} />
            <MyText
                textAlign="center"
                mt="4"
                textTransform="uppercase"
                size="large"
                fontWeight="bold"
                letterSpacing="2px"
            >
                {text}
            </MyText>
            <MyText size="small" as="u" fontWeight="bold" mt={4}>
                {linkText}
            </MyText>
        </Flex>
    )
}

export default BenefitTag
