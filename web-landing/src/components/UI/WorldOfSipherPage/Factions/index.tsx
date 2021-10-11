// * DESCRIPTION:

import { Center } from "@chakra-ui/layout"
import { ViewContainer, BackgroundContainer } from "@components/shared"
import { MyText } from "@sipher/web-components"
import HeaderContent from "../HeaderContent"
import { factionsContent } from "@constant/content/why"

interface FactionsProps {}

const Factions = ({}: FactionsProps) => {
	const mb = [8, 8, 16]

	return (
		<BackgroundContainer>
			<ViewContainer label="Factions" mb={mb} py={20} threshold={0.2}>
				<Center>
					<HeaderContent headline="Factions">
						<MyText>{factionsContent.main}</MyText>
					</HeaderContent>
				</Center>
			</ViewContainer>
		</BackgroundContainer>
	)
}

export default Factions
