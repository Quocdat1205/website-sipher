// * DESCRIPTION:

import { chakra, Flex } from "@chakra-ui/react"
import {
    MotionContainer,
    ResponsiveImg,
    SignUpButton,
    TextContainer,
    ViewContainer,
    Paragraph,
    BackgroundContainer,
} from "@components/shared"
import useWhySipherPageContext from "../useWhySipherPage"
import { gameplayContent } from "@constant/content/why"
interface TheWorldProps {}

const TheWorld = ({}: TheWorldProps) => {
    const setSelectedAnchor = useWhySipherPageContext()
    return (
        <MotionContainer>
            <BackgroundContainer>
                <ViewContainer label="Game Category" onView={setSelectedAnchor} mb={[14, 14, 28]}>
                    <Flex direction="column" align="center">
                        <TextContainer headline={<chakra.span>Game Category</chakra.span>}>
                            <Flex justify="center">
                                <ResponsiveImg src="/images/pc/why/gameplay1.png" alt="sipher-gameplay-1" />
                            </Flex>
                            {gameplayContent.gameCategory.map(paragraph => (
                                <Paragraph key={paragraph}>{paragraph}</Paragraph>
                            ))}
                            <Paragraph>
                                Learn more about <chakra.span color="main.yellow">World as Blocks</chakra.span>
                            </Paragraph>
                        </TextContainer>
                    </Flex>
                </ViewContainer>
                <ViewContainer label="Meaningful End-game Content" onView={setSelectedAnchor} mb={[14, 14, 28]}>
                    <Flex direction="column" align="center">
                        <TextContainer headline={<chakra.span>Meaningful End-game Content</chakra.span>}>
                            {gameplayContent.meaningfulEndgameContent.map(paragraph => (
                                <Paragraph key={paragraph}>{paragraph}</Paragraph>
                            ))}
                            <Paragraph>
                                Learn more about <chakra.span color="main.yellow">Gameplay</chakra.span>
                            </Paragraph>
                        </TextContainer>
                        <ResponsiveImg src="/images/pc/why/gameplay2.png" alt="sipher-gameplay-2" />
                    </Flex>
                </ViewContainer>
                <ViewContainer label="Immersive Storyline" onView={setSelectedAnchor} mb={[14, 14, 28]}>
                    <Flex direction="column" align="center">
                        <TextContainer headline={<chakra.span>Immersive Storyline</chakra.span>}>
                            {gameplayContent.immersiveStoryline.map(paragraph => (
                                <Paragraph key={paragraph}>{paragraph}</Paragraph>
                            ))}
                        </TextContainer>
                        <ResponsiveImg src="/images/pc/why/gameplay3.png" alt="sipher-gameplay-3" />
                    </Flex>
                </ViewContainer>
                <ViewContainer label="Classes & Skills" onView={setSelectedAnchor} mb={[14, 14, 28]}>
                    <Flex direction="column" align="center">
                        <TextContainer headline={<chakra.span>{`Class & Skills`}</chakra.span>}>
                            <Flex w="full" justify="center">
                                <ResponsiveImg src="/images/pc/why/gameplay4.png" alt="sipher-gameplay-4" />
                            </Flex>
                            {gameplayContent.classesAndSkills.map(paragraph => (
                                <Paragraph key={paragraph}>{paragraph}</Paragraph>
                            ))}
                            <Paragraph>
                                Learn more about{" "}
                                <chakra.span color="main.yellow">Character Class Abilities</chakra.span>
                            </Paragraph>
                        </TextContainer>
                    </Flex>
                </ViewContainer>
                <ViewContainer label="Expeditions Mechanic" onView={setSelectedAnchor} mb={[14, 14, 28]}>
                    <Flex direction="column" align="center">
                        <TextContainer
                            headline={
                                <chakra.span>
                                    Expeditions
                                    <chakra.span color="main.darkRed"> Mechanic</chakra.span>
                                </chakra.span>
                            }
                        >
                            <Flex w="full" justify="center">
                                <ResponsiveImg src="/images/pc/why/gameplay5.png" alt="sipher-gameplay-5" />
                            </Flex>
                            {gameplayContent.expeditionMechanic.map(paragraph => (
                                <Paragraph key={paragraph}>{paragraph}</Paragraph>
                            ))}
                        </TextContainer>
                        <SignUpButton />
                    </Flex>
                </ViewContainer>
            </BackgroundContainer>
        </MotionContainer>
    )
}

export default TheWorld
