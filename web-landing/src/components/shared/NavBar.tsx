// * DESCRIPTION:

import { Grid, Flex, Box } from "@chakra-ui/react"
import { GiHamburgerMenu } from "react-icons/gi"
import MenuDrawer from "./MenuDrawer"
import { useStoreActions, useStoreState } from "@store"
import { useRouter } from "next/router"
import { BaseNavigationBar, LinkButton, WalletButton } from "."
import ChildMenu from "./ChildMenu"
import { IoMdClose } from "react-icons/io"
interface NavBarProps {
    isChildMenu?: boolean
}

export const navMenus = [
    { id: "Home", path: "/" },
    { id: "About Us", path: "/about-us/vision-and-roadmap" },
    { id: "World Of Sipher", path: "/world-of-sipher" },
    { id: "News", path: "/news" },
    { id: "Token Sale", path: "/token-sale" },
    // { id: "Swap", path: "/swap" },
    // { id: "Stake", path: "/stake" },
]

export const menuChild = [
    { id: "Vision & Roadmap", path: "/about-us/vision-and-roadmap" },
    { id: "Team & Culture", path: "/about-us/team-and-culture" },
    { id: "Careers", path: "/about-us/careers" },
]

export const NavBar = ({ isChildMenu = false }: NavBarProps) => {
    const setBarOn = useStoreState(s => s.sidebarOn)
    const setSideBarOn = useStoreActions(action => action.setSidebarOn)
    const router = useRouter()
    return (
        <Flex
            flexDir="column"
            position="fixed"
            w="full"
            zIndex="popover"
            sx={{
                ".childmenu::-webkit-scrollbar": {
                    display: "none",
                },
            }}
        >
            <BaseNavigationBar logoPath="/images/logonew.svg" menus={navMenus} onLogoClick={() => router.push("/")}>
                <Flex>
                    <WalletButton />
                    {/* <Flex
                        sx={{
                            "@media (max-width: 640px)": {
                                display: "none",
                            },
                        }}
                    >
                        <LinkButton text="Join Our Discord Community" href="https://discord.gg/SIPHERxyz" />
                    </Flex> */}
                    <Grid
                        ml={4}
                        rounded="full"
                        color="white"
                        px={0}
                        placeItems="center"
                        onClick={() => setSideBarOn(!setBarOn)}
                        display={"none"}
                        sx={{
                            "@media (max-width: 1200px)": {
                                display: "grid",
                            },
                        }}
                    >
                        {setBarOn ? <IoMdClose size="2rem" /> : <GiHamburgerMenu size="2rem" />}
                    </Grid>
                    <MenuDrawer />
                </Flex>
            </BaseNavigationBar>
            {isChildMenu && <ChildMenu menus={menuChild} />}
        </Flex>
    )
}
