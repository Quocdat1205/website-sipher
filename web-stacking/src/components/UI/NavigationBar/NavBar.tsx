// * DESCRIPTION:
import { Flex } from "@chakra-ui/react"
import BaseNavigationBar from "./BaseNavigationBar"

interface NavBarProps {}

export const navMenus = [
    { id: "Overview", path: "/" },
    { id: "Rewards", path: "/rewards" },
    { id: "Leaderboard", path: "/leaderboard" },
]

export const NavBar = ({}: NavBarProps) => {
    return (
        <Flex maxW="1200px" direction="column" pos="fixed" w="full" zIndex="popover">
            <BaseNavigationBar logoPath="/images/mainlogo.svg" menus={navMenus}></BaseNavigationBar>
        </Flex>
    )
}
