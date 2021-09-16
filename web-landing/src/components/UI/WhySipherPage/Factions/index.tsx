// * DESCRIPTION:

import { Flex, SimpleGrid } from "@chakra-ui/layout"
import { chakra } from "@chakra-ui/system"
import { MotionContainer, TextContainer, ViewContainer, BackgroundContainer, Paragraph } from "@components/shared"
import { factionsContent } from "@constant/content/why"
import useDevice from "@hooks/useDevice"
import useWhySipherPageContext from "../useWhySipherPage"
import FactionCard from "./FactionCard"

interface FactionsProps {}

const Factions = ({}: FactionsProps) => {
    const setSelectedAnchor = useWhySipherPageContext()
    const device = useDevice()
    return (
        <MotionContainer>
            <BackgroundContainer>
                <ViewContainer onView={setSelectedAnchor} label="Factions" mb={[14, 14, 28]}>
                    <Flex direction="column" align="center">
                        <TextContainer headline={<chakra.span color="main.darkRed"> Factions</chakra.span>}>
                            {factionsContent.main.map(paragraph => (
                                <Paragraph key={paragraph}>{paragraph}</Paragraph>
                            ))}
                            <SimpleGrid columns={device === "phone" ? 1 : 3} spacing={4}>
                                <FactionCard
                                    headline="Maximalist Templars"
                                    image="/images/pc/why/faction1.png"
                                    content={factionsContent.maximalistTemplars[0]}
                                />
                                <FactionCard
                                    headline="Centurion Scholars"
                                    image="/images/pc/why/faction2.png"
                                    content={factionsContent.centurionScholars[0]}
                                />
                                <FactionCard
                                    headline="Maximalist Templars"
                                    image="/images/pc/why/faction3.png"
                                    content={factionsContent.shadeBrotherhood[0]}
                                />
                            </SimpleGrid>
                        </TextContainer>
                    </Flex>
                </ViewContainer>
            </BackgroundContainer>
        </MotionContainer>
    )
}

export default Factions
