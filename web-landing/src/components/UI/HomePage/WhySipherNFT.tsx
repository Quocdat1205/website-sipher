import { Stack, Text } from "@chakra-ui/layout"
import { TextContainer } from "@components/shared"
import React from "react"
import content from "@constant/content/whySipherNFT"
interface Props {}

const WhySipherNFT = (props: Props) => {
    return (
        <TextContainer headline="Why Sipher NFT">
            <Stack direction={["column", "row"]} spacing={8}>
                {content.map(paragraph => (
                    <Text key={paragraph} textAlign="center" flex={1} fontSize={["md", "lg"]} fontWeight="semibold">
                        {paragraph}
                    </Text>
                ))}
            </Stack>
        </TextContainer>
    )
}
export default WhySipherNFT
