import Metadata from "@components/shared/Metadata"
import NewsLayout from "@components/UI/NewsLayout"
import FormStake from "@components/UI/Stake/FormStake"
import { ReactElement } from "react"
import { NextPageWithLayout } from "../_app"

const StakePage: NextPageWithLayout = () => {
    return (
        <>
            <Metadata title="Stake | Sipher/ETH" description="Form Stake" />
            <FormStake type="SIPHER/ETH" />
        </>
    )
}
StakePage.getLayout = (page: ReactElement) => {
    return <NewsLayout>{page}</NewsLayout>
}
export default StakePage