import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/layout"
import { MyText, TextContainer } from "@components/shared"
import React from "react"
import { GradientOutlineButton } from "./GradientOutlineButton"

interface Props {}

const PlayToEarn = (props: Props) => {
    return (
        <TextContainer headline="Play To Earn">
            <MyText textAlign="center" textTransform="uppercase" fontWeight="bold">
                A whole new world awaits in two main game modes:
            </MyText>
            <Stack mt="8" direction={["column", "row"]} spacing={[8, 8, 16]}>
                <Box flex="1">
                    <GradientOutlineButton text="Sipherian Adventure" w="full" />
                    <Box>
                        <MyText mt={[2, 4]} fontWeight="bold">
                            Player versus Evironment (PvE)
                        </MyText>
                        <MyText mt={[2, 4]}>
                            Collect characters, send them on adventures, collect rewards, craft, upgrade, unlock new
                            characters and discover stories about Sipheria, discover new worlds, take on faction quests,
                            battle against creatures and robots in big raid battles.
                        </MyText>
                        <MyText mt={[2, 4]}>
                            Embody your alter ego, socialize in open worlds. Take on numourous jobs suc as crafting,
                            mining, designing, story telling, tour guides, guide master, bartender, meme master as the
                            professions are endless.
                        </MyText>
                        <MyText mt={[2, 4]}>Be a part in creating the world as you desire.</MyText>
                    </Box>
                </Box>
                <Box flex="1" ml={[0, 4, 8]} mt={[8, 0, 0]}>
                    <GradientOutlineButton text="Sipherian Brawl" w="full" />
                    <Box>
                        <MyText mt={[2, 4]} fontWeight="bold">
                            Player versus Player(PvP)
                        </MyText>
                        <MyText mt={[2, 4]}>
                            The goal is to control characters, battle against other players for rewards and prestige.
                            Learn new skills, unlock new characters, weapons & classes and more.
                        </MyText>
                        <MyText mt={[2, 4]}>
                            Compete in weekly, monthly and seasonal tournaments for token rewards. Create clans &
                            guilds, onboard real life talents to fight for your cause.
                        </MyText>
                        <MyText>Rinse and repeat.</MyText>
                    </Box>
                </Box>
            </Stack>
        </TextContainer>
    )
}

export default PlayToEarn
