import { Flex, Box } from "@chakra-ui/layout"
import Loading from "@components/shared/Loading"
import useWalletContext from "@hooks/useWalletContext"
import { AnimatePresence } from "framer-motion"
import React, { useEffect } from "react"
import { NavBar } from "./NavigationBar/NavBar"

interface Props {
    children: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
    const { states } = useWalletContext()

    useEffect(() => {
        if (states.accessToken === "") {
            window.location.href = "/"
        }
    }, [states.accessToken])

    return (
        <Box color="whiteAlpha.900" w="full" h="100vh">
            {states.accessToken === "" && <Loading />}
            <Flex
                color="whiteAlpha.900"
                bg="url(/images/bgMintingNew.png) no-repeat"
                bgSize="100% 100%"
                w="full"
                minH="100vh"
                flexDir="column"
                pos="relative"
            >
                <NavBar />
                <Flex flex={1} overflow="visible" pt={20} bg="blackAlpha.500">
                    <AnimatePresence exitBeforeEnter>{children}</AnimatePresence>
                </Flex>
            </Flex>
        </Box>
    )
}
export default MainLayout
