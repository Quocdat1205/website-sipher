import { Flex, Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react"
import React from "react"
import InputUI from "./InputUI"

interface SaleFormProps {}

const SaleForm = ({}: SaleFormProps) => {
    const selectedCss = {
        rounded: "full",
        color: "#FF9800",
        bg: "border.gray",
    }
    return (
        <Flex direction="column" align="center" flex={2} h="full" pt={20} pb={10} px={4}>
            <Tabs w="full" align="center">
                <TabList overflow="hidden" border="1px" rounded="full" borderColor="#383838!important">
                    <Tab _focus={{ boxShadow: "none" }} flex={1} pos="relative" _selected={selectedCss}>
                        Deposit
                    </Tab>
                    <Tab _focus={{ boxShadow: "none" }} flex={1} pos="relative" _selected={selectedCss}>
                        Withdraw
                    </Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <InputUI mode="Deposit" />
                    </TabPanel>
                    <TabPanel>
                        <InputUI mode="Withdraw" />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Flex>
    )
}

export default SaleForm
