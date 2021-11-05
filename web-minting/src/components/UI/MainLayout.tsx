import { Flex, Box, Grid, Text } from "@chakra-ui/layout"
import { chakra } from "@chakra-ui/system"
import Loading from "@components/shared/Loading"
import { getIsPaused } from "@helper/smartContract"
import useWalletContext from "@hooks/useWalletContext"
import { AnimatePresence } from "framer-motion"
import React, { useEffect } from "react"
import { useQuery } from "react-query"
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
    const { data: isPaused } = useQuery("is-sale-paused", getIsPaused, {
        refetchInterval: 15000,
        initialData: false,
    })
    useEffect(() => {
        document.body.style.overflow = isPaused ? "hidden" : "auto"
    }, [isPaused])
    return (
        <Box color="whiteAlpha.900" w="full" h="100vh">
            {states.accessToken === "" && <Loading />}
            <Flex color="whiteAlpha.900" w="full" minH="100vh" flexDir="column" pos="relative">
                <NavBar />

                {isPaused ? (
                    <Grid
                        pos="absolute"
                        bg="blackAlpha.900"
                        w="full"
                        zIndex="dropdown"
                        placeItems="center"
                        h="100vh"
                        p={4}
                    >
                        <Flex direction="column" align="center" maxW="56rem" w="full">
                            <Text fontWeight={500} fontSize="lg" mb={1} color="whiteAlpha.800" textAlign="center">
                                Something unfavorable is happening. This sale is temporarily paused.
                            </Text>
                            <Text fontWeight={500} fontSize="lg" mb={1} color="whiteAlpha.800" textAlign="center">
                                Please comeback later or visit our{" "}
                                <chakra.span
                                    bgGradient="linear(to-b, bgGradient.orange)"
                                    bgClip="text"
                                    cursor="pointer"
                                    fontWeight="bold"
                                    as="a"
                                    href="https://discord.gg/sipherxyz"
                                    target="_blank"
                                    rel="nonreferrer"
                                >
                                    Discord
                                </chakra.span>{" "}
                                for more detail.
                            </Text>
                        </Flex>
                    </Grid>
                ) : (
                    <Flex flex={1} overflow="visible" pt={20} bg="blackAlpha.300" pos="relative">
                        <AnimatePresence exitBeforeEnter>{children}</AnimatePresence>
                    </Flex>
                )}
                <Box
                    pos="fixed"
                    w="full"
                    zIndex="-1"
                    h="100vh"
                    bg="url(/images/bgMintingNew.png) no-repeat"
                    bgSize="100% 100%"
                ></Box>
            </Flex>
        </Box>
    )
}
export default MainLayout
