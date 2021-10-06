import { Box, Flex, VStack, Grid, chakra, Button } from "@chakra-ui/react"
import { MyText } from "@sipher/web-components"
import WalletCard from "./WalletCard"
import useWalletContext from "@hooks/useWalletContext"
import isMobile from "is-mobile"
const ConnectWalletForm = () => {
    const { states, connect, isConnecting } = useWalletContext()

    return (
        <Flex direction="column" p="4" pos="relative">
            {isMobile() && (
                <Grid pos="absolute" bg="black" zIndex="overlay" placeItems="center" top={0} left={0} w="full" h="full">
                    <MyText size="large" fontWeight="bold" color="main.brightRed">
                        NOT AVAILABLE <chakra.span fontFamily="monospace">(x_x)!</chakra.span>
                    </MyText>
                </Grid>
            )}
            <Box mb="6" textAlign="center">
                <MyText size="large" fontWeight="bold">
                    CONNECT TO YOUR WALLET
                </MyText>
                <MyText color="main.brightRed">Ethereum Mainnet Only</MyText>
            </Box>
            <VStack p="4" align="stretch" spacing={4}>
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
        </Flex>
    )
}
export default ConnectWalletForm
