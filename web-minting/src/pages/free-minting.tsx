import Head from "next/head"
import { ReactElement } from "react"
import { NextPageWithLayout } from "@pages/_app"
import MainLayout from "@components/UI/MainLayout"
import Sale from "@components/UI/Sale"

const FreeMinting: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Free Minting</title>
            </Head>
            <Sale mode="freeMint" />
        </>
    )
}

FreeMinting.getLayout = (page: ReactElement) => {
    return <MainLayout>{page}</MainLayout>
}
export default FreeMinting
