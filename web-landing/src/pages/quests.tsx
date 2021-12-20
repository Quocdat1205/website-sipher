import Metadata from "@components/shared/Metadata"
import Quest from "@components/UI/Quest"
import { ReactElement } from "react"
import { NextPageWithLayout } from "./_app"
import LeaderLayout from "@components/UI/LeaderLayout"

const LeaderBoardPage: NextPageWithLayout = () => {
    return (
        <>
            <Metadata title="Quest | Sipher" description="Quest" />
            <Quest />
        </>
    )
}
LeaderBoardPage.getLayout = (page: ReactElement) => {
    return <LeaderLayout>{page}</LeaderLayout>
}
export default LeaderBoardPage
