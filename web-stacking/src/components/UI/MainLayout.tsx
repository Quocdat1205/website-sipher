import { Flex } from "@chakra-ui/layout"
import { AnimatePresence } from "framer-motion"
import React from "react"
import { NavBar } from "./NavigationBar/NavBar"

interface Props {
    children: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
    return (
        <Flex
            bg="url(/images/background.png) no-repeat"
            bgSize="100% 100%"
            color="whiteAlpha.900"
            w="full"
            minH="100vh"
            pos="relative"
        >
            <Flex py={8} align="center" color="whiteAlpha.900" w="full" minH="100vh" flexDir="column">
                <NavBar />
                <Flex maxW="1200px" w="full" flex={1} overflow="visible" pt={16} pos="relative">
                    <AnimatePresence exitBeforeEnter>{children}</AnimatePresence>
                </Flex>
            </Flex>
        </Flex>
    )
}
export default MainLayout
