// * DESCRIPTION:

import { VStack, Accordion } from "@chakra-ui/react";
import { TextContainer, BackgroundContainer } from "@components/shared";
import { contentOverview, contentBlockchain, contentGameplay } from "@constant/content/faq";
import MyAccordionItem from "./MyAccordionItem";

interface FagBodyProps {}

const FagBody = ({}: FagBodyProps) => {
  return (
    <BackgroundContainer>
      <VStack align="center" py={24} px={4} spacing={24}>
        <TextContainer headline="GAME OVERVIEW">
          <Accordion defaultIndex={[0]} allowMultiple>
            {contentOverview.map((item) => (
              <MyAccordionItem key={item.title} data={item} />
            ))}
          </Accordion>
        </TextContainer>
        <TextContainer headline="GAMEPLAY">
          <Accordion defaultIndex={[0]} allowMultiple>
            {contentGameplay.map((item) => (
              <MyAccordionItem key={item.title} data={item} />
            ))}
          </Accordion>
        </TextContainer>
        <TextContainer headline="BLOCKCHAIN & CURRENCY">
          <Accordion defaultIndex={[0]} allowMultiple>
            {contentBlockchain.map((item) => (
              <MyAccordionItem key={item.title} data={item} />
            ))}
          </Accordion>
        </TextContainer>
      </VStack>
    </BackgroundContainer>
  );
};

export default FagBody;
