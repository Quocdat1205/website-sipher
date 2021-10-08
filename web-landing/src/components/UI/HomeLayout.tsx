// * DESCRIPTION:

import { Flex } from "@chakra-ui/react"
import { NavBar, Footer } from "@components/shared"
import { useRouter } from "next/router"
import { useEffect, useRef } from "react"

interface HomeLayoutProps {
    children: React.ReactNode
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
    return (
        <Flex h="100vh" w="full" direction="column" overflow="hidden" color="whiteAlpha.900" id="main-layout">
            <NavBar />
            {children}
        </Flex>
    )
}

export default HomeLayout
