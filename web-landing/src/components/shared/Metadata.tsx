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
            <meta property="og:image" content="/images/pc/home/NEKO_3D.png" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content="/images/pc/home/NEKO_3D.png"></meta>
            <meta name="facebook-domain-verification" content="p6bpisy84wqatdt647ul2y18t99ead" />
        </Head>
    )
}

export default Metadata
