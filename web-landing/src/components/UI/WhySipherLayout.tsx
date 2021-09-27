// * DESCRIPTION:

import { Flex, HStack } from "@chakra-ui/react"
import { NavBar, Footer } from "@components/shared"
import { useRouter } from "next/router"
import React, { useEffect, useRef } from "react"
import { textToPath } from "src/utils"
import TabButton from "./WhySipherPage/TabButton"

interface WhySipherLayoutProps {
    children: React.ReactNode
}
export const WhySipherSideBarMenu = [
    {
        id: "The World",
        menu: ["World Block Category", "Game Characters As NFTs", "Trading At Bazaar", "Land Ownership"],
    },
    {
        id: "Gameplay",
        menu: [
            "Game Category",
            "Meaningful End-game Content",
            "Immersive Storyline",
            "Classes & Skills",
            "Expeditions Mechanic",
        ],
    },
    { id: "Factions", menu: ["Factions"] },
    { id: "Blockchain", menu: ["Blockchain"] },
]
const WhySipherLayout = ({ children }: WhySipherLayoutProps) => {
    const router = useRouter()
    const getActiveId = () =>
        WhySipherSideBarMenu.find(item => router.pathname.includes(`/why-sipher/${textToPath(item.id)}`))?.id || ""
    const ctnRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (ctnRef.current) {
            ctnRef.current.scrollTop = 0
        }
    }, [router.pathname])

    return (
        <Flex h="100vh" w="full" direction="column" overflow="hidden" color="whiteAlpha.900">
            <NavBar />
            <Flex flex={1} overflow="hidden" direction="column">
                <HStack
                    justify={["space-between", "center"]}
                    spacing={[0, 8, 16]}
                    bgColor="black"
                    bgGradient="linear(to-b, black, whiteAlpha.50, black )"
                    px={4}
                    py={4}
                    display="flex"
                >
                    {WhySipherSideBarMenu.map(item => (
                        <TabButton
                            key={item.id}
                            type={item.id}
                            onClick={() => router.push(`${textToPath(item.id)}`)}
                            active={item.id === getActiveId()}
                        />
                    ))}
                </HStack>
                <Flex direction="column" overflow="overlay" ref={ctnRef}>
                    {children}
                    <Footer />
                </Flex>
            </Flex>
        </Flex>
    )
}

export default WhySipherLayout
