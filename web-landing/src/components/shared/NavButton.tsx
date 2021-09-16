// * DESCRIPTION:

import { Box } from "@chakra-ui/layout"

export interface NavButtonProps {
    text: string
    active?: boolean
    onClick?: () => void
}

export const NavButton = ({ text, active, onClick }: NavButtonProps) => {
    return (
        <Box
            bgGradient={active ? "linear(to-b, main.darkRed, main.offBlack)" : "linear(to-l, main.gray, main.gray)"}
            w="full"
            p={3}
            textAlign="center"
            color="white"
            textTransform="uppercase"
            cursor="pointer"
            fontSize="sm"
            fontWeight="semibold"
            as="button"
            onClick={onClick}
            letterSpacing="0.5px"
        >
            {text}
        </Box>
    )
}
