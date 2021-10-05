// * DESCRIPTION:

import { Center } from "@chakra-ui/layout"
import { ViewContainer, BackgroundContainer } from "@components/shared"
import RoadMap from "./RoadMap"
import Vision from "./Vision"

interface VisionAndRoadMapProps {}

const VisionAndRoadMap = ({}: VisionAndRoadMapProps) => {
	const mb = [8, 8, 16]

	return (
		<BackgroundContainer>
			<ViewContainer label="Vision" mb={mb} py={20} threshold={0.2}>
				<Center>
					<Vision />
				</Center>
			</ViewContainer>
			<ViewContainer label="Roadmap" mb={mb} p={0} threshold={0.2}>
				<Center>
					<RoadMap />
				</Center>
			</ViewContainer>
		</BackgroundContainer>
	)
}

export default VisionAndRoadMap
