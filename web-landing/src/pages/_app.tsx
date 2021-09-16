import { Flex, ChakraProvider } from "@chakra-ui/react"
import { NavBar } from "@components/shared"
import theme from "@constant/theme"
import store from "@store"
import { StoreProvider } from "easy-peasy"
import { NextPage } from "next"
import type { AppProps } from "next/app"
import Head from "next/head"
import { ReactElement, ReactNode } from "react"
import Script from "next/script"
import "../styles/main.css"

export type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout || (page => page)
    return (
        <StoreProvider store={store}>
            <ChakraProvider theme={theme}>
                <Head>
                    <meta charSet="utf-8" />
                    <link rel="icon" href="/images/general/logo_web.jpg" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="theme-color" content="#000000" />
                    <meta name="description" content="NFTs & games project" />
                    <link rel="apple-touch-icon" href="/images/general/logo_web.jpg" />
                    <title>Sipher</title>
                    <meta
                        name="description"
                        content="Sipher is a blockchain PvP PvE MOBA game for all age group. All players assets and achievements are NFTs. Exclusive characters launch coming soon!  "
                    />
                    <meta itemProp="name" content="Welcome to Sipher" />
                    <meta
                        itemProp="description"
                        content="Sipher is a blockchain PvP PvE MOBA game for all age group. All players assets and achievements are NFTs. Exclusive characters launch coming soon!  "
                    />
                    <meta itemProp="image" content="https://sipher.xyz/images/logo.jpg" />
                    <meta property="og:url" content="https://sipher.xyz" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Welcome to Sipher" />
                    <meta
                        property="og:description"
                        content="Sipher is a blockchain PvP PvE MOBA game for all age group. All players assets and achievements are NFTs. Exclusive characters launch coming soon!  "
                    />
                    <meta property="og:image" content="https://sipher.xyz/images/logo.jpg" />
                    <meta name="twitter:card" content="Welcome_to_Sipher" />
                    <meta name="twitter:title" content="Welcome to Sipher" />
                    <meta
                        name="twitter:description"
                        content="Sipher is a blockchain PvP PvE MOBA game for all age group. All players assets and achievements are NFTs. Exclusive characters launch coming soon!  "
                    />
                    <meta name="twitter:image" content="https://sipher.xyz/images/logo.jpg" />
                    {/* <script>
                    window.dataLayer = window.dataLayer || []; function gtag(){" "}
                    {(window as any).dataLayer.push(arguments)}
                    gtag("js", new Date()); gtag("config", "UA-203015581-1");
                </script> */}
                </Head>
                <Script async src="https://www.googletagmanager.com/gtag/js?id=UA-203015581-1" />
                {/* <Flex h="100vh" w="full" direction="column" overflow="hidden" color="whiteAlpha.900">
                    <NavBar />
                    <Flex flex={1} overflow="hidden">
                        {getLayout(<Component {...pageProps} />)}
                    </Flex>
                </Flex> */}
                {getLayout(<Component {...pageProps} />)}
            </ChakraProvider>
        </StoreProvider>
    )
}
export default MyApp
