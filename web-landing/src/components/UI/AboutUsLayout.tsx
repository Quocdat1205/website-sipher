// * DESCRIPTION:

import { Flex } from "@chakra-ui/react"
import { NavBar, Footer } from "@components/shared"
import HeaderBackground from "@components/shared/HeaderBackground"
import Metadata from "@components/shared/Metadata"
import { useRouter } from "next/router"
import { ReactNode, useEffect, useRef } from "react"

interface AboutUsLayoutProps {
    children: ReactNode
}

const AboutUsLayout = ({ children }: AboutUsLayoutProps) => {
    const ctnRef = useRef<HTMLDivElement>(null)

    const router = useRouter()
    useEffect(() => {
        if (ctnRef.current) {
            ctnRef.current.scrollTop = 0
        }
    }, [router.pathname])

    return (
        <>
            <Metadata title="About Us" description="Get to know us and Sipher more!" />
            <Flex minH="100vh" w="full" direction="column" overflow="hidden" color="whiteAlpha.900" id="main-layout">
                <NavBar isChildMenu />
                <Flex flex={1} overflow="overlay" direction="column" id="body" ref={ctnRef}>
                    <HeaderBackground title="ABOUT US" description="Get to know us and SIPHER more!" />
                    {children}
                    <Footer />
                </Flex>
            </Flex>
        </>
    )
}

export default AboutUsLayout
