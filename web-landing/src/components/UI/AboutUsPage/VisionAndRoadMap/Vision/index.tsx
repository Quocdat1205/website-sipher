import React from "react"
import { TextContainer } from "@components/shared"
import { SimpleGrid } from "@chakra-ui/layout"
import VisionCard from "./VisionCard"
import content from "@constant/content/vision"

const Vision = () => {
    return (
        <TextContainer headline="VISION">
            <SimpleGrid columns={[1, 3]} gap={4}>
                {content.map(item => (
                    <VisionCard
                        key={item.headline}
                        icon={item.icon}
                        headline={item.headline}
                        description={item.content}
                    />
                ))}
            </SimpleGrid>
        </TextContainer>
    )
}

export default Vision
