import Head from "next/head"
import MainLayout from "@components/UI/MainLayout"
import { ReactElement } from "react"
import { NextPageWithLayout } from "@pages/_app"
import PublicSale from "@components/UI/PublicSale"

const MintingPublic: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Public Sale | Sipher</title>
            </Head>
            <PublicSale />
        </>
    )
}

MintingPublic.getLayout = (page: ReactElement) => {
    return <MainLayout>{page}</MainLayout>
}
export default MintingPublic
