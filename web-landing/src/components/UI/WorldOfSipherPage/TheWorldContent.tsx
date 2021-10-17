// * DESCRIPTION:

import { VStack, Box } from "@chakra-ui/react"
import { Typo } from "@components/shared"
import { theWorldContent } from "@constant/content/why"
import React from "react"

interface TheWorldContentProps {}

const TheWorldContent = ({}: TheWorldContentProps) => {
    return (
        <VStack spacing={8}>
            <Box>
                <Typo.BoldText>USE OF FUNDS</Typo.BoldText>
                <Typo.Text mt={2}>
                    The sales proceeds of these characters will be used by our team to continue crafting up Sipheria the
                    game, including the creation of World Block Genesis, the Moonbase Station. See Gameplay for more
                    details
                </Typo.Text>
            </Box>
            <Box>
                <Typo.BoldText>GAME CHARACTERS</Typo.BoldText>
                <Typo.Text mt={2}>{theWorldContent.gameCharactersAsNfts}</Typo.Text>
            </Box>
            <Box>
                <Typo.BoldText>TRADING AT BAZAAR</Typo.BoldText>
                <Typo.Text mt={2}>{theWorldContent.tradingAsBazaar}</Typo.Text>
            </Box>
            <Box>
                <Typo.BoldText>LAND OWNERSHIP</Typo.BoldText>
                <Typo.Text mt={2}>{theWorldContent.landOwnership}</Typo.Text>
            </Box>
        </VStack>
    )
}

export default TheWorldContent
