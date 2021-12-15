import Metadata from "@components/shared/Metadata"
import StakeLayout from "@components/UI/StakeLayout"
import LeaderBoard from "@components/UI/LeaderBoard"
import { ReactElement } from "react"
import { NextPageWithLayout } from "./_app"

const LeaderBoardPage: NextPageWithLayout = () => {
    return (
        <>
            <Metadata title="Token Sale | Sipher" description="Token Sale" />
            <LeaderBoard />
        </>
    )
}
LeaderBoardPage.getLayout = (page: ReactElement) => {
    return <StakeLayout>{page}</StakeLayout>
}
export default LeaderBoardPage
