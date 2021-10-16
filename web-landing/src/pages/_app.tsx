import { ChakraProvider } from "@chakra-ui/react"
import { theme } from "@sipher/web-components"
import store from "@store"
import { StoreProvider } from "easy-peasy"
import { NextPage } from "next"
import type { AppProps } from "next/app"
import Head from "next/head"
import { ReactElement, ReactNode } from "react"
import Script from "next/script"
import { QueryClient, QueryClientProvider } from "react-query"
import "../style.css"
export type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}
const queryClient = new QueryClient()
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout || (page => page)

    return (
        <StoreProvider store={store}>
            <ChakraProvider theme={theme}>
                <QueryClientProvider client={queryClient}>
                    <Head>
                        <meta charSet="utf-8" />
                        <link rel="icon" href="/images/general/main_icon.ico" />
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <meta name="theme-color" content="#000000" />
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
                        <meta itemProp="image" content="/images/general/main_icon.ico" />
                        <meta property="og:url" content="https://sipher.xyz" />
                        <meta property="og:type" content="website" />
                        <meta property="og:title" content="Welcome to Sipher" />
                        <meta
                            property="og:description"
                            content="Sipher is a blockchain PvP PvE MOBA game for all age group. All players assets and achievements are NFTs. Exclusive characters launch coming soon"
                        />
                        <meta property="og:image" content="/images/general/logo512.png" />
                        <meta name="twitter:card" content="summary_large_image" />
                        <meta name="twitter:title" content="Welcome to Sipher" />
                        <meta
                            name="twitter:description"
                            content="Sipher is a blockchain PvP PvE MOBA game for all age group. All players assets and achievements are NFTs. Exclusive characters launch coming soon!  "
                        />
                        <meta name="twitter:image" content="/images/general/logo512.png" />
                        {/* <script>
                    window.dataLayer = window.dataLayer || []; function gtag(){" "}
                    {(window as any).dataLayer.push(arguments)}
                    gtag("js", new Date()); gtag("config", "UA-203015581-1");
                </script> */}
                    </Head>
                    <Script async src="https://www.googletagmanager.com/gtag/js?id=UA-203015581-1" />
                    {getLayout(<Component {...pageProps} />)}
                </QueryClientProvider>
            </ChakraProvider>
        </StoreProvider>
    )
}
export default MyApp
