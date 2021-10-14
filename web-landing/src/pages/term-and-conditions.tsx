import MainLayout from "@components/UI/MainLayout"
import TermAndConditionsUI from "@components/UI/TermAndCondition"
import Head from "next/head"
import { ReactElement } from "react"
import { NextPageWithLayout } from "./_app"

const NFTPage: NextPageWithLayout = () => {
    return <TermAndConditionsUI />
}
NFTPage.getLayout = (page: ReactElement) => {
    return (
        <>
            <Head>
                <title>Term And Conditions</title>
            </Head>
            <MainLayout>{page}</MainLayout>
        </>
    )
}
export default NFTPage
