import { AccordionItem, AccordionItemProps, AccordionPanel, UnorderedList, ListItem } from "@chakra-ui/react"
import React from "react"
import LeftBar from "./LeftBar"
import AccordionTitle from "./AccordionTitle"
import { Typo } from "@components/shared"

interface MyAccordionItemProps extends AccordionItemProps {
    data: {
        title: string
        content: string[]
    }
}

const MyAccordionItem = ({ data, ...rest }: MyAccordionItemProps) => {
    return (
        <AccordionItem {...rest} position="relative" border="none" bgGradient="linear(180deg, bgGradient.black)">
            {({ isExpanded }) => (
                <>
                    <LeftBar isExpanded={isExpanded} />
                    <AccordionTitle title={data.title} isExpanded={isExpanded} />
                    <AccordionPanel pl={[8, 12, 16]}>
                        <UnorderedList>
                            {data.content.map(line => (
                                <ListItem key={line} mb={2}>
                                    <Typo.Text>{line}</Typo.Text>
                                </ListItem>
                            ))}
                        </UnorderedList>
                    </AccordionPanel>
                </>
            )}
        </AccordionItem>
    )
}

export default MyAccordionItem
