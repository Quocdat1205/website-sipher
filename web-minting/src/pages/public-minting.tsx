import Head from "next/head"
import MainLayout from "@components/UI/MainLayout"
import { ReactElement } from "react"
import { NextPageWithLayout } from "@pages/_app"
import Sale from "@components/UI/Sale"

const MintingPublic: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Public Sale</title>
            </Head>
            <Sale mode="public" />
        </>
    )
}

MintingPublic.getLayout = (page: ReactElement) => {
    return (
        <>
            <MainLayout>{page}</MainLayout>
        </>
    )
}
export default MintingPublic
