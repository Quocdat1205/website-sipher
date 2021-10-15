import { VStack, Accordion } from "@chakra-ui/react"
import { BackgroundContainer, TextContainer } from "@components/shared"
import { overviewContent, blockchainContent, gameplayContent } from "@constant/content/faq"
import React from "react"
import MyAccordionItem from "./MyAccordionItem"

interface FagUIProps {}

const FagUI = ({}: FagUIProps) => {
    return (
        <BackgroundContainer>
            <VStack align="center" py={24} px={4} spacing={24}>
                <TextContainer headline="GAME OVERVIEW">
                    <Accordion allowMultiple>
                        {overviewContent.map(item => (
                            <MyAccordionItem key={item.title} data={item} />
                        ))}
                    </Accordion>
                </TextContainer>
                <TextContainer headline="GAMEPLAY">
                    <Accordion allowMultiple>
                        {gameplayContent.map(item => (
                            <MyAccordionItem key={item.title} data={item} />
                        ))}
                    </Accordion>
                </TextContainer>
                <TextContainer headline={"BLOCKCHAIN & CURRENCY"}>
                    <Accordion allowMultiple>
                        {blockchainContent.map(item => (
                            <MyAccordionItem key={item.title} data={item} />
                        ))}
                    </Accordion>
                </TextContainer>
            </VStack>
        </BackgroundContainer>
    )
}

export default FagUI
