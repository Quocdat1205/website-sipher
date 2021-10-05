import { StoreProvider } from "easy-peasy"
import { FC } from "react"
import { QueryClientProvider, QueryClient } from "react-query"
import { ChakraProvider } from "@chakra-ui/react"
import { theme } from "@sipher/web-components"
import store from "../store"
import { WalletProvider } from "@hooks/useWalletContext"

interface ProviderProps {
	children: React.ReactNode
}
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: 1,
		},
	},
})
const Provider: FC<ProviderProps> = ({ children }) => {
	return (
		<ChakraProvider theme={theme}>
			<QueryClientProvider client={queryClient}>
				<StoreProvider store={store}>
					<WalletProvider>{children}</WalletProvider>
				</StoreProvider>
			</QueryClientProvider>
		</ChakraProvider>
	)
}

export default Provider
