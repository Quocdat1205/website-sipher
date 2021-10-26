import { Flex, Box } from "@chakra-ui/layout"
import Loading from "@components/shared/Loading"
import useWalletContext from "@hooks/useWalletContext"
import React, { useEffect } from "react"
import { NavBar } from "./NavigationBar/NavBar"

interface Props {
    children: React.ReactNode
}

const InventoryLayout = ({ children }: Props) => {
    const { states } = useWalletContext()

    useEffect(() => {
        if (states.accessToken === "") {
            window.location.href = "/"
        }
    }, [states.accessToken])
    return (
        <Flex direction="column" w="full" minH="100vh">
            {states.accessToken === "" && <Loading />}
            <Flex
                color="whiteAlpha.900"
                bg="url(/images/bgMinting.png) no-repeat"
                bgSize="100% 100%"
                w="full"
                flex={1}
                flexDir="column"
                pos="relative"
            >
                <NavBar isInventoryMenu />
                <Flex flex={1} overflow="auto" pt={28} pb={4} bg="blackAlpha.800">
                    {children}
                </Flex>
            </Flex>
        </Flex>
    )
}
export default InventoryLayout
