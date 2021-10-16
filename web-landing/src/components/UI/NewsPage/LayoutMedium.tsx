import React from "react";
import ReactHtmlParser from "react-html-parser";
import { Box, Flex, HStack } from "@chakra-ui/layout";
import { DetailsNewsProps } from "./PopupCard";
import UrlCopier from "./UrlCopier";
import ButtonLinkTo from "./ButtonLinkTo";
import { MyHeading } from "@sipher/web-components";
import { ModalCloseButton } from "@chakra-ui/modal";

interface Props {
  details: DetailsNewsProps;
}

const LayoutMedium = ({ details }: Props) => {
  return (
    <Flex pt={["64px", "0"]} overflow="auto" flexDir="column" h={["100vh", "80vh"]}>
      <Box maxW="64rem">
        <Flex flexDir="column" flex={1} p={[4, 8]}>
          <Box flex={1}>
            <MyHeading textAlign="center" size="large">
              {details.title}
            </MyHeading>
            <Box
              mt={[4, 6]}
              sx={{ ul: { listStylePos: "inside" }, img: { m: "0 auto", py: 8, maxHeight: "45rem" } }}
              color="about.textGray"
            >
              {ReactHtmlParser(details.content && details.content)}
            </Box>
            <Box
              sx={{ ul: { listStylePos: "inside" }, img: { m: "0 auto", py: 8, maxHeight: "45rem" } }}
              color="about.textGray"
            >
              {ReactHtmlParser(details.description && details.description)}
            </Box>
          </Box>
          <HStack spacing={8} px={8} py={4} borderTop="1px" borderColor="about.textGray">
            <UrlCopier url={window.location.href} />
            <ButtonLinkTo url={details.link} typeSocial={details.type} />
          </HStack>
        </Flex>
      </Box>
    </Flex>
  );
};

export default LayoutMedium;
