// * DESCRIPTION:

import { Box, Grid, Flex, Image, Heading, Text, chakra } from "@chakra-ui/react"
import { SpecialButton, TextContainer, ViewContainer, MotionContainer } from "@components/shared"
import IntroductionVideo from "./IntroductionVideo"
import homeContent from "@constant/content/home"
interface HomeBodyProps {
    setSelectedAnchor: (newAnchor: string) => void
}

const HomeBody = ({ setSelectedAnchor }: HomeBodyProps) => {
    return (
        <MotionContainer>
            <Box bgImage="/images/pc/home/Background.png" bgSize="cover" minH="100%" overflow="auto" pb={8}>
                <ViewContainer onView={setSelectedAnchor} label="Home" mb={28}>
                    <Grid h="100%" placeItems="center" py="12rem">
                        <Flex direction="column" align="center">
                            <Image src="/images/pc/home/logohome.png" height="6rem" />
                            <Heading color="whiteAlpha.900" fontWeight="thin">
                                SOLD OUT
                            </Heading>
                            <Text>Thanks to all of our early adopters and our community</Text>
                            <Text>Sipher Inus are now available on OpenSea</Text>
                            <SpecialButton
                                rounded="full"
                                text="MINT SIPHER INU WITH 0.1ETH"
                                w="fit-content"
                                px={16}
                                py={4}
                                fontSize="md"
                                mt={4}
                            />
                        </Flex>
                    </Grid>
                </ViewContainer>
                <ViewContainer onView={setSelectedAnchor} label="Sipheria The Universe" mb={28}>
                    <Flex justify="center" px="20rem" py="5rem">
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
                                <Text key={paragraph} fontSize="lg" textAlign="justify" mb={4}>
                                    {paragraph}
                                </Text>
                            ))}
                        </TextContainer>
                        <SpecialButton rounded="full" text="Join Us" w="fit-content" px={16} py={4} />
                    </Flex>
                </ViewContainer>
                <ViewContainer onView={setSelectedAnchor} label="First Fleet Sipherian Surge" mb={28}>
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
                                <Text key={paragraph} fontSize="lg" textAlign="justify" mb={4}>
                                    {paragraph}
                                </Text>
                            ))}
                        </TextContainer>
                        <Image src="/images/pc/home/group_sipher.png" w="32rem" mb={4} />
                        <SpecialButton rounded="full" text="Find Out About Sipher" w="fit-content" px={16} py={4} />
                    </Flex>
                </ViewContainer>
                <ViewContainer onView={setSelectedAnchor} label="Game Character As NFTs" mb={28}>
                    <Flex direction="column" align="center">
                        <TextContainer
                            mb={4}
                            headline={
                                <chakra.span>
                                    Game Characters <chakra.span color="main.darkRed">As Nfts</chakra.span>
                                </chakra.span>
                            }
                        >
                            <Text fontSize="lg" textAlign="justify" mb={4}>
                                {homeContent.gameCharactersAsNfts[0]}
                            </Text>
                            <Flex w="full" justify="center">
                                <Image src="/images/pc/home/sipher6.png" w="32rem" mb={4} />
                            </Flex>
                            <Text fontSize="lg" textAlign="justify" mb={4}>
                                {homeContent.gameCharactersAsNfts[1]}
                            </Text>
                            <Flex w="full" justify="center">
                                <Image src="/images/pc/home/home3.png" w="32rem" mb={4} />
                            </Flex>
                            <Text fontSize="lg" textAlign="justify" mb={4}>
                                {homeContent.gameCharactersAsNfts[2]}
                            </Text>
                            <Flex w="full" justify="center">
                                <Image src="/images/pc/home/home4.png" w="32rem" mb={4} />
                            </Flex>
                        </TextContainer>
                        <SpecialButton rounded="full" text="Sign Up Now" w="fit-content" px={16} py={4} />
                    </Flex>
                </ViewContainer>
            </Box>
        </MotionContainer>
    )
}

export default HomeBody
