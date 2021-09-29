import { Flex } from "@chakra-ui/layout"
import Loading from "@components/shared/Loading"
import useWalletContext from "@hooks/useWalletContext"
import React, { useEffect } from "react"
import { NavBar } from "../shared/NavBar"

interface Props {
    children: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
    const { metaState } = useWalletContext()

    useEffect(() => {
        if (!metaState.isConnected && metaState.accountLogin === "") {
            window.location.href = "/"
        }
    }, [metaState.isConnected, metaState.accountLogin])

    return metaState.isConnected ? (
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
            <Flex flex={1} overflow="auto">
                {children}
            </Flex>
        </Flex>
    ) : (
        <Loading />
    )
}
export default MainLayout
