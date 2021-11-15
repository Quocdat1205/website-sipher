import { Flex, Box } from "@chakra-ui/layout"
import { AnimatePresence } from "framer-motion"
import React from "react"
import { NavBar } from "./NavigationBar/NavBar"

interface Props {
    children: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
    return (
        <Flex color="whiteAlpha.900" w="full" h="100vh" pos="relative">
            <Flex py={8} align="center" color="whiteAlpha.900" w="full" minH="100vh" flexDir="column">
                <NavBar />
                <Flex maxW="1200px" w="full" flex={1} overflow="visible" pt={20} pos="relative">
                    <AnimatePresence exitBeforeEnter>{children}</AnimatePresence>
                </Flex>
            </Flex>
            <Box
                pos="fixed"
                w="full"
                zIndex="-1"
                h="100vh"
                bg="url(/images/background.png) no-repeat"
                bgSize="100% 100%"
            ></Box>
        </Flex>
    )
}
export default MainLayout
