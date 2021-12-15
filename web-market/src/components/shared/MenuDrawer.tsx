import { Drawer, DrawerOverlay, DrawerContent, DrawerBody, VStack, Flex } from "@chakra-ui/react"
import { useStoreActions, useStoreState } from "@store"
import { NavBarLinkDrawer, navMenus } from "."
import { useRouter } from "next/dist/client/router"

const MenuDrawer = () => {
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
            <DrawerContent bgSize="contain" bgColor="blackAlpha.900">
                <DrawerBody p={0}>
                    <Flex w="full" align="center" justify="center" h="full">
                        <VStack h="20rem" my="auto" justify="space-between">
                            {navMenus.map(menu => (
                                <NavBarLinkDrawer
                                    key={menu.id}
                                    href={menu.path}
                                    text={menu.id}
                                    active={router.pathname.split("/")[1] === menu.path.split("/")[1]}
                                    onClick={() => setIsSideBarOn(false)}
                                    w="full"
                                />
                            ))}
                        </VStack>
                    </Flex>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}

export default MenuDrawer
