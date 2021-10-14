import { AccordionButton, AccordionItem, AccordionItemProps, AccordionPanel } from "@chakra-ui/accordion"
import { chakra } from "@chakra-ui/react"
import React from "react"
import ContentAccordion from "./ContentAccordion"
import LeftBar from "./LeftBar"
import AccordionTitle from "./AccordionTitle"

interface MyAccordionItemProps extends AccordionItemProps {
    month: string
    name: string
    phases: {
        content: string[]
    }[]
}

const MyAccordionItem = ({ month, name, phases, ...rest }: MyAccordionItemProps) => {
    return (
        <AccordionItem {...rest} position="relative" border="none" bgGradient="linear(180deg, bgGradient.black)">
            {({ isExpanded }) => (
                <>
                    <LeftBar isExpanded={isExpanded} />
                    <AccordionTitle month={month} name={name} isExpanded={isExpanded} />
                    <AccordionPanel>
                        {phases.map((phase,index) => (
                            <ContentAccordion key={index}>
                                <chakra.ul color="about.textGray">
                                    {phase.content.map(line => (
                                        <chakra.li key={line}>{line}</chakra.li>
                                    ))}
                                </chakra.ul>
                            </ContentAccordion>
                        ))}
                    </AccordionPanel>
                </>
            )}
        </AccordionItem>
    )
}

export default MyAccordionItem
