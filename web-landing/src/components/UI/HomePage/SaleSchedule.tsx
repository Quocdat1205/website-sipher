import { Box } from "@chakra-ui/layout"
import { TextContainer } from "@components/shared"
import { MyText } from "@sipher/web-components"
import React from "react"

interface Props {}

export const SaleSchedule = (props: Props) => {
    return (
        <TextContainer headline="Sale Mechanic">
            <Box mt={[4, 8]} textAlign="center">
                <MyText size="large" mb="2" textTransform="uppercase" fontWeight="bold" letterSpacing="2px">
                    Private sale
                </MyText>
                <MyText>
                    Private Sale Starts from Sep 7th (08:00AM GMT+7) for 48 hours with a maximum of 2,000 whitelisted
                    slots
                </MyText>
            </Box>
            <Box mt={[4, 8]} textAlign="center">
                <MyText size="large" mb={2} textTransform="uppercase" fontWeight="bold" letterSpacing="2px">
                    Public sale
                </MyText>
                <MyText mb={2}>
                    Starts from Sep 9th (09:00AM GMT+7) for 48 hours or sold out, whichever comes 1st
                </MyText>
                <MyText>500/10,000 will be minted to team wallet for community events, team members & partners</MyText>
            </Box>
        </TextContainer>
    )
}

export default SaleSchedule
