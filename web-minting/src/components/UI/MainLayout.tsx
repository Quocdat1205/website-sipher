import { Flex } from "@chakra-ui/layout"
import Loading from "@components/shared/Loading"
import useWalletContext from "@hooks/useWalletContext"
import React, { useEffect } from "react"
import { NavBar } from "./NavigationBar/NavBar"

interface Props {
    children: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
    const { states } = useWalletContext()

    useEffect(() => {
        if (states.accessToken === "") {
            window.location.href = "/"
        }
    }, [states.accessToken])

    return states.accessToken !== "" ? (
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
