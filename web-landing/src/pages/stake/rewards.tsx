import Metadata from "@components/shared/Metadata"
import Rewards from "@components/UI/Stake/Rewards"
import StakeLayout from "@components/UI/StakeLayout"
import { ReactElement } from "react"
import { NextPageWithLayout } from "../_app"

const RewardPage: NextPageWithLayout = () => {
    return (
        <>
            <Metadata title="Stake Reward | Sipher" description="Sipher token staking" />
            <Rewards />
        </>
    )
}
RewardPage.getLayout = (page: ReactElement) => {
    return <StakeLayout>{page}</StakeLayout>
}
export default RewardPage
