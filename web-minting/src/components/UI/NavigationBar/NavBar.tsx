// * DESCRIPTION:
import { BaseNavigationBar } from "@sipher/web-components"
import AccountAddress from "./AccountAddress"
import TotalSupplyNFTs from "./TotalSupplyNFTs"
import useWalletContext from "@hooks/useWalletContext"

interface NavBarProps {}

export const navMenus = [
	{ id: "Private Sale", path: "/private-minting" },
	{ id: "Public Sale", path: "/public-minting" },
	{ id: "Inventory", path: "/inventory" },
]

export const NavBar = ({}: NavBarProps) => {
	const { metaState } = useWalletContext()

	return (
		<BaseNavigationBar
			logoPath="/images/mainlogo.svg"
			menus={navMenus.filter((item) => item.id !== "Private Sale" || metaState.isWhitelisted.proof.length > 0)}
		>
			<TotalSupplyNFTs />
			<AccountAddress />
		</BaseNavigationBar>
	)
}
