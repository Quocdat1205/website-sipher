// @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from "next/document"
import { GA_TRACKING_ID } from "../lib/gtag"

const isProduction = process.env.NODE_ENV === "production"
class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <base target="_blank" />

                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    {/* <link
                        href="https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
                        rel="stylesheet"
                    /> */}
                    <link rel="preload" href="/fonts/BrandonGrotesque/main.otf" as="font" crossOrigin="" />
                    <link rel="preload" href="/fonts/MarkPro/MARKPRO-BOLD.OTF" as="font" crossOrigin="" />
                    <link rel="preload" href="/fonts/MarkPro/MARKPRO-MEDIUM.OTF" as="font" crossOrigin="" />
                    <link rel="preload" href="/fonts/MarkPro/MARKPRO-REGULAR.OTF" as="font" crossOrigin="" />
                    {/* <link rel="preload" href="/fonts/MarkPro/MARKPRO-BOOK.OTF" as="font" crossOrigin="" /> */}
                    {isProduction && (
                        <>
                            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
                            <script
                                // eslint-disable-next-line react/no-danger
                                dangerouslySetInnerHTML={{
                                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
                                }}
                            />
                        </>
                    )}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
