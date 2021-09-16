import LaboratoryUI from "@components/UI/LaboratoryPage"
import MainLayout from "@components/UI/MainLayout"
import Head from "next/head"
import { ReactElement } from "react"
import { NextPageWithLayout } from "./_app"
const LaboratoryPage: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Laboratory</title>
            </Head>
            <LaboratoryUI />
        </>
    )
}
LaboratoryPage.getLayout = (page: ReactElement) => {
    return <MainLayout>{page}</MainLayout>
}
export default LaboratoryPage
