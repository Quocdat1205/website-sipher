import TermAndConditionUI from "@components/UI/TermAndCondition"
import Head from "next/head"
import SalesPage from "./sales"
import { ReactElement } from "react"
import MainLayout from "@components/UI/MainLayout"
import { NextPageWithLayout } from "./_app"
const TermAndConditionPage: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Term and condition</title>
            </Head>
            <TermAndConditionUI />
        </>
    )
}
SalesPage.getLayout = (page: ReactElement) => {
    return <MainLayout>{page}</MainLayout>
}
export default TermAndConditionPage
