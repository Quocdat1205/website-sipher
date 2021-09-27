// * DESCRIPTION:

import { Grid, Flex, HStack, Img } from "@chakra-ui/react"
import { NavBarLink } from "."
import { GiHamburgerMenu } from "react-icons/gi"
import MenuDrawer from "./MenuDrawer"
import { useStoreActions } from "@store"
import { useRouter } from "next/router"
import { GradientButton } from "@sipher/web-components"
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
            <Flex mr="2" flexShrink={0} align="center" onClick={() => router.push("/")} cursor="pointer">
                <Img src="/images/general/logo.png" h={["1.5rem", "2rem", "2.5rem"]} alt="sipher-logo" />
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
                mr={2}
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
            <GradientButton
                text="Join Our Discord Community"
                rounded="full"
                w="fit-content"
                fontSize="xs"
                px={4}
                sx={{
                    "@media (max-width: 960px)": {
                        display: "none",
                    },
                }}
            />
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
