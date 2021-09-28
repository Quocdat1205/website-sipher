import React, { useEffect, useState } from "react"
import { SlideFade, Flex, Box } from "@chakra-ui/react"
import MetaMaskTutorial from "./MetaMaskTutorial"
import ConnectWalletForm from "./ConnectWalletForm"
import NotSuport from "./NotSuport"

const Login = () => {
    const [redirect, setRedirect] = useState(false)

    const onConnectClick = () => {
        //People only see the tutorial one time
        localStorage.setItem("connect-wallet", "true")
        setRedirect(true)
    }

    useEffect(() => {
        setRedirect(localStorage.getItem("connect-wallet") === "true")
    }, [])

    return (
        <Flex
            justify="center"
            align="center"
            bg="url(/images/bgMinting.png) no-repeat"
            bgSize="100% 100%"
            w="100%"
            h="100vh"
            color="whiteAlpha.900"
        >
            <Box maxW="100%" w="32rem" bgGradient="linear(to-b, bgGradient.orange)" p="1">
                <Flex align="center" justify="center" bg="black" p="4" w="full">
                    {!redirect ? (
                        <>
                            <MetaMaskTutorial onConnectClick={onConnectClick} />
                            <NotSuport />
                        </>
                    ) : (
                        <SlideFade style={{ width: "100%" }} in={redirect} offsetX="50pSlideFadex">
                            <ConnectWalletForm />
                        </SlideFade>
                    )}
                </Flex>
            </Box>
        </Flex>
    )
}
export default Login
