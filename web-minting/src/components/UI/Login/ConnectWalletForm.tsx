import { Box, Flex, VStack } from "@chakra-ui/react"
import { MyText, useChakraToast } from "@sipher/web-components"
import WalletCard from "./WalletCard"
import useWalletContext from "@hooks/useWalletContext"

const ConnectWalletForm = () => {
    const { metaState, connect, isConnecting } = useWalletContext()
    // const toast = useChakraToast()

    // const handleConnectMetaMask = async () => {
    //     if (metaState.isAvailable && !metaState.isConnected) {
    //         await connect()
    //     } else {
    //         toast("error", "You don't have Metamask installed")
    //     }
    // }

    return (
        <Flex flexDir="column" p="4">
            <Box mb="6" textAlign="center">
                <MyText size="large" fontWeight="bold">
                    CONNECT TO YOUR WALLET
                </MyText>
                <MyText color="main.brightRed">Ethereum Mainnet Only</MyText>
            </Box>
            <VStack p="4" align="stretch" spacing={4}>
                <WalletCard
                    isLoading={isConnecting}
                    active={metaState.isSignature && metaState.accountLogin !== ""}
                    onClick={() => connect()}
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
