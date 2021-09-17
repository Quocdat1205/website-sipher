// * DESCRIPTION:

import { Grid, Flex, HStack, Img } from "@chakra-ui/react"
import { NavBarLink } from "."
import { GiHamburgerMenu } from "react-icons/gi"
import MenuDrawer from "./MenuDrawer"
import { useStoreActions } from "@store"
import { useRouter } from "next/router"
interface NavBarProps {}

export const navMenus = [
    { id: "Home", path: "/" },
    { id: "Why Sipher", path: "/why-sipher/the-world" },
    { id: "Sales", path: "/sales" },
    { id: "Roadmap & Team", path: "/roadmap-and-team" },
    { id: "Laboratory", path: "/laboratory" },
    { id: "FAQ & Social", path: "/faq-and-social" },
]

export const NavBar = ({}: NavBarProps) => {
    const setSideBarOn = useStoreActions(action => action.setSidebarOn)
    const router = useRouter()
    return (
        <Flex px={4} py={4} bg="black" align="center" justify="space-between" overflow="hidden">
            <Flex mr="4" w={["auto", "auto", "18rem"]} flexShrink={0} align="center" onClick={() => router.push("/")}>
                <Img src="/images/general/logo_pc.png" h={["1.5rem", "2rem", "2.5rem"]} mx={[0, 0, "auto"]} />
            </Flex>
            <HStack
                spacing={[2, 2, 2, 4]}
                flex={3}
                justify="space-evenly"
                sx={{
                    "@media (max-width: 960px)": {
                        display: "none",
                    },
                }}
            >
                {navMenus.map(menu => (
                    <NavBarLink
                        key={menu.id}
                        text={menu.id}
                        href={menu.path}
                        active={router.pathname.split("/")[1] === menu.path.split("/")[1]}
                    />
                ))}
            </HStack>
            <Grid
                rounded="full"
                color="main.darkRed"
                px={0}
                placeItems="center"
                onClick={() => setSideBarOn(true)}
                display="none"
                sx={{
                    "@media (max-width: 960px)": {
                        display: "grid",
                    },
                }}
            >
                <GiHamburgerMenu size="2rem" />
            </Grid>
            <MenuDrawer />
        </Flex>
    )
}
