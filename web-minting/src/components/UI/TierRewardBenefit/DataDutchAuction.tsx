import { Flex, Box, UnorderedList, ListItem } from "@chakra-ui/react";
import { Typo } from "@components/shared/Typo";
import { dataDutchAuction } from "@constant/content/tierRewardBenefits";
import React from "react";

interface Props {}

const DataDutchAuction = (props: Props) => {
  return (
    <Flex maxW="68rem" bg="blackAlpha.900" p={4} mt={8} flexDir="column" w="full">
      {dataDutchAuction.map((item) => (
        <Box mb={8} _last={{ mb: 0 }} key={item.id}>
          <Typo.Text size="small" color="main.yellow" textTransform="uppercase">
            {item.id}
          </Typo.Text>
          <Typo.Text size="small" color="about.textGray">
            {item.title && item.title}
          </Typo.Text>
          <Box>
            {item.content.map((item) => (
              <UnorderedList pl={1}>
                <ListItem color="about.textGray">
                  <Typo.Text size="small" color="about.textGray" key={item}>
                    {item}
                  </Typo.Text>
                </ListItem>
              </UnorderedList>
            ))}
          </Box>
        </Box>
      ))}
    </Flex>
  );
};
export default DataDutchAuction;
