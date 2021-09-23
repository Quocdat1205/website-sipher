import { Box, Wrap, Text, UnorderedList, ListItem, Flex } from "@chakra-ui/react"
import { MyText, TextContainer } from "@components/shared"
import React from "react"
import IntroductionVideo from "./IntroductionVideo"
import content from "@constant/content/whatIsSipher"
interface Props {}

const WhatIsSipher = (props: Props) => {
    return (
        <TextContainer headline="What is Sipher">
            <Text textAlign="center" mb={4}>
                Sipher is an ambitious casual fighting and exploration Game with an End-game goal of creating Open World
                Social element, built as Ethereum ERC-721 Blockchain
            </Text>
            <Flex w="full" justify="center">
                <IntroductionVideo videoSrc="/video/video.mp4" imgSrc="/images/pc/home/nekoteaser.png" />
            </Flex>
            <Wrap spacing={8}>
                {content.map(item => (
                    <Box key={item.id} flex={1} flexBasis={["90%", "40%"]}>
                        <MyText fontWeight="bold">{item.id}</MyText>
                        <UnorderedList>
                            {item.paragraphs.map(p => (
                                <ListItem key={p}>{p}</ListItem>
                            ))}
                        </UnorderedList>
                    </Box>
                ))}
            </Wrap>
        </TextContainer>
    )
}

export default WhatIsSipher
