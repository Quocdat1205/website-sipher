import React from "react"
import { MyHeading, MyText } from "@sipher/web-components"
import { Flex, Box, Stack, Image } from "@chakra-ui/react"
import { Typo } from "@components/shared"
interface VisionCardProps {
    headline: string
    description: string
    icon: string
}

const VisionCard = ({ headline, description, icon }: VisionCardProps) => {
    return (
        <Stack px={4} py={8} spacing={6} borderRadius="lg" bg="about.cardGray" textAlign="center">
            <Box h="4rem">
                <Image h="full" m="0 auto" src={icon} alt="" />
            </Box>
            <Typo.BoldText h={["2rem", "4.5rem", "5rem", "5.5rem"]} textTransform="uppercase">
                {headline}
            </Typo.BoldText>
            <Typo.Text flex={1} color="about.textGray">
                {description}
            </Typo.Text>
        </Stack>
    )
}

export default VisionCard
