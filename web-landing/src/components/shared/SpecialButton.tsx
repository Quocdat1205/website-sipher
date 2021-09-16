// * DESCRIPTION:

import { Box, BoxProps } from "@chakra-ui/layout"

interface SpecialButtonProps extends BoxProps {
    text: React.ReactNode
    as?: BoxProps["as"]
    href?: string
}

export const SpecialButton = ({ text, as = "button", href, ...rest }: SpecialButtonProps) => {
    return (
        <Box
            as={as}
            href={href}
            target="_blank"
            textTransform="uppercase"
            w="full"
            rounded="md"
            p={2}
            bgGradient="linear(to-r, main.purple, main.pinkRed, main.yellow)"
            fontSize="sm"
            fontWeight="semibold"
            color="white"
            shadow="base"
            letterSpacing="1px"
            {...rest}
        >
            {text}
        </Box>
    )
}
