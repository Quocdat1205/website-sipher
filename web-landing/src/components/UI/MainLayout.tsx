// * DESCRIPTION:

import { Flex } from "@chakra-ui/react"
import { NavBar } from "@components/shared"

interface MainLayoutProps {
    children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <Flex h="100vh" w="full" direction="column" overflow="hidden" color="whiteAlpha.900">
            <NavBar />
            <Flex flex={1} overflow="hidden">
                {children}
            </Flex>
        </Flex>
    )
}

export default MainLayout
