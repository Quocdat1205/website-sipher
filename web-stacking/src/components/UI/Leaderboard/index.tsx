import { Typo } from "@components/shared/Typo"
import React from "react"
import { Stack, chakra, Box, Flex } from "@chakra-ui/react"
import ProgressBarInfo from "./ProgressBarInfo"

interface Props {}

const Leaderboard = (props: Props) => {
    return (
        <Flex flexDir="column" align="center" h="full" w="full">
            <Stack spacing={4} rounded="3xl" bg="white" maxWidth="720px" w="full" p={6}>
                <Typo.Text size="large" color="stack.textBlack">
                    You: <chakra.span color="#979797">0xD682…ac7f</chakra.span>
                </Typo.Text>
                <Box sx={{ ".RSPBstep": { w: "2rem" } }} py={6} px={4} pos="relative">
                    <ProgressBarInfo />
                </Box>
                <Typo.Text color="stack.textBlack">
                    Rank: <chakra.span color="#979797">Not ranked</chakra.span>
                </Typo.Text>
                <Typo.Text color="stack.textBlack">
                    Next milestone: <chakra.span color="#979797">Top 200</chakra.span>
                </Typo.Text>
                <Typo.Text color="stack.textBlack">
                    Next milestone reward: <chakra.span color="#979797">Free NFT</chakra.span>
                </Typo.Text>
                <Typo.Text color="stack.textBlack">
                    Amount needed: <chakra.span color="#979797">MC 0.0</chakra.span>
                </Typo.Text>
                <Typo.Text color="stack.textBlack">
                    Time remaining:{" "}
                    <chakra.span color="#979797">Ranking complete. Final snapshot displayed below.</chakra.span>
                </Typo.Text>
            </Stack>
        </Flex>
    )
}

export default Leaderboard
