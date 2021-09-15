import { StoreProvider } from "easy-peasy";
import { FC } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { ChakraProvider } from "@chakra-ui/react";
import chakraTheme from "../utils/chakraTheme";
import store from "../store";

interface ProviderProps {
	children: JSX.Element;
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
			<QueryClientProvider client={queryClient}>
				<ChakraProvider theme={chakraTheme}>{children}</ChakraProvider>
			</QueryClientProvider>
		</StoreProvider>
	);
};

export default Provider;
