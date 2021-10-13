// * DESCRIPTION:

import { Flex, Box } from "@chakra-ui/react"
import HeaderBackground from "@components/shared/HeaderBackground"
import { useStoreState } from "@store"
import React from "react"
import NotFoundUI from "../404"
import Blockchain from "./Blockchain"
import Factions from "./Factions"
import Gameplay from "./Gameplay"
import TheWorld from "./TheWorld"

interface WorldOfSipherUIProps {}

const WorldOfSipherUI = ({}: WorldOfSipherUIProps) => {
	const worldSipherPage = useStoreState((state) => state.worldSipherPage)

	return (
		<Flex flex={1} direction="column">
			<HeaderBackground title="WORLD OF SIPHER" description="DONEC VIVERRA, METUS EU CONDIMENTUM" />
			<Box flex={1} w="100%">
				{worldSipherPage === "theworld" ? (
					<TheWorld />
				) : worldSipherPage === "gameplay" ? (
					<Gameplay />
				) : worldSipherPage === "factions" ? (
					<Factions />
				) : worldSipherPage === "blockchain" ? (
					<Blockchain />
				) : (
					<NotFoundUI />
				)}
			</Box>
		</Flex>
	)
}

export default WorldOfSipherUI
