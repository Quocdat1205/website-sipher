// * DESCRIPTION:

import { Flex } from "@chakra-ui/layout"
import { ViewContainer, BackgroundContainer } from "@components/shared"

interface TeamAndCultureProps {}

const TeamAndCulture = ({}: TeamAndCultureProps) => {
	return (
		<BackgroundContainer>
			<ViewContainer label="OUR CULTURE">
				<Flex direction="column" align="center">
					Our Culture
				</Flex>
			</ViewContainer>
		</BackgroundContainer>
	)
}

export default TeamAndCulture
