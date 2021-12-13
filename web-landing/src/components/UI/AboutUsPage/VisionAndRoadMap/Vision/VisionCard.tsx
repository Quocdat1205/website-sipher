import React from "react"
import { Box, Image, Text, VStack } from "@chakra-ui/react"
interface VisionCardProps {
    headline: string
    description: string
    icon: string
}

const VisionCard = ({ headline, description, icon }: VisionCardProps) => {
    return (
        <VStack px={4} py={8} spacing={6} borderRadius="lg" bg="about.cardGray" align="center">
            <Box h="4rem">
                <Image h="full" mx="auto" src={icon} alt={headline} />
            </Box>
            <Text
                fontSize={"lg"}
                fontWeight={"semibold"}
                letterSpacing={"3px"}
                textTransform="uppercase"
                textAlign={"center"}
            >
                {headline}
            </Text>
            <Text flex={1} color="text.secondary" textAlign={"center"}>
                {description}
            </Text>
        </VStack>
    )
}

export default VisionCard
