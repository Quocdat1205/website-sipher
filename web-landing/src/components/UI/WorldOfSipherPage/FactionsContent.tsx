import { VStack } from "@chakra-ui/react"
import { factionsContent } from "@constant/content/why"
import FactionCard from "./FactionCard"
import maximalistTemplars from "../../../../public/images/pc/why/maximalist_templars.png"
import centurionScholars from "../../../../public/images/pc/why/centurion_scholars.png"
import shadeBrotherhood from "../../../../public/images/pc/why/shade_brotherhood.png"
const factionsContents = [
    {
        image: maximalistTemplars,
        headline: "Maximalist Templars",
        content: factionsContent.maximalistTemplars[0],
    },
    {
        image: centurionScholars,
        headline: "Centurion Scholars",
        content: factionsContent.centurionScholars[0],
    },
    {
        image: shadeBrotherhood,
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
