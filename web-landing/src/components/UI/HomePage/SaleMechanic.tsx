import { Box, Heading } from "@chakra-ui/layout"
import { MyText, TextContainer } from "@components/shared"
import React from "react"

interface Props {}

export const SaleMechanic = (props: Props) => {
    return (
        <TextContainer headline="Sale Mechanic">
            <Box mt={[4, 8]} textAlign="center">
                <Heading mb="2" fontSize={["xl", "2xl"]} textTransform="uppercase">
                    Private sale
                </Heading>
                <MyText size="medium">
                    Private Sale Starts from Sep 7th (08:00AM GMT+7) for 48 hours with a maximum of 2,000 whitelisted
                    slots
                </MyText>
            </Box>
            <Box mt={[4, 8]} textAlign="center">
                <Heading mb="2" fontSize={["xl", "2xl"]} textTransform="uppercase">
                    Public sale
                </Heading>
                <MyText size="medium">
                    Starts from Sep 9th (09:00AM GMT+7) for 48 hours or sold out, whichever comes 1st
                </MyText>
                <MyText size="medium" mt={4}>
                    500/10,000 will be minted to team wallet for community events, team members & partners
                </MyText>
            </Box>
        </TextContainer>
    )
}
