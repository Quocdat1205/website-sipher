import { Flex, Tabs, TabList, Tab, TabPanels, TabPanel, Box } from "@chakra-ui/react"
import React, { useRef, useEffect, useState } from "react"
import InputUI from "./InputUI"
import { AnimatePresence, motion } from "framer-motion"

interface SaleFormProps {}

const routesAnimationVariants = {
    hidden: {
        opacity: 0,
        x: "-400px",
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: { delay: 0, duration: 1 },
    },
    exit: {
        x: "400px",
        opacity: 0,
        transition: {
            ease: "easeInOut",
            duration: 0.6,
        },
    },
}

const routesAnimationVariantsTest = {
    hidden: {
        opacity: 0,
        x: "400px",
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: { delay: 0, duration: 1 },
    },
    exit: {
        x: "-400px",
        opacity: 0,
        transition: {
            ease: "easeInOut",
            duration: 0.6,
        },
    },
}

const TabPanelContent = ({ isChange = false, children, changeHeight }) => {
    const currentPanelRef = useRef<HTMLDivElement | any>(null)

    useEffect(() => {
        currentPanelRef.current = document?.createElement("div")
        changeHeight(currentPanelRef.current.clientHeight + "px")
    }, [])

    return (
        <Box
            as={motion.div}
            pos="absolute"
            variants={isChange ? routesAnimationVariants : routesAnimationVariantsTest}
            initial="hidden"
            animate="visible"
            exit="exit"
            p={4}
            ref={currentPanelRef}
        >
            {children}
        </Box>
    )
}

const SaleForm = ({}: SaleFormProps) => {
    const [height, setHeight] = useState("0px")

    const selectedCss = {
        rounded: "full",
        color: "#FF9800",
        bg: "border.gray",
    }
    return (
        <Flex
            pos="relative"
            direction="column"
            align="center"
            flex={2}
            h="full"
            pt={12}
            pb={10}
            px={4}
            overflow="hidden"
        >
            <Tabs isLazy w="full" align="center">
                <TabList px={4} overflow="hidden" border="none">
                    <Flex flexDir="row" w="full" border="1px" rounded="full" borderColor="border.gray">
                        <Tab _focus={{ boxShadow: "none" }} flex={1} pos="relative" _selected={selectedCss}>
                            Deposit
                        </Tab>
                        <Tab _focus={{ boxShadow: "none" }} flex={1} pos="relative" _selected={selectedCss}>
                            Withdraw
                        </Tab>
                    </Flex>
                </TabList>
                <TabPanels h={height}>
                    <TabPanel as={AnimatePresence}>
                        <TabPanelContent changeHeight={setHeight}>
                            <InputUI mode="Deposit" />
                        </TabPanelContent>
                    </TabPanel>
                    <TabPanel as={AnimatePresence}>
                        <TabPanelContent isChange changeHeight={setHeight}>
                            <InputUI mode="Withdraw" />
                        </TabPanelContent>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Flex>
    )
}

export default SaleForm
