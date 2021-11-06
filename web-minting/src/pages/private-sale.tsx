import Head from "next/head"
import { ReactElement } from "react"
import { NextPageWithLayout } from "@pages/_app"
import MainLayout from "@components/UI/MainLayout"
import PrivateSale from "@components/UI/PrivateSale"

const MintingPrivate: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Private Sale | Sipher</title>
            </Head>
            <PrivateSale mode="PRIVATE_SALE" />
        </>
    )
}

MintingPrivate.getLayout = (page: ReactElement) => {
    return <MainLayout>{page}</MainLayout>
}
export default MintingPrivate
