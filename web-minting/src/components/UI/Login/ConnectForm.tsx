import { Box, Flex } from "@chakra-ui/react";
import { MyText } from "@sipher/web-components";
import useChakraToast from "@hooks/useChakraToast";
import { useMetamask } from "@hooks/useMetamask";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import CardConnect from "./CardConnect";

const ConnectForm = () => {
	const router = useRouter();
	const { metaState, connect } = useMetamask();
	const toast = useChakraToast();
	const [isLoading, setIsLoading] = useState(false);

	const handleConnectMetaMask = async () => {
		setIsLoading(true);
		if (metaState.isAvailable && !metaState.isConnected) {
			(async () => {
				try {
					await connect();
					router.push("/minting-private");
					toast("success", "Connect successfully");
					setIsLoading(false);
				} catch (err: any) {
					if (err.code === 4001) {
						toast("error", "Please connect or signature to MetaMask");
						setIsLoading(false);
					} else if (err.code === -32002) {
						toast("error", "Please unclock MetaMask");
						setIsLoading(false);
					} else {
						console.error(err);
					}
				}
			})();
		} else {
			if (metaState.isAvailable && metaState.isConnected) {
				router.push("/minting-private");
				toast("warning", "Metamask is connected.");
				setIsLoading(false);
			} else {
				toast("error", "You don't have Metamask installed");
				setIsLoading(false);
			}
		}
	};

	return (
		<Flex flexDir="column" p="4">
			<Box mb="6" textAlign="center">
				<MyText fontSize="1.4rem">Choose wallet connect now</MyText>
				<MyText fontSize="1rem" color="red.500" mt="1">
					Ethereum Mainnet Only
				</MyText>
			</Box>
			<Box p="4">
				<CardConnect
					isLoading={isLoading}
					active={metaState.accountLogin !== ""}
					onClick={() => handleConnectMetaMask()}
					src="/images/icons/metaMask.png"
					title="MetaMask"
				/>
				<CardConnect disabled src="/images/icons/Binance.png" title="Binance (Coming soon)" />
				<CardConnect disabled src="/images/icons/TWT.png" title="TrustWallet (Coming soon)" />
			</Box>
		</Flex>
	);
};
export default ConnectForm;
