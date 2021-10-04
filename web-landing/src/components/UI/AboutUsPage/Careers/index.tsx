// * DESCRIPTION:

import { Flex } from "@chakra-ui/layout"
import { ViewContainer, BackgroundContainer } from "@components/shared"

interface CareesProps {}

const Careers = ({}: CareesProps) => {
	return (
		<BackgroundContainer>
			<ViewContainer label="Carees">
				<Flex direction="column" align="center">
					Carees
				</Flex>
			</ViewContainer>
		</BackgroundContainer>
	)
}

export default Careers
