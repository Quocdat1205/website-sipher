// * DESCRIPTION:

import { Flex, Box, Stack } from "@chakra-ui/react"
import { Typo } from "@components/shared"
import React from "react"
import ChartRank from "./ChartRank"
import UserRank from "./UserRank"

const LeaderBoard = () => {
    return (
        <Flex direction="column" align="center" w="full">
            <Box w="full" maxW="64rem" px={4}>
                <Typo.Heading mb={2}>LEADERBOARD</Typo.Heading>
                <Typo.BoldText mb={6} zIndex={1} textAlign="center">
                    DONEC VIVERIA MESUAS
                </Typo.BoldText>
                <Stack w="full" h="full" spacing={4}>
                    <UserRank />
                    <ChartRank />
                </Stack>
            </Box>
        </Flex>
    )
}

export default LeaderBoard
