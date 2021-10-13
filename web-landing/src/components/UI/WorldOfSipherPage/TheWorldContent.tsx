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
                <Typo.Text mt={2}>
                    There will also be a 2.5% Loyalty fees of all resells of Sipher collected to a dedicated Sipher
                    wallet. This fund shall only be used after discussion with all Sipher Holders for the purpose of
                    enlarge the Sipher community via grants, funding new projects and initiatives to build Sipheria.
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
