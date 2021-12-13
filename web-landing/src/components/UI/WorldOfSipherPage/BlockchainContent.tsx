import { VStack, Box } from "@chakra-ui/react"
import { Typo } from "@components/shared"
import { blockchainContent } from "@constant/content/why"
import React from "react"

const BlockchainContent = () => {
    return (
        <VStack spacing={8}>
            {blockchainContent.content.map(item => (
                <Box key={item.id}>
                    <Typo.BoldText textTransform="uppercase">{item.id}</Typo.BoldText>
                    <Typo.Text mt={2}>{item.content}</Typo.Text>
                </Box>
            ))}
        </VStack>
    )
}

export default BlockchainContent
