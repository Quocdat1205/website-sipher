import { VStack } from "@chakra-ui/react"
import { BackgroundContainer } from "@components/shared"
import RoadMap from "./Roadmap"
import Vision from "./Vision"

const VisionAndRoadMap = () => {
    return (
        <BackgroundContainer>
            <VStack spacing={24} align="center" py={24} w="full">
                <Vision />
                <RoadMap />
            </VStack>
        </BackgroundContainer>
    )
}

export default VisionAndRoadMap
