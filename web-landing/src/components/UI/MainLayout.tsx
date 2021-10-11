// * DESCRIPTION:

import { Flex } from "@chakra-ui/react"
import { NavBar, Footer } from "@components/shared"
import { useRouter } from "next/router"
import { useEffect, useRef } from "react"

interface MainLayoutProps {
    children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
    const ctnRef = useRef<HTMLDivElement>(null)

    const router = useRouter()
    useEffect(() => {
        if (ctnRef.current) {
            ctnRef.current.scrollTop = 0
        }
    }, [router.pathname])

    return (
        <Flex  w="full" direction="column" overflow="hidden" color="whiteAlpha.900" id="main-layout">
            <NavBar />
            <Flex flex={1} overflow="overlay" direction="column" id="body" ref={ctnRef}>
                {children}
                <Footer />
            </Flex>
        </Flex>
    )
}

export default MainLayout
