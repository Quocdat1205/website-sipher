import { Center, CenterProps, Flex } from "@chakra-ui/react"
import { useRouter } from "next/router"
import React from "react"
import { CardMenuWorld } from "./CardMenuWorld"

interface MenuWorldProps extends CenterProps {}

export const menuWorld = [
	{ id: "The world", path: "/world-of-sipher/the-world", icon: "/images/icons/theworld.png" },
	{ id: "Gameplay", path: "/world-of-sipher/gameplay", icon: "/images/icons/gameplay.png" },
	{ id: "Factions", path: "/world-of-sipher/factions", icon: "/images/icons/factions.png" },
	{ id: "Blockchain", path: "/world-of-sipher/blockchain", icon: "/images/icons/blockchain.png" },
]

const MenuWorld = ({ ...rest }: MenuWorldProps) => {
	const router = useRouter()

	return (
		<Center px={4} py={4} bg="url(/images/pc/home/homenew2.png)" overflow="visible" w="full" {...rest}>
			<Flex align="center" flexDir={["column", "row"]} flex={1} maxW="35rem" p={4}>
				{menuWorld.map((menu, index) => (
					<CardMenuWorld
						lastChild={index === menuWorld.length - 1}
						key={menu.id}
						text={menu.id}
						href={menu.path}
						icon={menu.icon}
						active={router.pathname.split("/")[2] === menu.path.split("/")[2]}
					/>
				))}
			</Flex>
		</Center>
	)
}
export default MenuWorld
