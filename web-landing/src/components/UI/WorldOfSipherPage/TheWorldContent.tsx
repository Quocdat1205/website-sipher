import { VStack, Box, Text } from "@chakra-ui/react"
import { BoldText } from "@components/shared"
import { theWorldContent } from "@constant/content/why"
import React from "react"

const TheWorldContent = () => {
    return (
        <VStack spacing={8}>
            <Box>
                <BoldText>USE OF FUNDS</BoldText>
                <Text mt={2}>
                    The sales proceeds of these characters will be used by our team to continue crafting up Sipheria the
                    game, including the creation of World Block Genesis, the Moonbase Station. See Gameplay for more
                    details
                </Text>
            </Box>
            <Box>
                <BoldText>GAME CHARACTERS</BoldText>
                <Text mt={2}>{theWorldContent.gameCharactersAsNfts}</Text>
            </Box>
            <Box>
                <BoldText>TRADING AT BAZAAR</BoldText>
                <Text mt={2}>{theWorldContent.tradingAsBazaar}</Text>
            </Box>
            <Box>
                <BoldText>LAND OWNERSHIP</BoldText>
                <Text mt={2}>{theWorldContent.landOwnership}</Text>
            </Box>
        </VStack>
    )
}

export default TheWorldContent
