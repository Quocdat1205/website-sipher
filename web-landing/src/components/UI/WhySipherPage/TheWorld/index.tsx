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
import { theWorldContent } from "@constant/content/why"
import useWhySipherPageContext from "../useWhySipherPage"
interface TheWorldProps {}

const TheWorld = ({}: TheWorldProps) => {
    const setSelectedAnchor = useWhySipherPageContext()

    return (
        <MotionContainer>
            <BackgroundContainer>
                <ViewContainer label="World Block Category" onView={setSelectedAnchor} mb={[14, 14, 28]}>
                    <Flex direction="column" align="center">
                        <TextContainer
                            headline={
                                <chakra.span>
                                    World Block
                                    <chakra.span color="main.darkRed"> Category</chakra.span>
                                </chakra.span>
                            }
                        >
                            {theWorldContent.worldBlockCategory.map(paragraph => (
                                <Paragraph key={paragraph}>{paragraph}</Paragraph>
                            ))}
                            <Paragraph>
                                Learn more about <chakra.span color="main.yellow">World as Blocks</chakra.span>
                            </Paragraph>
                        </TextContainer>
                        <ResponsiveImg src="/images/pc/why/why1.png" />
                    </Flex>
                </ViewContainer>
                <ViewContainer label="Game Characters As Nfts" onView={setSelectedAnchor} mb={[14, 14, 28]}>
                    <Flex direction="column" align="center">
                        <TextContainer
                            headline={
                                <chakra.span>
                                    Game Characters
                                    <chakra.span color="main.darkRed"> As Nfts</chakra.span>
                                </chakra.span>
                            }
                        >
                            <Paragraph>{theWorldContent.gameCharactersAsNfts[0]}</Paragraph>
                            <Paragraph>
                                Learn more about <chakra.span color="main.yellow">Moon Base Station</chakra.span>
                            </Paragraph>
                        </TextContainer>
                        <ResponsiveImg src="/images/pc/why/why2.png" />
                    </Flex>
                </ViewContainer>
                <ViewContainer label="Trading At Bazaar" onView={setSelectedAnchor} mb={[14, 14, 28]}>
                    <Flex direction="column" align="center">
                        <TextContainer
                            headline={
                                <chakra.span>
                                    Trading At
                                    <chakra.span color="main.darkRed"> Bazaar</chakra.span>
                                </chakra.span>
                            }
                        >
                            {theWorldContent.tradingAsBazaar.map(paragraph => (
                                <Paragraph key={paragraph}>{paragraph}</Paragraph>
                            ))}
                        </TextContainer>
                        <ResponsiveImg src="/images/pc/why/why3.png" />
                    </Flex>
                </ViewContainer>
                <ViewContainer label="Land Ownership" onView={setSelectedAnchor} mb={[14, 14, 28]}>
                    <Flex direction="column" align="center">
                        <TextContainer
                            headline={
                                <chakra.span>
                                    Land <chakra.span color="main.darkRed">Ownership</chakra.span>
                                </chakra.span>
                            }
                        >
                            {theWorldContent.landOwnership.map(paragraph => (
                                <Paragraph key={paragraph}>{paragraph}</Paragraph>
                            ))}
                        </TextContainer>
                        <ResponsiveImg src="/images/pc/why/why4.png" />
                        <SignUpButton />
                    </Flex>
                </ViewContainer>
            </BackgroundContainer>
        </MotionContainer>
    )
}

export default TheWorld
