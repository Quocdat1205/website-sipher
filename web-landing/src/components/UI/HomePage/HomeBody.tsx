// * DESCRIPTION:

import { Grid, Flex, Center, Img, Box } from "@chakra-ui/react"
import { GradientButton, MyHeading, MyText } from "@sipher/web-components"
import { ViewContainer, BackgroundContainer, CountDown } from "@components/shared"
import IntroductionVideo from "./IntroductionVideo"
import SaleSchedule from "./SaleSchedule"
import WhatIsSipher from "./WhatIsSipher"
import OwnerBenefits from "./OwnerBenefits"
import PlayToEarn from "./PlayToEarn"
import JoinTheCommunity from "./JoinTheCommunity"
import Backers from "./Backers"
import NekoTeaser from "./NekoTeaser"
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
                <Box
                    bg="url('/images/pc/home/homenew1.png') "
                    bgRepeat="no-repeat"
                    bgSize="100%"
                    mb={8}
                    bgPosition="center"
                    backgroundSize="cover"
                    pt={[24, 0, 0]}
                >
                    <Grid
                        h="100%"
                        placeItems="center"
                        py={["4rem", "8rem"]}
                        px={4}
                        bgGradient="linear(to-b, transparent, blackAlpha.900)"
                    >
                        <Flex direction="column" align="center">
                            <Img
                                src="/images/mainlogo.svg"
                                h={["6.5rem", "7rem", "8.5rem", "10rem"]}
                                alt="sipher-logo"
                                mb={6}
                            />
                            <MyText
                                color="whiteAlpha.900"
                                fontWeight="500"
                                size="large"
                                letterSpacing="2px"
                                textAlign="center"
                            >
                                OFFICIAL NEKO LAUNCH 09/09/2021 - 09:00AM GMT+7
                            </MyText>
                            <CountDown deadline={1633975965271} />
                            <GradientButton
                                as="a"
                                rounded="full"
                                text="Buy Sipher On OpenSea"
                                fontWeight="bold"
                                w="fit-content"
                                mt={6}
                                px={12}
                                href="https://opensea.io/collection/sipheriansurge"
                                rel="noreferrer"
                            />
                        </Flex>
                    </Grid>
                </Box>
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
