// * DESCRIPTION:

import { Flex, chakra, SimpleGrid } from "@chakra-ui/react"
import { TextContainer, ViewContainer, MotionContainer, BackgroundContainer } from "@components/shared"
import { roadmapContent, sipherTeamContent } from "@constant/content/roadmapAndTeam"
import useDevice from "@hooks/useDevice"
import MemberCard from "./MemberCard"
import TimelineCard from "./TimelineCard"
interface HomeBodyProps {
    setSelectedAnchor: (newAnchor: string) => void
}

const HomeBody = ({ setSelectedAnchor }: HomeBodyProps) => {
    const device = useDevice()
    return (
        <MotionContainer>
            <BackgroundContainer>
                <ViewContainer onView={setSelectedAnchor} label="Roadmap" mb={[14, 14, 28]}>
                    <Flex direction="column" align="center">
                        <TextContainer
                            headline={
                                <chakra.span>
                                    Sipher <chakra.span color="main.darkRed"> Roadmap</chakra.span>
                                </chakra.span>
                            }
                            maxW="60rem"
                        >
                            <SimpleGrid columns={device === "phone" ? 1 : 3} spacing={8}>
                                {roadmapContent.map(item => (
                                    <TimelineCard key={item.tag} item={item} />
                                ))}
                            </SimpleGrid>
                        </TextContainer>
                    </Flex>
                </ViewContainer>
                <ViewContainer onView={setSelectedAnchor} label="Team" mb={[14, 14, 28]}>
                    <Flex direction="column" align="center">
                        <TextContainer
                            headline={
                                <chakra.span>
                                    Sipher <chakra.span color="main.darkRed"> Team</chakra.span>
                                </chakra.span>
                            }
                            maxW="60rem"
                        >
                            <SimpleGrid minChildWidth={device === "phone" ? "6rem" : "12rem"} spacing={8}>
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
