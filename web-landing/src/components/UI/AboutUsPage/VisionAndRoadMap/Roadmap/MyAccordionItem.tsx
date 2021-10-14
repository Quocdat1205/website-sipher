import { AccordionItem, AccordionItemProps, AccordionPanel, UnorderedList, ListItem } from "@chakra-ui/react"
import React from "react"
import LeftBar from "./LeftBar"
import AccordionTitle from "./AccordionTitle"
import { Typo } from "@components/shared"

interface MyAccordionItemProps extends AccordionItemProps {
    data: {
        name: string
        date: string
        content: string[]
        completed?: boolean
    }
}

const MyAccordionItem = ({ data, ...rest }: MyAccordionItemProps) => {
    return (
        <AccordionItem {...rest} position="relative" border="none" bgGradient="linear(180deg, bgGradient.black)">
            {({ isExpanded }) => (
                <>
                    <LeftBar isExpanded={isExpanded} />
                    <AccordionTitle
                        date={data.date}
                        name={data.name}
                        completed={data.completed}
                        isExpanded={isExpanded}
                    />
                    <AccordionPanel pl={16}>
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
