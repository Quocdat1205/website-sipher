// * DESCRIPTION:

import { Box } from "@chakra-ui/react"
import { BackgroundContainer, Typo } from "@components/shared"
import React from "react"

interface TokenSaleProps {}

const TokenSale = ({}: TokenSaleProps) => {
    return (
        <BackgroundContainer
            pos="relative"
            image="/images/pc/home/background.png"
            bgRepeat="no-repeat"
            bgSize="100%"
            px={0}
            pt={"8.5rem"}
            pb="4rem"
        >
            <Box>
                <Typo.Heading>$SIPHER TOKEN</Typo.Heading>
                <Typo.Heading>PUBLIC SALE</Typo.Heading>
            </Box>
        </BackgroundContainer>
    )
}

export default TokenSale
