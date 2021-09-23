import { Flex, Heading, Text } from "@chakra-ui/layout"
import GradientHeading from "@components/shared/GradientHeading"
import React from "react"
import { FlexContainer } from "./FlexContainer"

interface Props {}

const WhySipherNFT = (props: Props) => {
    return (
        <FlexContainer justify="center" align="center">
            <GradientHeading title="Why Sipher NFT" />
            <Flex pt="8" flexDir={["column", "column", "row"]}>
                <Heading textAlign={["left", "left", "center"]} textTransform="uppercase" flex="1" size="sm">
                    Your in-game characters with exclusive benefits to the Genesis (one of which are $ATHER & $SIPHER
                    tokens)
                </Heading>
                <Heading
                    textAlign={["left", "left", "center"]}
                    textTransform="uppercase"
                    ml={[0, 4, 8]}
                    mt={[4, 0, 0]}
                    flex="1"
                    size="sm"
                >
                    High engaging community with daily contests (over 40k on Discord & 20k on Twitter)
                </Heading>
                <Heading
                    textAlign={["left", "left", "center"]}
                    textTransform="uppercase"
                    ml={[0, 4, 8]}
                    mt={[4, 0, 0]}
                    flex="1"
                    size="sm"
                >
                    Owner Benefits for holders. Exclusive Content, Airdrops, Collector program, whitelist perks & more.
                </Heading>
            </Flex>
        </FlexContainer>
    )
}
export default WhySipherNFT
