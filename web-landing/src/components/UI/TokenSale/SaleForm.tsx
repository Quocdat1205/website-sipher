import { Flex, Box } from "@chakra-ui/react"
import React, { useRef, useEffect, useState } from "react"
import InputUI from "./InputUI"
import { AnimatePresence, motion } from "framer-motion"
import Dropdown from "./Dropdown"

interface SaleFormProps {}

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

const TabPanelContent = ({ children, changeHeight }) => {
    const currentPanelRef = useRef<HTMLDivElement | any>(null)

    useEffect(() => {
        currentPanelRef.current = document?.createElement("div")
        changeHeight(currentPanelRef.current.clientHeight + "px")
    }, [])

    return (
        <Box
            as={motion.div}
            pos="absolute"
            variants={routesAnimationVariantsTest}
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

const dropdownOptions = [
    {
        label: "Deposit",
        value: "Deposit",
    },
    {
        label: "Withdraw",
        value: "Withdraw",
    },
]

const SaleForm = ({}: SaleFormProps) => {
    const [height, setHeight] = useState("0px")
    const [selected, setSelected] = useState(dropdownOptions[0])

    return (
        <Flex pos="relative" w="full" direction="column" align="center" p={4} pt={8}>
            <Box pl={4} w="full">
                <Dropdown selected={selected} dropdownOptions={dropdownOptions} onSelectedChange={setSelected} />
            </Box>
            <Box w="full" h={height}>
                <Box as={AnimatePresence}>
                    <TabPanelContent changeHeight={setHeight}>
                        {selected.value === "Deposit" ? <InputUI mode="Deposit" /> : <InputUI mode="Withdraw" />}
                    </TabPanelContent>
                </Box>
            </Box>
        </Flex>
    )
}

export default SaleForm
