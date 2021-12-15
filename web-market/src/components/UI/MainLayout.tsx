import { Flex } from "@chakra-ui/react"
import { NavBar, Footer } from "@components/shared"
import { ReactNode } from "react"

interface MainLayoutProps {
    children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <Flex minH="100vh" w="full" direction="column" overflow="hidden" color="whiteAlpha.900" id="main-layout">
            <NavBar />
            <Flex flex={1} overflow="overlay" direction="column" id="body" bgImage="/images/pc/home/homenew2.png">
                <Flex direction="column" flex={1}>
                    {children}
                </Flex>
                <Footer />
            </Flex>
        </Flex>
    )
}

export default MainLayout
