import Metadata from "@components/shared/Metadata"
import LeaderBoard from "@components/UI/LeaderBoard"
import { ReactElement } from "react"
import { NextPageWithLayout } from "./_app"
import LeaderLayout from "@components/UI/LeaderLayout"

const LeaderBoardPage: NextPageWithLayout = () => {
    return (
        <>
            <Metadata title="Token Sale | Sipher" description="Token Sale" />
            <LeaderBoard />
        </>
    )
}
LeaderBoardPage.getLayout = (page: ReactElement) => {
    return <LeaderLayout>{page}</LeaderLayout>
}
export default LeaderBoardPage
