import { Center, Flex, VStack } from "@chakra-ui/react"
import { BackgroundContainer, LinkButton } from "@components/shared"
import JoinTheCommunity from "./JoinTheCommunity"
import NekoTeaser from "./NekoTeaser"
import Hero from "./Hero"
import BehindTheScenes from "./BehindTheScenes"
import OwnerBenefits from "./OwnerBenefits"
import DigitalCharacters from "./DigitalCharacters"
import WhatIsSipher from "./WhatIsSipher"
import Backers from "./Backers"

interface HomeBodyProps {
    uaString: string
}

const HomeBody = ({ uaString }: HomeBodyProps) => {
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
                zIndex="2"
                py={24}
            >
                <VStack spacing={24} align="center" w="full">
                    <NekoTeaser uaString={uaString} />
                    <DigitalCharacters />
                    <WhatIsSipher uaString={uaString} />
                    <OwnerBenefits />
                    <Backers />
                    <BehindTheScenes />
                    <JoinTheCommunity />
                </VStack>

                <LinkButton size="large" text="Join Our Discord Community" href="https://discord.gg/SIPHERxyz" mt={8} />
            </Flex>
        </BackgroundContainer>
    )
}

export default HomeBody
