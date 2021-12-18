import { Flex, FlexProps, Text } from "@chakra-ui/layout"
import { Image } from "@chakra-ui/react"
import { BoldText } from "@components/shared"

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
            <Image loading="lazy" h="3.5rem" src={icon} alt={text} />
            <BoldText textAlign="center" mt="4">
                {text}
            </BoldText>
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
