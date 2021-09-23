// * DESCRIPTION:

import { Flex, chakra, SimpleGrid } from "@chakra-ui/react"
import { TextContainer, ViewContainer, MotionContainer, BackgroundContainer } from "@components/shared"
import { roadmapContent, sipherTeamContent } from "@constant/content/roadmapAndTeam"
import MemberCard from "./MemberCard"
import TimelineCard from "./TimelineCard"
interface HomeBodyProps {
    setSelectedAnchor: (newAnchor: string) => void
}

const HomeBody = ({ setSelectedAnchor }: HomeBodyProps) => {
    return (
        <MotionContainer>
            <BackgroundContainer>
                <ViewContainer onView={setSelectedAnchor} label="Roadmap" mb={[14, 14, 28]} threshold={0.1}>
                    <Flex direction="column" align="center">
                        <TextContainer headline={<chakra.span>Sipher Roadmap</chakra.span>} maxW="60rem">
                            <SimpleGrid
                                columns={3}
                                spacing={8}
                                sx={{
                                    "@media (max-width: 480px)": {
                                        gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
                                    },
                                }}
                            >
                                {roadmapContent.map(item => (
                                    <TimelineCard key={item.tag} item={item} />
                                ))}
                            </SimpleGrid>
                        </TextContainer>
                    </Flex>
                </ViewContainer>
                <ViewContainer onView={setSelectedAnchor} label="Team" mb={[14, 14, 28]} threshold={0.1}>
                    <Flex direction="column" align="center">
                        <TextContainer headline={<chakra.span>Sipher Team</chakra.span>} maxW="60rem">
                            <SimpleGrid minChildWidth={"16rem"} spacing={8}>
                                {sipherTeamContent.map(item => (
                                    <MemberCard key={item.id} item={item} />
                                ))}
                            </SimpleGrid>
                        </TextContainer>
                    </Flex>
                </ViewContainer>
            </BackgroundContainer>
        </MotionContainer>
    )
}

export default HomeBody
