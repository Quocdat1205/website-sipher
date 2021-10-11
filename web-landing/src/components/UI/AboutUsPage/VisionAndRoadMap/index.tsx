// * DESCRIPTION:

import { Flex } from "@chakra-ui/layout"
import { BackgroundContainer } from "@components/shared"
import RoadMap from "./Roadmap"
import Vision from "./Vision"

interface VisionAndRoadMapProps {}

const VisionAndRoadMap = ({}: VisionAndRoadMapProps) => {
    return (
        <BackgroundContainer>
            <Flex direction="column" align="center" px={4} py={24} w="full">
                <Vision />
                <RoadMap />
            </Flex>
        </BackgroundContainer>
    )
}

export default VisionAndRoadMap
