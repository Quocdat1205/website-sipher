import React, { useEffect } from "react"
import { Flex, Box, Img, VStack, Text, Stack } from "@chakra-ui/react"
import isMobile from "is-mobile"
import { Typo } from "@components/shared/Typo"
import WalletCard from "./WalletCard"
import { useWalletContext } from "@hooks"
import { MotionBox, MotionFlex } from "@components/shared/Motion"
import { QueryClient } from "react-query"
import { getIsPaused, getMaxPublicSaleCap } from "@helper"

const Login = () => {
    const { states, connect, isConnecting } = useWalletContext()

    useEffect(() => {
        const qc = new QueryClient()
        const prefetch = async () => {
            await qc.prefetchQuery("is-sale-paused", getIsPaused)
            await qc.prefetchQuery("public-sale-cap-limit", getMaxPublicSaleCap)
        }
        prefetch()
    }, [])

    return (
        <Box bg="url(/images/bgMintingNew.png)" w="100%" h="100vh" bgPosition="center" bgSize="cover">
            <Flex
                justify="center"
                align="center"
                w="full"
                h="full"
                bgColor="blackAlpha.500"
                color="whiteAlpha.900"
                p={4}
            >
                <Stack align="center" direction={["column", "column", "column"]} spacing={16} maxW="full">
                    <MotionBox
                        flex={1}
                        userSelect="none"
                        initial={{ y: -200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: "tween", duration: 0.4, ease: "easeOut" }}
                    >
                        <Img src="/images/mainlogo.svg" alt="main-logo" w="full" mb={0} h="5rem" maxW="full" />
                    </MotionBox>
                    {!isMobile() ? (
                        <MotionFlex align="center" justify="center" direction="column">
                            <MotionBox
                                initial={{ opacity: 0, y: -200 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
                            >
                                <Typo.Heading fontSize="3xl" mb={4}>
                                    CONNECT YOUR WALLET
                                </Typo.Heading>
                            </MotionBox>
                            <VStack align="stretch" spacing={4}>
                                <WalletCard
                                    isLoading={isConnecting}
                                    active={!!states.accessToken}
                                    onClick={connect}
                                    src="/images/icons/metaMask.png"
                                    title="MetaMask"
                                    custom={0}
                                />
                                <WalletCard
                                    disabled
                                    src="/images/icons/Binance.png"
                                    title="Binance (Coming soon)"
                                    custom={1}
                                />
                                <WalletCard
                                    disabled
                                    src="/images/icons/TWT.png"
                                    title="TrustWallet (Coming soon)"
                                    custom={2}
                                />
                            </VStack>
                        </MotionFlex>
                    ) : (
                        <MotionBox
                            initial={{ opacity: 0, y: -200 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
                        >
                            <Text w="full" textAlign="center" fontWeight={500}>
                                Minting is not supported on mobile (X_X)!
                            </Text>
                        </MotionBox>
                    )}
                </Stack>
            </Flex>
        </Box>
    )
}
export default Login
