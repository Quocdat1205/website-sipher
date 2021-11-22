// * DESCRIPTION:

import { Image, Flex, Heading } from "@chakra-ui/react"
import { BackgroundContainer } from "@components/shared"
import React from "react"

interface StakeProps {}

const Stake = ({}: StakeProps) => {
    return (
        <BackgroundContainer pos="relative" image="/images/demo/bg-new2.png" bgRepeat="no-repeat" bgSize="100%" px={0}>
            <Flex direction="column" w="full" py={24} px={4} align="center">
                <Image src="/images/demo/stake-demo.png" alt="" />
            </Flex>
            <Flex
                align="center"
                justify="center"
                pos="absolute"
                w="full"
                h="full"
                bg="blackAlpha.600"
                backdropFilter="blur(3px)"
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

export default Stake
