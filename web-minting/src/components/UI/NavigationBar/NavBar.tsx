// * DESCRIPTION:
import AccountAddress from "./AccountAddress"
import { Flex } from "@chakra-ui/react"
import ChildMenu from "@components/shared/ChildMenu"
import BaseNavigationBar from "./BaseNavigationBar"

interface NavBarProps {
    isInventoryMenu?: boolean
}

export const navMenus = [{ id: "Inventory", path: "/neko" }]

export const inventoryMenus = [
    { id: "INU", path: "/inu" },
    { id: "NEKO", path: "/neko" },
]

export const NavBar = ({ isInventoryMenu }: NavBarProps) => {
    return (
        <Flex direction="column" pos="fixed" w="full" zIndex="popover">
            <BaseNavigationBar logoPath="/images/mainlogo.svg" menus={navMenus}>
                {/* <TotalSupply /> */}
                <AccountAddress />
            </BaseNavigationBar>
            {isInventoryMenu && <ChildMenu menus={inventoryMenus} />}
        </Flex>
    )
}
