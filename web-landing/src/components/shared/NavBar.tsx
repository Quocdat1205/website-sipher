// * DESCRIPTION:

import { Grid } from "@chakra-ui/react"
import { GiHamburgerMenu } from "react-icons/gi"
import MenuDrawer from "./MenuDrawer"
import { useStoreActions } from "@store"
import { useRouter } from "next/router"
import { GradientButton, BaseNavigationBar } from "@sipher/web-components"
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
        <BaseNavigationBar logoPath="/images/mainlogo.svg" menus={navMenus} onLogoClick={() => router.push("/")}>
            <GradientButton
                text="Join Our Discord Community"
                as="a"
                href="https://discord.com/invite/dRqdSxUSmd"
                rounded="full"
                w="fit-content"
                fontSize="xs"
                px={4}
                sx={{
                    "@media (max-width: 1280px)": {
                        display: "none",
                    },
                }}
            />
            <Grid
                rounded="full"
                color="main.orange"
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
        </BaseNavigationBar>
        // <Flex px={4} py={4} bg="black" align="center" justify="space-between" overflow="hidden">
        //     <Flex mr="2" flexShrink={0} align="center" onClick={() => router.push("/")} cursor="pointer">
        //         <Img src="/images/mainlogo.png" h={["1.5rem", "2rem", "2.5rem"]} alt="sipher-logo" />
        //     </Flex>
        //     <HStack
        //         spacing={[2, 2, 2, 4]}
        //         flex={1}
        //         justify="center"
        //         sx={{
        //             "@media (max-width: 960px)": {
        //                 display: "none",
        //             },
        //         }}
        //         mr={2}
        //     >
        //         {navMenus.map(menu => (
        //             <NavBarLink
        //                 key={menu.id}
        //                 text={menu.id}
        //                 href={menu.path}
        //                 active={router.pathname.split("/")[1] === menu.path.split("/")[1]}
        //             />
        //         ))}
        //     </HStack>
        //     <GradientButton
        //         text="Join Our Discord Community"
        //         as="a"
        //         href="https://discord.com/invite/dRqdSxUSmd"
        //         rounded="full"
        //         w="fit-content"
        //         fontSize="xs"
        //         px={4}
        //         sx={{
        //             "@media (max-width: 1280px)": {
        //                 display: "none",
        //             },
        //         }}
        //     />
        //     <Grid
        //         rounded="full"
        //         color="main.orange"
        //         px={0}
        //         placeItems="center"
        //         onClick={() => setSideBarOn(true)}
        //         display="none"
        //         sx={{
        //             "@media (max-width: 960px)": {
        //                 display: "grid",
        //             },
        //         }}
        //     >
        //         <GiHamburgerMenu size="2rem" />
        //     </Grid>
        //     <MenuDrawer />
        // </Flex>
    )
}
