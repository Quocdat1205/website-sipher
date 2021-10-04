// * DESCRIPTION:

import { Flex } from "@chakra-ui/layout"
import { ViewContainer, BackgroundContainer } from "@components/shared"

interface VisionAndRoadMapProps {}

const VisionAndRoadMap = ({}: VisionAndRoadMapProps) => {
	return (
		<BackgroundContainer>
			<ViewContainer label="VISION">
				<Flex direction="column" align="center">
					VISION
				</Flex>
			</ViewContainer>
		</BackgroundContainer>
	)
}

export default VisionAndRoadMap
