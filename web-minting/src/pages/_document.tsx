// @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from "next/document"

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
