// @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from "next/document"

const isProduction = process.env.NODE_ENV === "production"
class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

                    <link rel="preload" href="/fonts/BrandonGrotesque/main.otf" as="font" crossOrigin="" />
                    <link rel="preload" href="/fonts/MarkPro/MARKPRO-BOLD.OTF" as="font" crossOrigin="" />
                    <link rel="preload" href="/fonts/MarkPro/MARKPRO-MEDIUM.OTF" as="font" crossOrigin="" />
                    <link rel="preload" href="/fonts/MarkPro/MARKPRO-REGULAR.OTF" as="font" crossOrigin="" />
                    <link rel="preload" href="/fonts/MarkPro/MARKPRO-BOOK.OTF" as="font" crossOrigin="" />
                    {/* {isProduction && (
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
                    )} */}
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
