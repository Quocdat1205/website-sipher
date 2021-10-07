// * DESCRIPTION:

import { Center } from "@chakra-ui/layout"
import { ViewContainer, BackgroundContainer } from "@components/shared"
import { MyText } from "@sipher/web-components"
import HeaderContent from "../HeaderContent"

interface GameplayProps {}

const Gameplay = ({}: GameplayProps) => {
	const mb = [8, 8, 16]

	return (
		<BackgroundContainer>
			<ViewContainer label="Gameplay" mb={mb} py={20} threshold={0.2}>
				<Center>
					<HeaderContent headline="Gameplay">
						<MyText>
							Our smart contract address is carefully coded based on the standards of ERC-721 to allow for
							safety and digital fungible and non-fungible assets functionalities. This will allow for
							longevity of our project, our characters and our items, growing together with Sipheria.
						</MyText>
					</HeaderContent>
				</Center>
			</ViewContainer>
		</BackgroundContainer>
	)
}

export default Gameplay
