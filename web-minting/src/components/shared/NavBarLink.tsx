// * DESCRIPTION:

import React from "react"
import { Flex, FlexProps } from "@chakra-ui/react"
import { MyTextProps } from "@sipher/web-components"
import { Typo } from "./Typo"
import { useRouter } from "next/router"
interface NavBarLinkProps extends FlexProps {
    isActive?: boolean
    text: string
    href: string
    size?: MyTextProps["size"]
    lastChild?: boolean
}

export const NavBarLink = ({ lastChild = false, size, text, isActive, href, ...rest }: NavBarLinkProps) => {
    const router = useRouter()
    return (
        <Flex
            onClick={() => router.push(href)}
            borderRight={lastChild ? "none" : "1px"}
            borderColor="whiteAlpha.300"
            pr={!lastChild ? 4 : 0}
            pos="relative"
            cursor="pointer"
            justify="center"
            {...rest}
        >
            <Typo.BoldText letterSpacing="1px" fontSize="md" isGradient={isActive} color="whiteAlpha.700">
                {text}
            </Typo.BoldText>
        </Flex>
    )
}

export default NavBarLink
