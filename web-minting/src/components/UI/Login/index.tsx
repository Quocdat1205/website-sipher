import React, { useState } from "react"
import { useDisclosure, SlideFade, Flex, Box } from "@chakra-ui/react"
import FirstForm from "./FirstForm"
import ConnectWalletForm from "./ConnectWalletForm"
import NotSuport from "./NotSuport"

const Login = () => {
    const [redirect, setRedirect] = useState(false)
    const { isOpen, onToggle } = useDisclosure()

    const handleRedirect = () => {
        onToggle()
        setRedirect(true)
    }

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
                            <FirstForm handleRedirect={handleRedirect} />
                            <NotSuport />
                        </>
                    ) : (
                        <SlideFade style={{ width: "100%" }} in={isOpen} offsetX="50pSlideFadex">
                            <ConnectWalletForm />
                        </SlideFade>
                    )}
                </Flex>
            </Box>
        </Flex>
    )
}
export default Login
