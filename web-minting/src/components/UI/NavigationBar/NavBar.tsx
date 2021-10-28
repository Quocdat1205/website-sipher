// * DESCRIPTION:
import { BaseNavigationBar } from "@sipher/web-components"
import AccountAddress from "./AccountAddress"
import useWalletContext from "@hooks/useWalletContext"
import { Flex } from "@chakra-ui/react"
import ChildMenu from "@components/shared/ChildMenu"

interface NavBarProps {
    isInventoryMenu?: boolean
}

export const navMenus = [
    { id: "Public Sale", path: "/public-sale" },
    { id: "Private Sale", path: "/private-sale" },
    { id: "Free Minting", path: "/free-minting" },
    { id: "Inventory", path: "/inventory/neko" },
]

export const inventoryMenus = [
    { id: "INU", path: "/inventory/inu" },
    { id: "NEKO", path: "/inventory/neko" },
]

export const NavBar = ({ isInventoryMenu }: NavBarProps) => {
    const { states } = useWalletContext()

    return (
        <Flex direction="column" pos="fixed" w="full" zIndex="popover">
            <BaseNavigationBar
                logoPath="/images/mainlogo.svg"
                menus={navMenus.filter(
                    item =>
                        item.id === "Public Sale" ||
                        item.id === "Inventory" ||
                        (item.id === "Private Sale" && states.whitelistInfo.privateCap > 0) ||
                        (item.id === "Free Minting" && states.whitelistInfo.freeMintCap > 0)
                )}
            >
                <AccountAddress />
            </BaseNavigationBar>
            {isInventoryMenu && <ChildMenu menus={inventoryMenus} />}
        </Flex>
    )
}
