import { Box, Stack } from "@chakra-ui/layout"
import { TextContainer, GradientOutlineButton } from "@components/shared"
import { MyText } from "@sipher/web-components"
import React from "react"
import content from "@constant/content/playToEarn"
const PlayToEarn = () => {
    return (
        <TextContainer headline="Play To Earn">
            <MyText textAlign="center" textTransform="uppercase" fontWeight="bold" size="large" letterSpacing="2px">
                A whole new world awaits in two main game modes:
            </MyText>
            <Stack mt="8" direction={["column", "column", "row"]} spacing={[8, 8, 16]}>
                {content.map(section => (
                    <Box key={section.title} flex={1}>
                        <GradientOutlineButton text={section.title} w="full" />
                        <Box mt={4}>
                            <MyText fontWeight="bold">{section.headline}</MyText>
                            {section.paragraphs.map(p => (
                                <MyText key={p} mt={[2, 4]}>
                                    {p}
                                </MyText>
                            ))}
                        </Box>
                    </Box>
                ))}
            </Stack>
        </TextContainer>
    )
}

export default PlayToEarn
