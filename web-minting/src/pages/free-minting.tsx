import Head from "next/head"
import { ReactElement } from "react"
import { NextPageWithLayout } from "@pages/_app"
import MainLayout from "@components/UI/MainLayout"
import PrivateSale from "@components/UI/PrivateSale"

const FreeMinting: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Free Minting | Sipher</title>
            </Head>
            <PrivateSale mode="FREE_MINTING" />
        </>
    )
}

FreeMinting.getLayout = (page: ReactElement) => {
    return <MainLayout>{page}</MainLayout>
}
export default FreeMinting
