import { Accordion, chakra } from "@chakra-ui/react";
import { TextContainer } from "@components/shared";
import React from "react";
import MyAccordionItem from "./MyAccordionItem";
import content from "@constant/content/roadmap";

const RoadMap = () => {
  return (
    <TextContainer headline="ROADMAP">
      <Accordion defaultIndex={[2]} allowMultiple>
        {content.map((item) => (
          <MyAccordionItem key={item.name} month={item.month} name={item.name} phases={item.phases} />
        ))}
      </Accordion>
    </TextContainer>
  );
};
export default RoadMap;
