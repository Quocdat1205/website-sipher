import { HStack } from "@chakra-ui/react"
import { NavBarLink } from "."
import { useRouter } from "next/router"
import React from "react"
import { useStoreState } from "@store"

interface ChildMenuProps {
    menus: Record<"id" | "path", string>[]
}

const ChildMenu = ({ menus }: ChildMenuProps) => {
    const router = useRouter()
    const sidebarOn = useStoreState(s => s.sidebarOn)
    return (
        <HStack
            spacing={4}
            justify="center"
            px={4}
            py={4}
            bg="blackAlpha.700"
            overflowX="auto"
            className="childmenu"
            display={sidebarOn ? "none" : "flex"}
        >
            {menus.map((menu, index) => (
                <NavBarLink
                    lastChild={index === menus.length - 1}
                    key={menu.id}
                    text={menu.id}
                    href={menu.path}
                    isChild
                    active={router.pathname.split("/")[2] === menu.path.split("/")[2]}
                />
            ))}
        </HStack>
    )
}
export default ChildMenu
