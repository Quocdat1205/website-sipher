import Metadata from "@components/shared/Metadata"
import StakeOverview from "@components/UI/Stake/Overview"
import StakeLayout from "@components/UI/StakeLayout"
import { ReactElement } from "react"
import { NextPageWithLayout } from "../_app"

const Overview: NextPageWithLayout = () => {
    return (
        <>
            <Metadata title="Stake Overview | Sipher" description="Sipher token staking" />
            <StakeOverview />
        </>
    )
}
Overview.getLayout = (page: ReactElement) => {
    return <StakeLayout>{page}</StakeLayout>
}
export default Overview
