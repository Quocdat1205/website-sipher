// * DESCRIPTION:

import { Image, Flex, Heading } from "@chakra-ui/react"
import { BackgroundContainer } from "@components/shared"
import React from "react"

interface SwapProps {}

const Swap = ({}: SwapProps) => {
    return (
        <BackgroundContainer
            pos="relative"
            image="/images/demo/swap-demo.png"
            bgRepeat="no-repeat"
            bgSize="100%"
            px={0}
        >
            <Flex
                align="center"
                justify="center"
                pos="absolute"
                w="full"
                h="full"
                bg="blackAlpha.600"
                // backdropFilter="blur(3px)"
            >
                <Heading
                    fontFamily="Brandon"
                    letterSpacing="4px"
                    lineHeight={1}
                    fontSize={["3rem", "4.5rem", "6rem"]}
                    fontWeight={700}
                >
                    COMING SOON
                </Heading>
            </Flex>
        </BackgroundContainer>
    )
}

export default Swap
