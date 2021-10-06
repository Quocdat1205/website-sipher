import { Center, CenterProps, HStack } from "@chakra-ui/react"
import { NavBarLink } from "."
import { useRouter } from "next/router"
import React from "react"
import data from "./CommunityIcon/IconData"

interface MenuChildProps extends CenterProps {
	menus: Record<"id" | "path", string>[]
	isMobile?: boolean
}

const MenuChild = ({ isMobile = false, menus, ...rest }: MenuChildProps) => {
	const router = useRouter()

	return (
		<Center
			sx={{
				"@media (max-width: 960px)": {
					display: isMobile ? "flex" : "none",
				},
			}}
			px={4}
			py={4}
			bg="rgba(21, 21, 21, 0.8)"
			overflow="visible"
			w="full"
			{...rest}
		>
			<HStack display={["column", "row"]} spacing={4} flex={1} justify="center">
				{menus.map((menu, index) => (
					<NavBarLink
						lastChild={index === menus.length - 1}
						key={menu.id}
						text={menu.id}
						href={menu.path}
						isChild
						active={router.pathname.split("/")[2] === menu.path.split("/")[2]}
					/>
				))}
			</HStack>
		</Center>
	)
}
export default MenuChild
