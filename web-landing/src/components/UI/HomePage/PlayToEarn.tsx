import { Box, Flex, Heading, Text } from "@chakra-ui/layout"
import GradientHeading from "@components/shared/GradientHeading"
import React from "react"
import { FlexContainer } from "./FlexContainer"

interface Props {}

const PlayToEarn = (props: Props) => {
    return (
        <FlexContainer>
            <GradientHeading textAlign="center" title="Play to earn" />
            <Heading textAlign="center" textTransform="uppercase" size="sm">
                A whole new world awaits in two main game modes:
            </Heading>
            <Flex
                sx={{
                    h2: {
                        bg: "linear-gradient(black, black) padding-box, linear-gradient(180deg, #FF6795 0%, #FF710B 84.37%) border-box",
                        borderRadius: "99",
                        border: "1px solid transparent",
                    },
                }}
                mt="8"
                flexDir={["column", "row", "row"]}
            >
                <Box flex="1">
                    <Heading textAlign="center" p="4" borderRadius="99" size="sm" textTransform="uppercase">
                        Sipherian adventure
                    </Heading>
                    <Box>
                        <Text mt={[2, 4]} fontWeight="bold">
                            Player versus Evironment (PvE)
                        </Text>
                        <Text mt={[2, 4]}>
                            Collect characters, send them on adventures, collect rewards, craft, upgrade, unlock new
                            characters and discover stories about Sipheria, discover new worlds, take on faction quests,
                            battle against creatures and robots in big raid battles.
                        </Text>
                        <Text mt={[2, 4]}>
                            Embody your alter ego, socialize in open worlds. Take on numourous jobs suc as crafting,
                            mining, designing, story telling, tour guides, guide master, bartender, meme master as the
                            professions are endless.
                        </Text>
                        <Text mt={[2, 4]}>Be a part in creating the world as you desire.</Text>
                    </Box>
                </Box>
                <Box flex="1" ml={[0, 4, 8]} mt={[8, 0, 0]}>
                    <Heading p="4" textAlign="center" size="sm" textTransform="uppercase">
                        Sipherian Brawl
                    </Heading>
                    <Box>
                        <Text mt={[2, 4]} fontWeight="bold">
                            Player versus Player(PvP)
                        </Text>
                        <Text mt={[2, 4]}>
                            The goal is to control characters, battle against other players for rewards and prestige.
                            Learn new skills, unlock new characters, weapons & classes and more.
                        </Text>
                        <Text mt={[2, 4]}>
                            Compete in weekly, monthly and seasonal tournaments for token rewards. Create clans &
                            guilds, onboard real life talents to fight for your cause.
                        </Text>
                        <Text>Rinse and repeat.</Text>
                    </Box>
                </Box>
            </Flex>
        </FlexContainer>
    )
}

export default PlayToEarn
