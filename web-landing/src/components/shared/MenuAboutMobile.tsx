import { Center, CenterProps, Stack } from "@chakra-ui/react"
import { NavBarLink } from "."
import { useRouter } from "next/router"
import React from "react"

interface MenuAboutMobileProps extends CenterProps {
	menus: Record<"id" | "path", string>[]
}

const MenuAboutMobile = ({ menus, ...rest }: MenuAboutMobileProps) => {
	const router = useRouter()

	return (
		<Center
			sx={{
				"@media (min-width: 960px)": {
					display: "none",
				},
			}}
			px={4}
			py={4}
			bg="rgba(21, 21, 21, 0.8)"
			overflow="visible"
			w="full"
			{...rest}
		>
			<Stack spacing={4} flex={1} justify="center">
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
			</Stack>
		</Center>
	)
}
export default MenuAboutMobile
