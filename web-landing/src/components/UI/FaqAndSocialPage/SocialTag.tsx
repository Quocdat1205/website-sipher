// * DESCRIPTION:

import { Box, BoxProps, Flex, Text, chakra } from "@chakra-ui/react"

interface SocialTagProps extends BoxProps {
    headline: string
    icon?: React.ReactNode
    href?: string
}

const SocialTag = ({ headline, icon, href, ...rest }: SocialTagProps) => {
    return (
        <Flex as="a" href={href} target="_blank" align="center" cursor="pointer" userSelect="none" {...rest}>
            <Box>{icon}</Box>
            <Text ml={4} fontWeight="bold">
                {headline.split(" ")[0]}
                {headline.split(" ")[1] && (
                    <chakra.span color="main.yellow">{" " + headline.split(" ")[1]}</chakra.span>
                )}
            </Text>
        </Flex>
    )
}

export default SocialTag
