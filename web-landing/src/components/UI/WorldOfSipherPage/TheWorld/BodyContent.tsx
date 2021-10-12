import { Box } from "@chakra-ui/layout"
import { TextContainer } from "@components/shared"
import { MyHeading, MyText } from "@sipher/web-components"
import { theWorldContent } from "@constant/content/why"
import React from "react"

interface Props {}

const BodyContent = (props: Props) => {
	const py = [6, 8, 10]
	return (
		<TextContainer headline="">
			<Box py={py}>
				<MyHeading>USE OF FUNDS</MyHeading>
				<MyText mt={4}>
					The sales proceeds of these characters will be used by our team to continue crafting up Sipheria the
					game, including the creation of World Block Genesis, the Moonbase Station. See Gameplay for more
					details
				</MyText>
				<MyText>
					There will also be a 2.5% Loyalty fees of all resells of Sipher collected to a dedicated Sipher
					wallet. This fund shall only be used after discussion with all Sipher Holders for the purpose of
					enlarge the Sipher community via grants, funding new projects and initiatives to build Sipheria.
				</MyText>
			</Box>
			<Box py={py}>
				<MyHeading>GAME CHARACTERS</MyHeading>
				<MyText mt={4}>{theWorldContent.gameCharactersAsNfts}</MyText>
			</Box>
			<Box py={py}>
				<MyHeading>TRADING AT BAZAAR</MyHeading>
				<MyText mt={4}>{theWorldContent.tradingAsBazaar}</MyText>
			</Box>
			<Box pt={py}>
				<MyHeading>LAND OWNERSHIP</MyHeading>
				<MyText mt={4}>{theWorldContent.landOwnership}</MyText>
			</Box>
		</TextContainer>
	)
}

export default BodyContent
