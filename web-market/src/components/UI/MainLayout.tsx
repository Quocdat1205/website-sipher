import { Flex } from "@chakra-ui/react"
import { ReactNode } from "react"
import { NavBar } from "./Navbar"

interface MainLayoutProps {
    children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <Flex minH="100vh" w="full" direction="column" overflow="hidden" color="whiteAlpha.900" id="main-layout">
            <NavBar />
            <Flex
                pos="relative"
                flex={1}
                overflow="overlay"
                direction="column"
                id="body"
                bg="url(/images/bg.png)"
                bgSize="cover"
                bgRepeat="no-repeat"
            >
                <Flex zIndex={1} justify="center" align="center" direction="column" flex={1}>
                    {children}
                </Flex>
            </Flex>
        </Flex>
    )
}

export default MainLayout
