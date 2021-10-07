// * DESCRIPTION:

import { Center } from "@chakra-ui/react"
import { ViewContainer, BackgroundContainer } from "@components/shared"
import SaleSchedule from "./SaleSchedule"
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
            sx={{
                backgroundImage: `url("/images/pc/home/homenew2.png")`,
                backgroundRepeat: "repeat",
                "@media (max-width: 960px)": {
                    px: "0",
                },
            }}
        >
            <ViewContainer label="Home" mb={mb} p={0} threshold={0.2}>
                <Hero />
                <Center px={4} mb={8} mt={24}>
                    <SaleSchedule />
                </Center>
                <Center px={4}>
                    <NekoTeaser />
                </Center>
            </ViewContainer>
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
        </BackgroundContainer>
    )
}

export default HomeBody
