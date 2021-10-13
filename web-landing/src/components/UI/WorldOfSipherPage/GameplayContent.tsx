import { Box, VStack } from "@chakra-ui/react"
import { Typo } from "@components/shared"
import { gameplayContent } from "@constant/content/why"
import React from "react"

interface GameplayContentProps {}

const GameplayContent = ({}: GameplayContentProps) => {
    return (
        <VStack spacing={8}>
            <Box>
                <Typo.BoldText>MEANINGFUL END-GAME CONTENT</Typo.BoldText>
                <Typo.Text mt={2}>{gameplayContent.meaningfulEndgameContent}</Typo.Text>
            </Box>
            <Box>
                <Typo.BoldText>IMMERSIVE STORYLINE</Typo.BoldText>
                <Typo.Text mt={2}>{gameplayContent.immersiveStoryline}</Typo.Text>
            </Box>
            <Box>
                <Typo.BoldText>CLASSES & SKILLS</Typo.BoldText>
                <Typo.Text mt={2}>{gameplayContent.classesAndSkills}</Typo.Text>
            </Box>
            <Box>
                <Typo.BoldText>EXPEDITIONS MECHANIC</Typo.BoldText>
                <Typo.Text mt={2}>{gameplayContent.expeditionMechanic}</Typo.Text>
            </Box>
        </VStack>
    )
}

export default GameplayContent
