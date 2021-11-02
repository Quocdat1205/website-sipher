import React from "react"
import { Flex, Box, Img, VStack, Text, Stack } from "@chakra-ui/react"
import isMobile from "is-mobile"
import { Typo } from "@components/shared/Typo"
import WalletCard from "./WalletCard"
import useWalletContext from "@hooks/useWalletContext"
import { MotionFlex } from "@components/shared/Motion"

const Login = () => {
    const { states, connect, isConnecting } = useWalletContext()

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
                    <Box flex={1} userSelect="none">
                        <Img src="/images/mainlogo.svg" alt="main-logo" w="full" mb={0} h="5rem" maxW="full" />
                    </Box>
                    {!isMobile() ? (
                        <MotionFlex align="center" justify="center" direction="column">
                            <Typo.Heading fontSize="3xl" mb={4}>
                                CONNECT TO YOUR WALLET
                            </Typo.Heading>
                            <VStack align="stretch" spacing={4}>
                                <WalletCard
                                    isLoading={isConnecting}
                                    active={!!states.accessToken}
                                    onClick={connect}
                                    src="/images/icons/metaMask.png"
                                    title="MetaMask"
                                />
                                <WalletCard disabled src="/images/icons/Binance.png" title="Binance (Coming soon)" />
                                <WalletCard disabled src="/images/icons/TWT.png" title="TrustWallet (Coming soon)" />
                            </VStack>
                        </MotionFlex>
                    ) : (
                        <Text w="full" textAlign="center" fontWeight={500}>
                            Minting is not supported on mobile (X_X)!
                        </Text>
                    )}
                </Stack>
            </Flex>
        </Box>
    )
}
export default Login
