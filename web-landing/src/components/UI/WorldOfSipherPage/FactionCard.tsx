import { Stack, Box, Image } from "@chakra-ui/react"
import { Typo } from "@components/shared"
import React from "react"

interface FactionCardProps {
    data: {
        image: string
        headline: string
        content: string
    }
}

const FactionCard = ({ data: { image, headline, content } }: FactionCardProps) => {
    return (
        <Stack bg="about.cardGray" direction={["column", "row"]} rounded="md" overflow="hidden" spacing={0}>
            <Box flex={1} pos="relative">
                <Image loading="lazy" src={image} alt={headline} />
            </Box>
            <Box flex={2} p={4}>
                <Typo.BoldText textTransform="uppercase">{headline}</Typo.BoldText>
                <Typo.Text mt={2}>{content}</Typo.Text>
            </Box>
        </Stack>
    )
}

export default FactionCard
