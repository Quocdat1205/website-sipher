import { Flex } from "@chakra-ui/layout"
import { useMetamask } from "@hooks/useMetamask"
import { useRouter } from "next/router"
import React, { useEffect } from "react"
import { NavBar } from "../shared/NavBar"

interface Props {
    children: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
    const { metaState } = useMetamask()
    const router = useRouter()

    useEffect(() => {
        if (!metaState.isConnected) {
            router.push("/")
        }
    }, [metaState.isConnected, router])

    return (
        <Flex
            color="whiteAlpha.900"
            bg="url(/images/bgMinting.png) no-repeat"
            bgSize="100% 100%"
            w="full"
            h="100vh"
            flexDir="column"
            pos="relative"
        >
            <NavBar />
            <Flex flex={1} overflow="hidden">
                {children}
            </Flex>
        </Flex>
    )
}
export default MainLayout
