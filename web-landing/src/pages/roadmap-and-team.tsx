import RoadmapAndTeam from "@components/UI/RoadmapAndTeam"
import Head from "next/head"
import { ReactElement } from "react"
import MainLayout from "@components/UI/MainLayout"
import { NextPageWithLayout } from "./_app"
const RoadMapAndTeamPage: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Roadmap and team</title>
            </Head>
            <RoadmapAndTeam />
        </>
    )
}
RoadMapAndTeamPage.getLayout = (page: ReactElement) => {
    return <MainLayout>{page}</MainLayout>
}
export default RoadMapAndTeamPage
