// * DESCRIPTION:

import { Flex, Box, Center } from "@chakra-ui/react"
import HeaderBackground from "@components/shared/HeaderBackground"
import { blockchainContent, factionsContent, gameplayContent, theWorldContent } from "@constant/content/why"
import { MyText } from "@sipher/web-components"
import { useStoreState } from "@store"
import React from "react"
import NotFoundUI from "../404"
import Blockchain from "./Blockchain"
import Factions from "./Factions"
import Gameplay from "./Gameplay"
import HeaderContent from "./HeaderContent"
import TheWorld from "./TheWorld"
import BackgroundContainer from "@components/shared/BackgroundContainer"

interface WorldOfSipherUIProps {}

const WorldOfSipherUI = ({}: WorldOfSipherUIProps) => {
	const worldSipherPage = useStoreState((state) => state.worldSipherPage)
	const py = [8, 8, 16]

	return (
		<Flex flex={1} direction="column">
			<HeaderBackground title="WORLD OF SIPHER" description="DONEC VIVERRA, METUS EU CONDIMENTUM" />
			<Box flex={1} w="100%">
				<BackgroundContainer>
					<Center pt={py}>
						<HeaderContent
							srcImg={`/images/pc/${
								worldSipherPage === "theworld"
									? "why/why1.png"
									: worldSipherPage === "gameplay"
									? "why/gameplay1.png"
									: worldSipherPage === "factions"
									? "nft/banner.png"
									: "news.png"
							}`}
							headline={
								worldSipherPage === "theworld"
									? "The world"
									: worldSipherPage === "gameplay"
									? "Gameplay"
									: worldSipherPage === "factions"
									? "Factions"
									: "Blockchain"
							}
						>
							<MyText>
								{worldSipherPage === "theworld"
									? theWorldContent.worldBlockCategory
									: worldSipherPage === "gameplay"
									? gameplayContent.gameCategory
									: worldSipherPage === "factions"
									? factionsContent.main
									: blockchainContent.main}
							</MyText>
						</HeaderContent>
					</Center>
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
				</BackgroundContainer>
			</Box>
		</Flex>
	)
}

export default WorldOfSipherUI
