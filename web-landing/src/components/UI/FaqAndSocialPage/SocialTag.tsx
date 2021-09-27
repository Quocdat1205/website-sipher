// * DESCRIPTION:

import { Box, BoxProps, Flex, chakra } from "@chakra-ui/react"
import { MyText } from "@sipher/web-components"

interface SocialTagProps extends BoxProps {
    headline: string
    icon?: React.ReactNode
    href?: string
}

const SocialTag = ({ headline, icon, href, ...rest }: SocialTagProps) => {
    return (
        <Flex as="a" href={href} target="_blank" align="center" cursor="pointer" userSelect="none" {...rest}>
            <Box w={["1rem", "1.5rem", "2rem"]} overflow="hidden">
                {icon}
            </Box>
            <MyText ml={4} fontWeight="bold">
                {headline.split(" ")[0]}
                {headline.split(" ")[1] && (
                    <chakra.span color="main.yellow">{" " + headline.split(" ")[1]}</chakra.span>
                )}
            </MyText>
        </Flex>
    )
}

export default SocialTag
