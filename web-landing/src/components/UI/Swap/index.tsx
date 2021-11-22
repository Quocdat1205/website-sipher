// * DESCRIPTION:

import { Image, Flex, Heading } from "@chakra-ui/react"
import { BackgroundContainer } from "@components/shared"
import React from "react"

interface SwapProps {}

const Swap = ({}: SwapProps) => {
    return (
        <BackgroundContainer pos="relative" px={0}>
            <Flex
                align="center"
                justify="center"
                pos="absolute"
                w="full"
                h="full"
                bg="blackAlpha.600"
                backdropFilter="blur(4px)"
            >
                <Heading
                    fontFamily="Brandon"
                    letterSpacing="4px"
                    lineHeight={1}
                    fontSize={["3rem", "5rem", "7rem"]}
                    fontWeight={700}
                >
                    COMING SOON
                </Heading>
            </Flex>
        </BackgroundContainer>
    )
}

export default Swap
