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
    const isSideBarOn = useStoreState(state => state.sidebarOn)

    return (
        <HStack
            spacing={4}
            display={isSideBarOn ? "none" : "flex"}
            justify="center"
            px={4}
            py={4}
            bg="blackAlpha.700"
            overflowX="auto"
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
