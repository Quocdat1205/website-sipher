// * DESCRIPTION:

import { Drawer, DrawerOverlay, DrawerContent, DrawerBody } from "@chakra-ui/react"
import { useStoreActions, useStoreState } from "@store"
import React from "react"
import { BaseSideBar, NavBarLink, navMenus } from "."
import { useRouter } from "next/dist/client/router"
interface MenuDrawerProps {}

const MenuDrawer = ({}: MenuDrawerProps) => {
    const isSideBarOn = useStoreState(state => state.sidebarOn)
    const setIsSideBarOn = useStoreActions(action => action.setSidebarOn)
    const router = useRouter()
    return (
        <Drawer
            isOpen={isSideBarOn}
            size="full"
            placement="right"
            onClose={() => setIsSideBarOn(false)}
            initialFocusRef={undefined}
        >
            <DrawerOverlay />
            <DrawerContent
                // bgImage="/images/pc/home/homenew2.png"
                bgSize="contain"
                bgColor="blackAlpha.900"
                // bgGradient="linear(to-b, bgGradient.orange)"
            >
                <DrawerBody p={0}>
                    <BaseSideBar inDrawer>
                        {navMenus.map(menu => (
                            <NavBarLink
                                key={menu.id}
                                href={menu.path}
                                text={menu.id}
                                active={router.pathname.split("/")[1] === menu.path.split("/")[1]}
                                onClick={() => setIsSideBarOn(false)}
                            />
                        ))}
                    </BaseSideBar>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}

export default MenuDrawer
