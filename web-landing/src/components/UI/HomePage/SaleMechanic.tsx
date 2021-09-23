import { Box, Heading, Text } from "@chakra-ui/layout"
import { MyText } from "@components/shared"
import GradientHeading from "@components/shared/GradientHeading"
import React from "react"
import { FlexContainer } from "./FlexContainer"

interface Props {}

export const SaleMechanic = (props: Props) => {
    return (
        <FlexContainer>
            <GradientHeading textAlign="center" title="Sale mechanic" />
            <Box mt="8" textAlign="center">
                <Heading mb="2" fontSize="2xl" textTransform="uppercase">
                    Private sale
                </Heading>
                <MyText size="medium">
                    Private Sale Starts from Sep 7th (08:00AM GMT+7) for 48 hours with a maximum of 2,000 whitelisted
                    slots
                </MyText>
            </Box>
            <Box mt="8" textAlign="center">
                <Heading mb="2" fontSize="2xl" textTransform="uppercase">
                    Public sale
                </Heading>
                <MyText size="medium">
                    Starts from Sep 9th (09:00AM GMT+7) for 48 hours or sold out, whichever comes 1st
                </MyText>
                <MyText size="medium" mt={4}>
                    500/10,000 will be minted to team wallet for community events, team members & partners
                </MyText>
            </Box>
        </FlexContainer>
    )
}
