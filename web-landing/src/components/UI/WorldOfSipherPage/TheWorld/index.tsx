// * DESCRIPTION:

import { Center } from "@chakra-ui/layout"
import { ViewContainer, BackgroundContainer } from "@components/shared"
import { MyText } from "@sipher/web-components"
import HeaderContent from "../HeaderContent"
import UseOfFunds from "./UseOfFunds"

interface TheWolrdProps {}

const TheWorld = ({}: TheWolrdProps) => {
	const mb = [8, 8, 16]

	return (
		<BackgroundContainer>
			<ViewContainer label="The World" mb={mb} py={20} threshold={0.2}>
				<Center>
					<HeaderContent headline="The World">
						<MyText>
							All player&lsquo; characters, weapons, cosmetic and functional in-game items, resources and
							achievements in Sipheria are represented by non-fungible tokens, known as NFTs. That&lsquo;s
							why you truly own your digital assets in Sipheria. Because of the blockchain, players will
							always own their characters and items without exception.
						</MyText>
					</HeaderContent>
				</Center>
				<Center pt={10}>
					<UseOfFunds />
				</Center>
			</ViewContainer>
		</BackgroundContainer>
	)
}

export default TheWorld
