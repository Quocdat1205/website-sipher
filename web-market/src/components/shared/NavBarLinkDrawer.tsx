// * DESCRIPTION:

import React from "react"
import { Flex, FlexProps, Text } from "@chakra-ui/react"
import { useRouter } from "next/dist/client/router"
interface NavBarLinkProps extends FlexProps {
    onClick?: () => void
    active?: boolean
    text: string
    href: string
}
// hehe
export const NavBarLinkDrawer = ({ onClick, text, active, href, ...rest }: NavBarLinkProps) => {
    const router = useRouter()
    return (
        <Flex onClick={onClick} color="white" pos="relative" cursor="pointer" px={2} justify="center" {...rest}>
            <Text
                fontWeight="bold"
                size="small"
                textAlign="center"
                isTruncated
                onClick={() => router.push(href)}
                textTransform="uppercase"
                letterSpacing="3px"
                color={active ? "#FF710B" : "white"}
                px={2}
                py={1}
                bgGradient={active ? "linear(to-t, whiteAlpha.100, transparent)" : ""}
                borderBottom="2px"
                borderColor={active ? "main.orange" : "transparent"}
            >
                {text}
            </Text>
        </Flex>
    )
}
