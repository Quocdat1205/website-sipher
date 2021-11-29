// * DESCRIPTION:

import { Flex, Box } from "@chakra-ui/react"
import { BackgroundContainer } from "@components/shared"
import React from "react"
import Body from "./Body"
import Header from "./Header"

interface StakeProps {}

const Stake = ({}: StakeProps) => {
    return (
        <BackgroundContainer
            pos="relative"
            image="/images/pc/stake/bg-stake.png"
            bgRepeat="no-repeat"
            bgSize="100%"
            px={0}
            pt={32}
            pb={16}
        >
            <Flex pt={[8, 10, 12, 14, 16]} direction="column" align="center" justify="center" w="full">
                <Box w="full" maxW="68rem">
                    <Header />
                    <Body />
                </Box>
            </Flex>
        </BackgroundContainer>
    )
}

export default Stake
