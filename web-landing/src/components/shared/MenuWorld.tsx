import { Center, CenterProps, SimpleGrid } from "@chakra-ui/react"
import { useStoreActions, useStoreState } from "@store"
import React from "react"
import { CardMenuWorld } from "./CardMenuWorld"

interface MenuWorldProps extends CenterProps {}

export const menuWorld = [
	{ id: "The world", path: "/world-of-sipher#theworld", icon: "/images/icons/theworld.png" },
	{ id: "Gameplay", path: "/world-of-sipher#gameplay", icon: "/images/icons/gameplay.png" },
	{ id: "Factions", path: "/world-of-sipher#factions", icon: "/images/icons/factions.png" },
	{ id: "Blockchain", path: "/world-of-sipher#blockchain", icon: "/images/icons/blockchain.png" },
]

const MenuWorld = ({ ...rest }: MenuWorldProps) => {
	const setWorldSipherPage = useStoreActions((action) => action.setWorldSipherPage)
	const worldSipherPage = useStoreState((state) => state.worldSipherPage)

	return (
		<Center
			order={[1, 2]}
			pt={4}
			pb={[4, 0]}
			bg="url(/images/pc/home/homenew2.png)"
			overflow="visible"
			w="full"
			{...rest}
		>
			<SimpleGrid columns={[1, 4]} flex={1} spacing={4}>
				{menuWorld.map((menu, index) => (
					<CardMenuWorld
						lastChild={index === menuWorld.length - 1}
						key={menu.id}
						text={menu.id}
						setWorldSipherPage={setWorldSipherPage}
						href={menu.path}
						icon={menu.icon}
						active={worldSipherPage === menu.path.split("#")[1]}
					/>
				))}
			</SimpleGrid>
		</Center>
	)
}
export default MenuWorld
