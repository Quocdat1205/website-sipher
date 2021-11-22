// * DESCRIPTION:

import React from "react"
import { Flex, HStack, Img, FlexProps } from "@chakra-ui/react"
import { NavBarLink } from "."
import { useRouter } from "next/router"

interface BaseNavigationBarProps extends FlexProps {
    menus: Record<"id" | "path", string>[]
    logoPath: string
    onLogoClick?: () => void
    children: React.ReactNode
}
// fixed
export const BaseNavigationBar = ({ menus, logoPath, onLogoClick, children, ...rest }: BaseNavigationBarProps) => {
    const router = useRouter()
    return (
        <Flex
            px={4}
            py={4}
            bg="blackAlpha.800"
            align="center"
            justify="space-between"
            overflow="visible"
            w="full"
            {...rest}
        >
            <Flex flexShrink={0} align="center" onClick={onLogoClick} cursor="pointer">
                <Img src={logoPath} h={["1.5rem", "2rem"]} alt="sipher-logo" />
            </Flex>
            <HStack
                mx={6}
                spacing={[6, 6, 6, 8]}
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
                        active={router.pathname.split("/")[1] === menu.path.split("/")[1]}
                    />
                ))}
            </HStack>

            {children}
        </Flex>
    )
}
