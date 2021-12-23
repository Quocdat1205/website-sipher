// * DESCRIPTION:

import { Flex } from "@chakra-ui/react"
import { NavBar, Footer, ContactUs } from "@components/shared"
import { ReactNode } from "react"

interface NewsLayoutProps {
    children: ReactNode
}

const InventoryLayout = ({ children }: NewsLayoutProps) => {
    return (
        <Flex minH="100vh" w="full" direction="column" overflow="hidden" color="whiteAlpha.900" id="main-layout">
            <NavBar isChildMenu menus="dashboardMenus" />
            <ContactUs />
            <Flex
                flex={1}
                overflow="overlay"
                direction="column"
                id="body"
                bgImage="/images/pc/home/homenew2.png"
                bgSize="cover"
                bgRepeat="no-repeat"
            >
                <Flex direction="column" flex={1}>
                    <Flex py={4} flexDir="column" w="full" align="center" minH="100vh" bg="blackAlpha.300">
                        {children}
                    </Flex>
                </Flex>
                <Footer />
            </Flex>
        </Flex>
    )
}

export default InventoryLayout
