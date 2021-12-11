import { VStack } from "@chakra-ui/layout"
import { BackgroundContainer } from "@components/shared"
import OurCulture from "./OurCulture"
import TeamContent from "./TeamContent"

const TeamAndCulture = () => {
    return (
        <BackgroundContainer>
            <VStack align="center" py={24} spacing={24} w="full">
                <OurCulture />
                <TeamContent />
            </VStack>
        </BackgroundContainer>
    )
}

export default TeamAndCulture
