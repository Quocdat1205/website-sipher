// * DESCRIPTION:

import { Grid } from "@chakra-ui/react"
import { GiHamburgerMenu } from "react-icons/gi"
import MenuDrawer from "./MenuDrawer"
import { useStoreActions } from "@store"
import { useRouter } from "next/router"
import { GradientButton } from "@sipher/web-components"
import { BaseNavigationBar } from "."
interface NavBarProps {}

export const navMenus = [
	{ id: "Home", path: "/" },
	{ id: "About Us", path: "/about-us/vision-and-roadmap" },
	{ id: "World Of Sipher", path: "/world-of-sipher" },
	{ id: "News", path: "/news" },
	{ id: "NFT", path: "/nft" },
]

export const NavBar = ({}: NavBarProps) => {
	const setSideBarOn = useStoreActions((action) => action.setSidebarOn)
	const router = useRouter()
	return (
		<BaseNavigationBar
			logoPath="/images/mainlogo.svg"
			menus={navMenus}
			onLogoClick={() => router.push("/")}
			position="fixed"
			zIndex="sticky"
		>
			<GradientButton
				text="Join Our Discord Community"
				as="a"
				href="https://discord.com/invite/dRqdSxUSmd"
				rounded="full"
				w="fit-content"
				fontSize="xs"
				px={4}
				py={2}
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
	)
}
