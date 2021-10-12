import { Center, Flex, VStack } from "@chakra-ui/react"
import { BackgroundContainer } from "@components/shared"
import JoinTheCommunity from "./JoinTheCommunity"
import Backers from "./Backers"
import NekoTeaser from "./NekoTeaser"
import Hero from "./Hero"
import { GradientButton } from "@sipher/web-components"

interface HomeBodyProps {}

const HomeBody = ({}: HomeBodyProps) => {
    return (
        <BackgroundContainer p={0} overflow="overlay">
            <Hero />
            <Flex
                direction="column"
                align="center"
                sx={{
                    backgroundImage: `url("/images/pc/home/homenew2.png")`,
                    backgroundRepeat: "repeat",
                }}
                pos="relative"
                zIndex="banner"
                py={24}
            >
                <VStack px={4} spacing={24} align="center">
                    <NekoTeaser />
                    <Backers />
                </VStack>
                <Center
                    bg="url(./images/pc/home/bannerhome.png)"
                    bgSize="100%"
                    bgRepeat="no-repeat"
                    bgPosition="center"
                    backgroundSize="cover"
                    w="full"
                    pt={"12rem"}
                    px={4}
                    mt={24}
                >
                    <JoinTheCommunity />
                </Center>
                <GradientButton
                    text="Join Our Discord Community"
                    rounded="full"
                    as="a"
                    href="https://discord.com/invite/dRqdSxUSmd"
                    rel="noreferrer"
                    w="fit-content"
                    mt={16}
                />
            </Flex>
        </BackgroundContainer>
    )
}

export default HomeBody
