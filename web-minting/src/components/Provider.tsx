import { StoreProvider } from "easy-peasy";
import { FC } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@sipher/web-components/lib/theme";
import store from "../store";
import { WalletProvider } from "@hooks/storeWallet/store";

interface ProviderProps {
	children: React.ReactNode;
}
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: 1,
		},
	},
});
const Provider: FC<ProviderProps> = ({ children }) => {
	return (
		<StoreProvider store={store}>
			<WalletProvider>
				<QueryClientProvider client={queryClient}>
					<ChakraProvider theme={theme}>{children}</ChakraProvider>
				</QueryClientProvider>
			</WalletProvider>
		</StoreProvider>
	);
};

export default Provider;
