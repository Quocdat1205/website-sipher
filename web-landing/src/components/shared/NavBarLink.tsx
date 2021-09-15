// * DESCRIPTION:

import { Box } from "@chakra-ui/layout"
import { Image, Text } from "@chakra-ui/react"
import Link from "next/link"
interface NavBarLinkProps {
    onClick?: () => void
    active?: boolean
    text: string
    href: string
}

export const NavBarLink = ({ onClick, text, active, href }: NavBarLinkProps) => {
    return (
        <Box onClick={onClick} color="white" pos="relative" minW="6rem" cursor="pointer">
            <Text variant="unstyled" fontWeight="bold" fontSize="md" w="full" textAlign="center">
                <Link href={href}>{text}</Link>
            </Text>
            {active && (
                <Image src="/images/pc/menu/Selected.png" w="6rem" h="0.4rem" pos="absolute" bottom={"-0.25rem"} />
            )}
        </Box>
    )
}
