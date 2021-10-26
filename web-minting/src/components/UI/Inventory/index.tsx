import { Flex, Tabs, TabList, TabPanels } from "@chakra-ui/react"
import React from "react"
import InfoModal from "./InfoModal"
import NFTList from "./NFTList"
import TabComponent from "./TabComponent"

function Inventory() {
    return (
        <Flex flexDir="column" p="4" bg="blackAlpha.800" w="100%" h="100%" alignItems="center">
            <Flex flexDir="column" w="full" maxWidth="64rem" overflow="hidden">
                <Flex w="100%" p="4" flexDir="column" flex="1" overflow="hidden" maxWidth="64rem">
                    <Tabs display="flex" flexDirection="column" overflow="hidden">
                        <TabList borderColor="whiteAlpha.300" color="gray.500">
                            <TabComponent.Button>INU</TabComponent.Button>
                            <TabComponent.Button>NEKO</TabComponent.Button>
                        </TabList>
                        <TabPanels overflow="hidden" className="tab-panel" flex={1}>
                            <TabComponent.Panel>
                                <NFTList race="INU" />
                            </TabComponent.Panel>
                            <TabComponent.Panel>
                                <NFTList race="NEKO" />
                            </TabComponent.Panel>
                        </TabPanels>
                    </Tabs>
                    <InfoModal />
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Inventory
