import React from "react";
import { MyHeading } from "@sipher/web-components";
import { Flex, FlexProps } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/react";
import { Typo } from "@components/shared";

interface ContentAccordionProps extends FlexProps {
  children?: React.ReactChild;
}

const ContentAccordion = ({ children, ...rest }: ContentAccordionProps) => {
  return (
    <Flex pl="12" justifySelf="flex-start" w="full" flexDir="column" mb={6} {...rest}>
      <Box pl="4" flex={1}>
        {children}
      </Box>
    </Flex>
  );
};
export default ContentAccordion;
