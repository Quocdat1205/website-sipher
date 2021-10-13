// * DESCRIPTION:

import { Center } from "@chakra-ui/layout"
import { ViewContainer } from "@components/shared"
import BodyContent from "./BodyContent"

interface GameplayProps {}

const Gameplay = ({}: GameplayProps) => {
	const mb = [8, 8, 16]

	return (
		<>
			<ViewContainer label="Gameplay" mb={mb} py={20} threshold={0.2}>
				<Center pt={10}>
					<BodyContent />
				</Center>
			</ViewContainer>
		</>
	)
}

export default Gameplay
