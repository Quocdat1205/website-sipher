import { ChakraProvider } from "@chakra-ui/react"
import store from "@store"
import { StoreProvider } from "easy-peasy"
import { NextPage } from "next"
import type { AppProps } from "next/app"
import Head from "next/head"
import { ReactElement, ReactNode, useEffect } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import "../style.css"
import * as gtag from "../lib/gtag"
import { useRouter } from "next/router"
import UseWalletProvider from "@hooks/web3/UseWalletProvider"
import { Web3ReactProvider } from "@web3-react/core"
import theme from "@source/theme"
export type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

const isProduction = process.env.NODE_ENV === "production"
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            keepPreviousData: true,
        },
    },
})

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const router = useRouter()
    useEffect(() => {
        const handleRouteChange = (url: URL) => {
            /* invoke analytics function only for production */
            if (isProduction) gtag.pageview(url)
        }
        router.events.on("routeChangeComplete", handleRouteChange)
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange)
        }
    }, [router.events])
    const getLayout = Component.getLayout || (page => page)

    return (
        <StoreProvider store={store}>
            <ChakraProvider theme={theme}>
                <Web3ReactProvider getLibrary={e => e}>
                    <UseWalletProvider>
                        <QueryClientProvider client={queryClient}>
                            <Head>
                                <meta charSet="utf-8" />
                                <link rel="icon" href="/images/general/main_icon.ico" />
                                <meta name="viewport" content="width=device-width, initial-scale=1" />
                                <meta name="theme-color" content="#000000" />
                                <link rel="manifest" href="/manifest.json" />
                                <meta
                                    name="description"
                                    content="Sipher is a blockchain PvP PvE MOBA game for all age group. All players assets and achievements are NFTs. Exclusive characters launch coming soon!"
                                />
                                <link rel="apple-touch-icon" href="/images/general/main_icon.ico" />
                                <title>Welcome to Sipher</title>
                                <meta
                                    name="description"
                                    content="Sipher is a blockchain PvP PvE MOBA game for all age group. All players assets and achievements are NFTs. Exclusive characters launch coming soon!"
                                />
                                <meta itemProp="name" content="Welcome to Sipher" />
                                <meta
                                    itemProp="description"
                                    content="Sipher is a blockchain PvP PvE MOBA game for all age group. All players assets and achievements are NFTs. Exclusive characters launch coming soon"
                                />
                                <meta itemProp="image" content="/images/pc/home/NEKO_3D.png" />
                                <meta property="og:url" content="https://sipher.xyz" />
                                <meta property="og:type" content="website" />
                                <meta property="og:title" content="Welcome to Sipher" />
                                <meta
                                    property="og:description"
                                    content="Sipher is a blockchain PvP PvE MOBA game for all age group. All players assets and achievements are NFTs. Exclusive characters launch coming soon"
                                />
                                <meta property="og:image" content="/images/pc/home/NEKO_3D.png" />

                                <meta name="twitter:card" content="summary_large_image" />
                                {/* <meta name="twitter:site" content="@SIPHERxyz" /> */}
                                <meta name="twitter:title" content="Welcome to Sipher" />
                                <meta
                                    name="twitter:description"
                                    content="Sipher is a blockchain PvP PvE MOBA game for all age group. All players assets and achievements are NFTs. Exclusive characters launch coming soon!  "
                                />
                                <meta
                                    name="twitter:image"
                                    content="https://sipherstorage.s3.ap-southeast-1.amazonaws.com/NEKO_3D.png"
                                />
                            </Head>
                            {getLayout(<Component {...pageProps} />)}
                        </QueryClientProvider>
                    </UseWalletProvider>
                </Web3ReactProvider>
            </ChakraProvider>
        </StoreProvider>
    )
}
export default MyApp
