import { FC } from "react"
import { QueryClientProvider, QueryClient } from "react-query"
import { ChakraProvider } from "@chakra-ui/react"
import { WalletProvider } from "@hooks"
import { theme } from "@sipher/web-components"

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
                <WalletProvider>{children}</WalletProvider>
            </QueryClientProvider>
        </ChakraProvider>
    )
}

export default Provider
