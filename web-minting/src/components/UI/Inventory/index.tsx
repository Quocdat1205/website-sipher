import { Box, Flex, Tabs, Tab, TabList, TabPanel, TabPanels } from "@chakra-ui/react";
import React from "react";
import { MyHeading, MyText } from "@sipher/web-components";
import ListNFTs from "./NFTList";

function Inventory() {
  return (
    <Flex flexDir="column" p="4" bg="rgba(0, 0, 0, 0.8)" w="100%" h="100%" alignItems="center">
      <Flex flexDir="column" w="full" maxWidth="64rem" overflow="hidden">
        <MyHeading fontFamily="Chakra Petch" textAlign="right" textTransform="uppercase" color="#B70F28" w="full">
          Inventory
        </MyHeading>
        <Box
          w="100%"
          h="1px"
          bg="#6f111f"
          pos="relative"
          _before={{
            pos: "absolute",
            content: "''",
            h: "2px",
            w: "10px",
            bottom: 0,
            left: 0,
            bgColor: "red.500",
          }}
        />
        <Flex w="100%" p="4" flexDir="column" flex="1" overflow="hidden" maxWidth="64rem">
          <Tabs display="flex" flexDirection="column" overflow="hidden">
            <TabList borderColor="whiteAlpha.300" color="gray.500">
              <Tab
                fontWeight="bold"
                fontSize={["sm", "md", "lg"]}
                _selected={{
                  color: "yellow.500",
                  borderBottomColor: "yellow.500",
                }}
                _focus={{ boxShadow: "none" }}
                px="6"
              >
                INU
              </Tab>
              <Tab
                fontWeight="bold"
                fontSize={["sm", "md", "lg"]}
                _selected={{
                  color: "yellow.500",
                  borderBottomColor: "yellow.500",
                }}
                _focus={{ boxShadow: "none" }}
                px="6"
                disabled
              >
                NEKO
              </Tab>
            </TabList>
            <TabPanels overflow="hidden" className="tab-panel" flex={1}>
              <TabPanel display="flex" flexDir="column" alignItems="center" overflow="hidden" p={0} h="full">
                <ListNFTs type="INU" />
              </TabPanel>
              <TabPanel disabled display="flex" flexDir="column" alignItems="center" overflow="hidden" p={0} h="full">
                <ListNFTs type="NEKO" />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Inventory;
