import Head from "next/head"
import { ReactElement } from "react"
import { NextPageWithLayout } from "@pages/_app"
import MainLayout from "@components/UI/MainLayout"
import Rewards from "@components/UI/Rewards"

const RewardsPage: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Rewards | Sipher</title>
            </Head>
            <Rewards />
        </>
    )
}

RewardsPage.getLayout = (page: ReactElement) => {
    return <MainLayout>{page}</MainLayout>
}
export default RewardsPage
