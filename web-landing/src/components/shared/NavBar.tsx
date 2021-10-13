// * DESCRIPTION:

import { Grid, Flex } from "@chakra-ui/react"
import { GiHamburgerMenu } from "react-icons/gi"
import MenuDrawer from "./MenuDrawer"
import { useStoreActions, useStoreState } from "@store"
import { useRouter } from "next/router"
import { BaseNavigationBar } from "."
import MenuChild from "./MenuChild"
import { IoMdClose } from "react-icons/io"
interface NavBarProps {
    isChildMenu?: boolean
}

export const navMenus = [
    { id: "Home", path: "/" },
    { id: "About Us", path: "/about-us/vision-and-roadmap" },
    { id: "World Of Sipher", path: "/world-of-sipher" },
    { id: "News", path: "/news" },
    { id: "NFT", path: "/nft" },
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
        <Flex flexDir="column" position="fixed" zIndex="tooltip" w="full">
            <BaseNavigationBar logoPath="/images/mainlogo.svg" menus={navMenus} onLogoClick={() => router.push("/")}>
                <Grid
                    rounded="full"
                    color="white"
                    px={0}
                    placeItems="center"
                    onClick={() => setSideBarOn(!setBarOn)}
                    display="none"
                    sx={{
                        "@media (max-width: 960px)": {
                            display: "grid",
                        },
                    }}
                >
                    {setBarOn ? <IoMdClose size="2rem" /> : <GiHamburgerMenu size="2rem" />}
                </Grid>
                <MenuDrawer />
            </BaseNavigationBar>
            {isChildMenu && <MenuChild menus={menuChild} />}
        </Flex>
    )
}
