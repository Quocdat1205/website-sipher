// * DESCRIPTION:

import React from "react"
import { Flex, HStack, Img } from "@chakra-ui/react"
import { useRouter } from "next/router"
import NavBarLink from "./NavBarLink"

interface BaseNavigationBarProps {
    menus: Record<"id" | "path", string>[]
    logoPath: string
    onLogoClick?: () => void
    children: React.ReactNode
}

const BaseNavigationBar = ({ menus, logoPath, onLogoClick, children }: BaseNavigationBarProps) => {
    const router = useRouter()
    return (
        <Flex px={4} py={4} bg="blackAlpha.900" align="center" justify="space-between" overflow="visible">
            <Flex mr="2" flexShrink={0} align="center" onClick={onLogoClick} cursor="pointer">
                <Img src={logoPath} h={["1.5rem", "2rem"]} alt="sipher-logo" />
            </Flex>
            <HStack
                // spacing={[2, 2, 2, 4]}
                flex={1}
                justify="center"
                sx={{
                    "@media (max-width: 960px)": {
                        display: "none",
                    },
                }}
            >
                {menus.map(menu => (
                    <NavBarLink
                        key={menu.id}
                        text={menu.id}
                        href={menu.path}
                        active={router.pathname.split("/")[1] === "neko" || router.pathname.split("/")[1] === "inu"}
                    />
                ))}
            </HStack>
            {children}
        </Flex>
    )
}
export default BaseNavigationBar
