import MainLayout from "@components/UI/MainLayout"
import Sales from "@components/UI/SalesPage"
import Head from "next/head"
import { ReactElement } from "react"
import { NextPageWithLayout } from "./_app"
const SalesPage: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Sales</title>
            </Head>
            <Sales />
        </>
    )
}
SalesPage.getLayout = (page: ReactElement) => {
    return <MainLayout>{page}</MainLayout>
}
export default SalesPage
