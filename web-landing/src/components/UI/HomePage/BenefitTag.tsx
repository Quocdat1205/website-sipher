import { Image } from "@chakra-ui/image"
import { Flex, FlexProps, Text } from "@chakra-ui/layout"
import { Typo } from "@components/shared"
import React from "react"

interface BenefitTagProps extends FlexProps {
    icon: string
    text: string
    link?: {
        text: string
        path: string
    }
}

const BenefitTag = ({ icon, text, link, ...rest }: BenefitTagProps) => {
    return (
        <Flex flex="1 1 10rem" px="4" flexDir="column" align="center" {...rest}>
            <Image maxH="3.5rem" src={icon} alt={text} />
            <Typo.BoldText textAlign="center" mt="4" textTransform="uppercase">
                {text}
            </Typo.BoldText>
            {link && (
                <Text
                    letterSpacing="1px"
                    fontSize="xs"
                    as="a"
                    href={link.path}
                    rel="noreferrer"
                    target="_blank"
                    textDecoration="underline"
                    cursor="pointer"
                    fontWeight="bold"
                    mt={4}
                >
                    {link.text}
                </Text>
            )}
        </Flex>
    )
}

export default BenefitTag
