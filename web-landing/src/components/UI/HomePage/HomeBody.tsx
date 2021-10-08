// * DESCRIPTION:

import { Center, Flex, Box } from "@chakra-ui/react"
import { ViewContainer, BackgroundContainer, Footer } from "@components/shared"
import WhatIsSipher from "./WhatIsSipher"
import OwnerBenefits from "./OwnerBenefits"
import PlayToEarn from "./PlayToEarn"
import JoinTheCommunity from "./JoinTheCommunity"
import Backers from "./Backers"
import NekoTeaser from "./NekoTeaser"
import Hero from "./Hero"

interface HomeBodyProps {}

const HomeBody = ({}: HomeBodyProps) => {
    const mb = [8, 8, 16]
    return (
        <BackgroundContainer
            p={0}
            overflow="overlay"
            sx={{
                scrollSnapType: "y mandatory",
            }}
        >
            <Hero />
            <Box
                sx={{
                    backgroundImage: `url("/images/pc/home/homenew2.png")`,
                    backgroundRepeat: "repeat",
                }}
                pos="relative"
                zIndex="banner"
            >
                <Flex p={4} mb={[8, 8, 16]} justify="center">
                    <NekoTeaser />
                </Flex>
                <ViewContainer label="What is Sipher" mb={mb}>
                    <Center px={4}>
                        <WhatIsSipher />
                    </Center>
                </ViewContainer>

                <ViewContainer label="Owner Benefits" mb={mb}>
                    <Center bgGradient="linear(180deg, #EF6F38 0%, #150800 84.37%)" h="100%" pt={8} pb={16}>
                        <OwnerBenefits />
                    </Center>
                </ViewContainer>
                <ViewContainer label="Play to Earn" mb={mb}>
                    <Center px={4}>
                        <PlayToEarn />
                    </Center>
                </ViewContainer>
                <ViewContainer label="Backers" mb={mb}>
                    <Center px={4}>
                        <Backers />
                    </Center>
                </ViewContainer>
                <ViewContainer label="Join the Community">
                    <Center
                        bg="url(./images/pc/home/bannerhome.png)"
                        bgSize="100%"
                        bgRepeat="no-repeat"
                        bgPosition="center"
                        backgroundSize="cover"
                        pt={"12rem"}
                        px={4}
                    >
                        <JoinTheCommunity />
                    </Center>
                </ViewContainer>
                <Footer />
            </Box>
        </BackgroundContainer>
    )
}

export default HomeBody
