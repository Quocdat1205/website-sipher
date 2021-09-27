// * DESCRIPTION:

import { Flex, SimpleGrid } from "@chakra-ui/layout"
import { chakra } from "@chakra-ui/system"
import { TextContainer, ViewContainer, BackgroundContainer, Paragraph } from "@components/shared"
import { factionsContent } from "@constant/content/why"
import FactionCard from "./FactionCard"

interface FactionsProps {}

const Factions = ({}: FactionsProps) => {
    return (
        <BackgroundContainer>
            <ViewContainer label="Factions">
                <Flex direction="column" align="center">
                    <TextContainer headline={<chakra.span> Factions</chakra.span>}>
                        {factionsContent.main.map(paragraph => (
                            <Paragraph key={paragraph}>{paragraph}</Paragraph>
                        ))}
                        <SimpleGrid
                            columns={3}
                            spacing={8}
                            sx={{
                                "@media (max-width: 480px)": {
                                    gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
                                },
                            }}
                        >
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
    )
}

export default Factions
