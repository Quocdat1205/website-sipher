import { NextPageWithLayout } from "@pages/_app"
import { ReactElement } from "react"
import WhySipherUI from "@components/UI/WhySipherPage"
import Gameplay from "@components/UI/WhySipherPage/Gameplay"
import Head from "next/head"
import MainLayout from "@components/UI/MainLayout"
const WhySipherPage: NextPageWithLayout = () => {
    return <Gameplay />
}

WhySipherPage.getLayout = (page: ReactElement) => {
    return (
        <>
            <Head>
                <title>Why Sipher</title>
            </Head>
            <MainLayout>
                <WhySipherUI>{page}</WhySipherUI>
            </MainLayout>
        </>
    )
}

export default WhySipherPage
