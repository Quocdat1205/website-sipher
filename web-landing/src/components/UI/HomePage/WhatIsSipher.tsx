import { Box, Wrap, Text, UnorderedList, ListItem, Flex } from "@chakra-ui/react"
import { TextContainer } from "@components/shared"
import React from "react"
import IntroductionVideo from "./IntroductionVideo"
import content from "@constant/content/whatIsSipher"
import { MyText } from "@sipher/web-components"
interface Props {}

const WhatIsSipher = (props: Props) => {
    return (
        <TextContainer headline="What is Sipher">
            <MyText textAlign="center" mb={4} size="large" textTransform="uppercase" fontWeight="bold">
                Sipher is an ambitious casual fighting and exploration Game with an End-game goal of creating Open World
                Social experience, built on the Ethereum blockchain
            </MyText>
            <Flex w="full" justify="center" mb={4}>
                <IntroductionVideo videoSrc="/video/video.mp4" imgSrc="/images/pc/home/nekoteaser.png" />
            </Flex>
            <Wrap spacing={8}>
                {content.map(item => (
                    <Box key={item.id} flex={1} flexBasis={["90%", "40%"]}>
                        <MyText fontWeight="bold">{item.id}</MyText>
                        <UnorderedList>
                            {item.paragraphs.map(p => (
                                <ListItem key={p}>
                                    <MyText>{p}</MyText>
                                </ListItem>
                            ))}
                        </UnorderedList>
                    </Box>
                ))}
            </Wrap>
        </TextContainer>
    )
}

export default WhatIsSipher
