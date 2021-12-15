// * DESCRIPTION:

import { Grid, Flex } from "@chakra-ui/react"
import { GiHamburgerMenu } from "react-icons/gi"
import MenuDrawer from "./MenuDrawer"
import { useStoreActions, useStoreState } from "@store"
import { useRouter } from "next/router"
import { BaseNavigationBar, WalletButton } from "."
import { IoMdClose } from "react-icons/io"
import { useScrollDirection } from "@hooks/useScrollDirection"
import useWalletContext from "@hooks/web3/useWalletContext"

export const navMenus = [{ id: "Home", path: "/" }]

interface NavBarProps {
    isChildMenu?: boolean
    menus?: string
}

export const NavBar = ({ isChildMenu = false, menus = "aboutMenus" }: NavBarProps) => {
    const router = useRouter()

    const isUp = useScrollDirection()

    const sidebarOn = useStoreState(s => s.sidebarOn)

    const setSideBarOn = useStoreActions(action => action.setSidebarOn)

    const { isActive } = useWalletContext()

    return (
        <Flex
            id="navbar"
            flexDir="column"
            position="fixed"
            w="full"
            zIndex="popover"
            transition="transform 0.25s ease-out"
            top={0}
            // top={isUp ? "0" : "-7.2rem"}
            transform={`translateY(${isUp ? "0" : "-100%"})`}
            sx={{
                ".childmenu::-webkit-scrollbar": {
                    display: "none",
                },
            }}
        >
            <BaseNavigationBar logoPath="/images/logonew.svg" menus={navMenus} onLogoClick={() => router.push("/")}>
                <Flex>
                    <WalletButton />
                    <Grid
                        ml={[1, 4]}
                        rounded="full"
                        color="white"
                        px={0}
                        placeItems="center"
                        onClick={() => setSideBarOn(!sidebarOn)}
                        display={"none"}
                        sx={{
                            "@media (max-width: 1200px)": {
                                display: "grid",
                            },
                        }}
                    >
                        {sidebarOn ? <IoMdClose size="2rem" /> : <GiHamburgerMenu size="2rem" />}
                    </Grid>
                    <MenuDrawer />
                </Flex>
            </BaseNavigationBar>
        </Flex>
    )
}
