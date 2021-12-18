import { VStack } from "@chakra-ui/react"
import { factionsContent } from "@constant/content/why"
import FactionCard from "./FactionCard"
const factionsContents = [
    {
        image: "/images/pc/why/maximalist_templars.png",
        headline: "Maximalist Templars",
        content: factionsContent.maximalistTemplars[0],
    },
    {
        image: "/images/pc/why/centurion_scholars.png",
        headline: "Centurion Scholars",
        content: factionsContent.centurionScholars[0],
    },
    {
        image: "/images/pc/why/shade_brotherhood.png",
        headline: "Shade Brotherhood",
        content: factionsContent.shadeBrotherhood[0],
    },
]

const FactionsContent = () => {
    return (
        <VStack spacing={8}>
            {factionsContents.map(content => (
                <FactionCard key={content.headline} data={content} />
            ))}
        </VStack>
    )
}

export default FactionsContent
