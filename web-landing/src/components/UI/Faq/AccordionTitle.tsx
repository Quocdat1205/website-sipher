import { Box, Flex, AccordionButton } from "@chakra-ui/react";
import { BsCheck, BsChevronRight } from "react-icons/bs";
import React from "react";
import { Typo } from "@components/shared/";

interface Props {
  isExpanded: boolean;
  title: string;
}

const AccordionTitle = ({ title, isExpanded }: Props) => {
  return (
    <AccordionButton py={4} _focus={{ boxShadow: "none" }}>
      <Flex align="center" w="full">
        <Flex direction="column" pl={12}>
          <Typo.BoldText isGradient={isExpanded} size="medium" fontWeight="normal" letterSpacing="0px">
            {title}
          </Typo.BoldText>
        </Flex>
        <Box ml="auto" transform={`rotate(${isExpanded ? "90deg" : "0deg"})`} transition="transform 0.3s ease">
          <BsChevronRight fontSize="1.2rem" />
        </Box>
      </Flex>
    </AccordionButton>
  );
};

export default AccordionTitle;
