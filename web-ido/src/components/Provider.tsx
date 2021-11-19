import { FC } from "react"
import { QueryClientProvider, QueryClient } from "react-query"
import { ChakraProvider } from "@chakra-ui/react"
import { UseWalletProvider } from "@hooks"
import { theme } from "@sipher/web-components"
import { Web3ReactProvider } from "@web3-react/core"

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
        <QueryClientProvider client={queryClient}>
            <Web3ReactProvider getLibrary={ethereum => ethereum}>
                <UseWalletProvider>
                    <ChakraProvider theme={theme}>{children} </ChakraProvider>
                </UseWalletProvider>
            </Web3ReactProvider>
        </QueryClientProvider>
    )
}

export default Provider
