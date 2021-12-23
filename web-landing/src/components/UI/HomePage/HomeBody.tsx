import { Flex, VStack } from "@chakra-ui/react"
import { ActionButton, BackgroundContainer } from "@components/shared"
import FirstScreen from "./FirstScreen"
import SmartContracts from "./SmartContracts"
import dynamic from "next/dynamic"

interface HomeBodyProps {
    uaString: string
}

const DigitalCharacters = dynamic(() => import("./DigitalCharacters"))
const WhatIsSipher = dynamic(() => import("./WhatIsSipher"))
const OwnerBenefits = dynamic(() => import("./OwnerBenefits"))
const Backers = dynamic(() => import("./Backers"))
const BehindTheScenes = dynamic(() => import("./BehindTheScenes"))
const JoinTheCommunity = dynamic(() => import("./JoinTheCommunity"))

const HomeBody = ({ uaString }: HomeBodyProps) => {
    return (
        <BackgroundContainer p={0} overflow="overlay">
            <FirstScreen />
            <Flex
                direction="column"
                align="center"
                sx={{
                    backgroundImage: `url("/images/pc/home/homenew2.png")`,
                    backgroundRepeat: "repeat",
                }}
                pos="relative"
                zIndex="2"
                pb={24}
            >
                <VStack spacing={24} align="center" w="full">
                    <SmartContracts />
                    <DigitalCharacters />
                    <WhatIsSipher uaString={uaString} />
                    <OwnerBenefits />
                    <Backers />
                    <BehindTheScenes />
                    <JoinTheCommunity />
                </VStack>
                <ActionButton
                    size="small"
                    onClick={() => window.open("https://discord.gg/SIPHERxyz", "_blank")}
                    cursor="pointer"
                    text="Join Our Discord Community"
                    px={6}
                    rounded="full"
                    mt={6}
                />
            </Flex>
        </BackgroundContainer>
    )
}

export default HomeBody
