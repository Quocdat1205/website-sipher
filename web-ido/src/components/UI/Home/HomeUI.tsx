import { Box, Flex } from "@chakra-ui/layout"
import { chakra } from "@chakra-ui/system"
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs"
import { Typo } from "@components/shared/Typo"
import React from "react"
import SaleUI from "../SaleUI"

interface Props {
    uaString: string
}

const HomeUI = (props: Props) => {
    const selectedCss = {
        color: "main.orange",
        _before: {
            content: `""`,
            position: "absolute",
            bottom: "0",
            left: "50%",
            transform: "translate(-50%,-100%)",
            w: "2rem",
            rounded: "lg",
            h: "4px",
            bg: "main.orange",
        },
    }

    return (
        <Flex flexDir="column" justify="center" align="center" h="full" w="full">
            <Box bg="#272639" maxW="480px" w="full" rounded="2xl" overflow="hidden">
                <Flex flexDir="row" justify="space-between" align="center" p={4}>
                    <Typo.Text>IDO Test</Typo.Text>
                    <chakra.span fontWeight={500} fontSize="sm" rounded="full" p={2} bg="#511491">
                        Sale Period
                    </chakra.span>
                </Flex>
                <Flex borderTop="1px" borderColor="main.orange" flexDir="column" align="center" justify="center">
                    <Tabs p={4} w="full" align="center">
                        <TabList border="none">
                            <Tab pos="relative" _selected={selectedCss}>
                                Deposit
                            </Tab>
                            <Tab pos="relative" _selected={selectedCss}>
                                Withdraw
                            </Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <SaleUI mode="Deposit" />
                            </TabPanel>
                            <TabPanel>
                                <SaleUI mode="Withdraw" />
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Flex>
            </Box>
        </Flex>
    )
}

export default HomeUI
