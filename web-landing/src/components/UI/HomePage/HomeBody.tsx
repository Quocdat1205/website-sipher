// * DESCRIPTION:

import { Grid, Flex, Heading, chakra, Img } from "@chakra-ui/react"
import {
    TextContainer,
    ViewContainer,
    MotionContainer,
    SignUpButton,
    SpecialButton,
    ResponsiveImg,
    MyText,
    Paragraph,
    BackgroundContainer,
} from "@components/shared"
import IntroductionVideo from "./IntroductionVideo"
import homeContent from "@constant/content/home"
interface HomeBodyProps {
    setSelectedAnchor: (newAnchor: string) => void
}

const HomeBody = ({ setSelectedAnchor }: HomeBodyProps) => {
    return (
        <MotionContainer>
            <BackgroundContainer
                sx={{
                    backgroundImage: `url("/images/pc/home/Background.png"), url("/images/pc/background.jpg")`,
                    backgroundRepeat: "no-repeat, repeat",
                    "@media (max-width: 960px)": {
                        backgroundImage: "/images/pc/background.jpg",
                        backgroundRepeat: "repeat",
                    },
                }}
            >
                <ViewContainer onView={setSelectedAnchor} label="Home" mb={[14, 14, 28]}>
                    <Grid h="100%" placeItems="center" py={"12rem"}>
                        <Flex direction="column" align="center">
                            <Img src="/images/pc/home/logohome.png" maxH="4rem" alt="sipher-logo" />
                            <Heading color="whiteAlpha.900" fontWeight="thin">
                                SOLD OUT
                            </Heading>
                            <MyText textAlign="center">Thanks to all of our early adopters and our community</MyText>
                            <MyText textAlign="center">Sipher Inus are now available on OpenSea</MyText>
                            <SpecialButton
                                as="a"
                                rounded="full"
                                text="BUY SIPHER ON OPENSEA"
                                w="fit-content"
                                px={[8, 8, 16]}
                                py={[3, 3, 4]}
                                fontSize="md"
                                mt={4}
                                href="https://opensea.io/collection/sipheriansurge"
                            />
                        </Flex>
                    </Grid>
                </ViewContainer>
                <ViewContainer onView={setSelectedAnchor} label="Sipheria The Universe" mb={[14, 14, 28]}>
                    <Flex justify="center" py="5rem">
                        <IntroductionVideo />
                    </Flex>
                    <Flex direction="column" align="center">
                        <TextContainer
                            headline={
                                <chakra.span>
                                    Sipheria <chakra.span color="main.darkRed">The Universe</chakra.span>
                                </chakra.span>
                            }
                        >
                            {homeContent.sipheriaTheUnivere.map(paragraph => (
                                <Paragraph key={paragraph}>{paragraph}</Paragraph>
                            ))}
                        </TextContainer>
                        <SignUpButton />
                    </Flex>
                </ViewContainer>
                <ViewContainer onView={setSelectedAnchor} label="First Fleet Sipherian Surge" mb={[14, 14, 28]}>
                    <Flex direction="column" align="center">
                        <TextContainer
                            mb={4}
                            headline={
                                <chakra.span>
                                    First Fleet <chakra.span color="main.darkRed">Sipherian Surge</chakra.span>
                                </chakra.span>
                            }
                        >
                            {homeContent.firstFleetSipherianSurge.map(paragraph => (
                                <Paragraph key={paragraph}>{paragraph}</Paragraph>
                            ))}
                        </TextContainer>
                        <ResponsiveImg
                            src="/images/pc/home/group_sipher.png"
                            alt="sipher-first-fleet-sipherian-surge"
                        />
                        <SignUpButton />
                    </Flex>
                </ViewContainer>
                <ViewContainer
                    onView={setSelectedAnchor}
                    label="Game Characters As NFTs"
                    mb={[14, 14, 28]}
                    threshold={0.2}
                >
                    <Flex direction="column" align="center">
                        <TextContainer
                            mb={4}
                            headline={
                                <chakra.span>
                                    Game Characters <chakra.span color="main.darkRed">As Nfts</chakra.span>
                                </chakra.span>
                            }
                        >
                            <Paragraph>{homeContent.gameCharactersAsNfts[0]}</Paragraph>
                            <Flex w="full" justify="center">
                                <ResponsiveImg
                                    src="/images/pc/home/sipher6.png"
                                    alt="sipher-game-characters-as-nfts-1"
                                />
                            </Flex>
                            <Paragraph>{homeContent.gameCharactersAsNfts[1]}</Paragraph>
                            <Flex w="full" justify="center">
                                <ResponsiveImg src="/images/pc/home/home3.png" alt="sipher-game-characters-as-nfts-2" />
                            </Flex>
                            <Paragraph>{homeContent.gameCharactersAsNfts[2]}</Paragraph>
                            <Flex w="full" justify="center">
                                <ResponsiveImg src="/images/pc/home/home4.png" alt="sipher-game-characters-as-nfts-2" />
                            </Flex>
                        </TextContainer>
                        <SignUpButton />
                    </Flex>
                </ViewContainer>
            </BackgroundContainer>
        </MotionContainer>
    )
}

export default HomeBody
