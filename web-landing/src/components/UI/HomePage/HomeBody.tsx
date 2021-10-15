import { Center, Flex, VStack } from "@chakra-ui/react"
import { BackgroundContainer, LinkButton } from "@components/shared"
import JoinTheCommunity from "./JoinTheCommunity"
import Backers from "./Backers"
import NekoTeaser from "./NekoTeaser"
import Hero from "./Hero"
import BehindTheScenes from "./BehindTheScenes"

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
                <VStack spacing={24} align="center" w="full">
                    <NekoTeaser />
                    <BehindTheScenes />
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

                <LinkButton
                    size="large"
                    text="Join Our Discord Community"
                    href="https://discord.com/invite/dRqdSxUSmd"
                    mt={8}
                />
            </Flex>
        </BackgroundContainer>
    )
}

export default HomeBody
