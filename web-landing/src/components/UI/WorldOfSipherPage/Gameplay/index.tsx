// * DESCRIPTION:

import { Center } from "@chakra-ui/layout"
import { ViewContainer, BackgroundContainer } from "@components/shared"
import { MyText } from "@sipher/web-components"
import HeaderContent from "../HeaderContent"
import { gameplayContent } from "@constant/content/why"
import BodyContent from "./BodyContent"

interface GameplayProps {}

const Gameplay = ({}: GameplayProps) => {
	const mb = [8, 8, 16]

	return (
		<BackgroundContainer>
			<ViewContainer label="Gameplay" mb={mb} py={20} threshold={0.2}>
				<Center>
					<HeaderContent srcImg="/images/pc/why/gameplay1.png" headline="Gameplay">
						<MyText>{gameplayContent.gameCategory}</MyText>
					</HeaderContent>
				</Center>
				<Center pt={10}>
					<BodyContent />
				</Center>
			</ViewContainer>
		</BackgroundContainer>
	)
}

export default Gameplay
