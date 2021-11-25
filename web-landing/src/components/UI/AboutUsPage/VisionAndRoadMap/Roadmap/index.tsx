import { Accordion } from "@chakra-ui/react"
import { TextContainer } from "@components/shared"
import React from "react"
import MyAccordionItem from "./MyAccordionItem"
import content from "@constant/content/roadmap"

const RoadMap = () => {
    return (
        <TextContainer headline="ROADMAP">
            <Accordion defaultIndex={[3]} allowMultiple>
                {content.map(item => (
                    <MyAccordionItem key={item.name} data={item} />
                ))}
            </Accordion>
        </TextContainer>
    )
}
export default RoadMap
