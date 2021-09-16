// * DESCRIPTION:

import { Img, Flex } from "@chakra-ui/react"
import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Text } from "@chakra-ui/react"
import SecondaryTextContainer from "@components/shared/SecondaryTextContainer"
import { FaqItem } from "@constant/content/faqAndSocial"

interface FaqBoxProps {
    item: FaqItem
}

const FaqBox = ({ item }: FaqBoxProps) => {
    return (
        <SecondaryTextContainer headline={item.id}>
            <Accordion allowToggle allowMultiple>
                {item.faqs.map(faq => (
                    <AccordionItem border="0px" key={faq.question}>
                        <AccordionButton _focus={{ border: "0px" }} px={0}>
                            <Flex flex="1" textAlign="left" fontWeight="bold" align="flex-start">
                                <Img src="/images/icons/arrow.png" p={2} />
                                <Text textAlign="justify">{faq.question}</Text>
                            </Flex>
                        </AccordionButton>
                        <AccordionPanel color="main.yellow" py={0} px={0} pl={6} textAlign="justify">
                            {faq.answer}
                        </AccordionPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </SecondaryTextContainer>
    )
}

export default FaqBox
