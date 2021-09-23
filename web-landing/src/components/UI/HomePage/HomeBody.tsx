// * DESCRIPTION:

import { Grid, Flex, Heading, Center, Img } from "@chakra-ui/react"
import { ViewContainer, MotionContainer, SpecialButton, MyText, BackgroundContainer } from "@components/shared"
import IntroductionVideo from "./IntroductionVideo"
import { SaleMechanic } from "./SaleMechanic"
import WhatIsSipher from "./WhatIsSipher"
import WhySipherNFT from "./WhySipherNFT"
import OwnerBenefits from "./OwnerBenefits"
import PlayToEarn from "./PlayToEarn"
import JoinTheCommunity from "./JoinTheCommunity"
import Footer from "./Footer"
import { FlexContainer } from "./FlexContainer"
interface HomeBodyProps {
    setSelectedAnchor: (newAnchor: string) => void
}

const HomeBody = ({ setSelectedAnchor }: HomeBodyProps) => {
    return (
        <MotionContainer>
            <BackgroundContainer
                py={0}
                px={0}
                sx={{
                    backgroundImage: `url("/images/pc/home/homenew2.png")`,
                    backgroundRepeat: "repeat",
                    "@media (max-width: 960px)": {
                        px: "0",
                    },
                }}
            >
                <ViewContainer onView={setSelectedAnchor} label="Home" mb={[14, 14, 20]} threshold={0.2}>
                    <Grid
                        bg="url('/images/pc/home/homenew1.png')"
                        bgRepeat="no-repeat"
                        bgSize="100%"
                        h="100%"
                        placeItems="center"
                        py={["4rem", "8rem", "10rem", "16rem"]}
                        px={4}
                    >
                        <Flex direction="column" align="center">
                            <Img src="/images/pc/home/logohome.png" h={["3rem", "4rem", "5rem"]} alt="sipher-logo" />
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
                                px={[6, 6, 10]}
                                py={[2, 2, 3]}
                                fontSize="md"
                                mt={4}
                                href="https://opensea.io/collection/sipheriansurge"
                                rel="noreferrer"
                            />
                        </Flex>
                    </Grid>
                    <Center px={4}>
                        <SaleMechanic />
                    </Center>
                    <Center px={4}>
                        <IntroductionVideo videoSrc="/video/video.mp4" imgSrc="/images/pc/home/nekoteaser.png" />
                    </Center>
                </ViewContainer>
                <ViewContainer onView={setSelectedAnchor} label="What is Sipher" mb={[14, 14, 20]}>
                    <Center px={4}>
                        <WhatIsSipher />
                    </Center>
                </ViewContainer>
                <ViewContainer onView={setSelectedAnchor} label="Why Sipher NFT" mb={[14, 14, 20]}>
                    <Center px={4}>
                        <WhySipherNFT />
                    </Center>
                </ViewContainer>
                <ViewContainer onView={setSelectedAnchor} label="Owner Benefits" mb={[14, 14, 20]}>
                    <Center bgGradient="linear(180deg, #EF6F38 0%, #150800 84.37%)" h="100%" py={8}>
                        <OwnerBenefits />
                    </Center>
                </ViewContainer>
                <ViewContainer onView={setSelectedAnchor} label="Play to Earn" mb={[14, 14, 20]}>
                    <Center px={4}>
                        <PlayToEarn />
                    </Center>
                </ViewContainer>
                <ViewContainer onView={setSelectedAnchor} label="Join the Community">
                    <Center
                        bg="url(./images/pc/home/bannerhome.png)"
                        bgSize="100%"
                        bgRepeat="no-repeat"
                        py={["4rem", "8rem", "12rem"]}
                        px={4}
                    >
                        <JoinTheCommunity />
                    </Center>
                    <Footer />
                </ViewContainer>
            </BackgroundContainer>
        </MotionContainer>
    )
}

export default HomeBody
