// * DESCRIPTION:

import { Flex } from "@chakra-ui/layout"
import { BackgroundContainer } from "@components/shared"
import OurCulture from "./OurCulture"
import TeamContent from "./TeamContent"

interface TeamAndCultureProps {}

const TeamAndCulture = ({}: TeamAndCultureProps) => {
    return (
        <BackgroundContainer>
            <Flex direction="column" align="center" px={4} py={24} w="full">
                <OurCulture />
                <TeamContent />
            </Flex>
        </BackgroundContainer>
    )
}

export default TeamAndCulture
