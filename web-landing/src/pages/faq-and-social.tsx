import FaqAndSocialUI from "@components/UI/FaqAndSocialPage"
import MainLayout from "@components/UI/MainLayout"
import Head from "next/head"
import { ReactElement } from "react"
import { NextPageWithLayout } from "./_app"

const FaqAndSocialPage: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>FAQ and Social</title>
            </Head>
            <FaqAndSocialUI />
        </>
    )
}
FaqAndSocialPage.getLayout = (page: ReactElement) => {
    return <MainLayout>{page}</MainLayout>
}
export default FaqAndSocialPage
