import Head from "next/head"
import { ReactElement } from "react"
import { NextPageWithLayout } from "@pages/_app"
import MainLayout from "@components/UI/MainLayout"
import Leaderboard from "@components/UI/Leaderboard"

const LeaderBoardPage: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Leaderboard | Sipher</title>
            </Head>
            <Leaderboard />
        </>
    )
}

LeaderBoardPage.getLayout = (page: ReactElement) => {
    return <MainLayout>{page}</MainLayout>
}
export default LeaderBoardPage
