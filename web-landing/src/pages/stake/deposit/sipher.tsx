import Metadata from "@components/shared/Metadata"
import Deposit from "@components/UI/Stake/Deposit"
import StakeLayout from "@components/UI/StakeLayout"
import { ReactElement } from "react"
import { NextPageWithLayout } from "../../_app"

const DepositPage: NextPageWithLayout = () => {
    return (
        <>
            <Metadata title="Deposit | Sipher" description="Sipher token staking" />
            <Deposit pool="$SIPHER" />
        </>
    )
}
DepositPage.getLayout = (page: ReactElement) => {
    return <StakeLayout>{page}</StakeLayout>
}
export default DepositPage
