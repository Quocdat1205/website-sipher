import Head from "next/head"

interface MetadataProps {
    title: string
    description: string
}

const Metadata = ({ title, description }: MetadataProps) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta itemProp="name" content={title} />
            <meta itemProp="description" content={description} />
            <meta itemProp="image" content="/images/general/main_icon.ico" />
            <meta property="og:url" content="https://sipher.xyz" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content="/images/general/logo512.png" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content="/images/general/logo512.png"></meta>
        </Head>
    )
}

export default Metadata
