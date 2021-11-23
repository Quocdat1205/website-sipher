// * DESCRIPTION:

import { Flex } from "@chakra-ui/react"
import { NavBar, Footer } from "@components/shared"

interface NewsLayoutProps {
    children: React.ReactNode
}

const InventoryLayout = ({ children }: NewsLayoutProps) => {
    return (
        <Flex minH="100vh" w="full" direction="column" overflow="hidden" color="whiteAlpha.900" id="main-layout">
            <NavBar />
            <Flex
                flex={1}
                overflow="overlay"
                direction="column"
                id="body"
                bgImage="/images/pc/inventory_background.png"
                bgSize="contain"
                pt={"4.5rem"}
            >
                <Flex direction="column" flex={1} backgroundColor="blackAlpha.300">
                    {children}
                </Flex>
                <Footer />
            </Flex>
        </Flex>
    )
}

export default InventoryLayout
