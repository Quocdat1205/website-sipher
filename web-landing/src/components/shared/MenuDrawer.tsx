// * DESCRIPTION:

import { Drawer, DrawerOverlay, DrawerContent, DrawerBody } from "@chakra-ui/react"
import { useStoreActions, useStoreState } from "@store"
import React from "react"
import { BaseSideBar, NavButton, navMenus } from "."
import { useRouter } from "next/dist/client/router"
import { textToPath } from "src/utils"
interface MenuDrawerProps {}

const MenuDrawer = ({}: MenuDrawerProps) => {
    const isSideBarOn = useStoreState(state => state.sidebarOn)
    const setIsSideBarOn = useStoreActions(action => action.setSidebarOn)
    const router = useRouter()
    const navigate = (path: string) => {
        setIsSideBarOn(false)
        router.push(path)
    }
    return (
        <Drawer
            isOpen={isSideBarOn}
            placement="right"
            onClose={() => setIsSideBarOn(false)}
            initialFocusRef={undefined}
        >
            <DrawerOverlay />
            <DrawerContent bgImage="/images/pc/background.jpg" bgSize="100%">
                <DrawerBody p={0}>
                    <BaseSideBar inDrawer>
                        {navMenus.map(menu => (
                            <NavButton
                                key={menu.id}
                                text={menu.id}
                                onClick={() => navigate(menu.path)}
                                active={router.pathname.split("/")[1] === menu.path.split("/")[1]}
                            />
                        ))}
                    </BaseSideBar>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}

export default MenuDrawer
