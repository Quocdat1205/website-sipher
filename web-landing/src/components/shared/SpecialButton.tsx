// * DESCRIPTION:

import { Box, BoxProps } from "@chakra-ui/layout"

interface SpecialButtonProps extends BoxProps {
    text: React.ReactNode
}

export const SpecialButton = ({ text, ...rest }: SpecialButtonProps) => {
    return (
        <Box
            textTransform="uppercase"
            w="full"
            as="button"
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
