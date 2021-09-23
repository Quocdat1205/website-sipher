import React, { useState } from "react"
import { useDisclosure, SlideFade, Flex, Box } from "@chakra-ui/react"
import FirstForm from "./FirstForm"
import ConnectForm from "./ConnectForm"
import NotSuport from "./NotSuport"

interface Props {}

const Login = (props: Props) => {
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
            color="whiteAlpha.800"
        >
            <Box
                minH={["200px", "250px", "450px", "450px"]}
                w="600px"
                rounded="0"
                bgGradient="linear(to-r, main.purple, main.pinkRed, main.yellow)"
                p="1"
            >
                <Flex
                    align="center"
                    justify="center"
                    bg="black"
                    p="4"
                    minH={["200px", "250px", "450px", "450px"]}
                    w="full"
                >
                    {!redirect ? (
                        <>
                            <FirstForm handleRedirect={handleRedirect} />
                            <NotSuport />
                        </>
                    ) : (
                        <SlideFade style={{ width: "100%" }} in={isOpen} offsetX="50pSlideFadex">
                            <ConnectForm />
                        </SlideFade>
                    )}
                </Flex>
            </Box>
        </Flex>
    )
}
export default Login
