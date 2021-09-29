import Head from "next/head"
import { ReactElement } from "react"
import { NextPageWithLayout } from "@pages/_app"
import MainLayout from "@components/UI/MainLayout"
import Sale from "@components/UI/Sale"

const MintingPrivate: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Private Sale</title>
            </Head>
            <Sale mode="private" />
        </>
    )
}

MintingPrivate.getLayout = (page: ReactElement) => {
    return (
        <>
            <MainLayout>{page}</MainLayout>
        </>
    )
}
export default MintingPrivate
