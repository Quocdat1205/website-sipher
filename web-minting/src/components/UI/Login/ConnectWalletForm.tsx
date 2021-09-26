import { Box, Flex, VStack } from "@chakra-ui/react"
import { MyText } from "@sipher/web-components"
import useChakraToast from "@hooks/useChakraToast"
import { useMetamask } from "@hooks/useMetamask"
import { useRouter } from "next/dist/client/router"
import { useState } from "react"
import WalletCard from "./WalletCard"

const ConnectWalletForm = () => {
	const router = useRouter()
	const { metaState, connect } = useMetamask()
	const toast = useChakraToast()
	const [isLoading, setIsLoading] = useState(false)

	const handleConnectMetaMask = async () => {
		setIsLoading(true)
		if (metaState.isAvailable && !metaState.isConnected) {
			try {
				await connect()
				toast("success", "Connect successfully")
				setIsLoading(false)
			} catch (err: any) {
				if (err.code === 4001) {
					toast("error", "Please connect or signature to MetaMask")
					setIsLoading(false)
				} else if (err.code === -32002) {
					toast("error", "Please unclock MetaMask")
					setIsLoading(false)
				} else {
					console.error(err)
				}
			}
		} else {
			toast("error", "You don't have Metamask installed")
			setIsLoading(false)
		}
	}

	return (
		<Flex flexDir="column" p="4">
			<Box mb="6" textAlign="center">
				<MyText size="large" fontWeight="bold">
					CONNECT TO YOUR WALLET
				</MyText>
				<MyText color="main.darkRed">Ethereum Mainnet Only</MyText>
			</Box>
			<VStack p="4" align="stretch" spacing={4}>
				<WalletCard
					isLoading={isLoading}
					active={metaState.isSignature && metaState.accountLogin !== ""}
					onClick={() => handleConnectMetaMask()}
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
