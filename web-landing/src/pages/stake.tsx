import Metadata from "@components/shared/Metadata"
import NewsLayout from "@components/UI/NewsLayout"
import Stake from "@components/UI/Stake"
import { ReactElement } from "react"
import { NextPageWithLayout } from "./_app"

const StakePage: NextPageWithLayout = () => {
    return (
        <>
            <Metadata title="Stake | Sipher" description="Stake" />
            <Stake />
        </>
    )
}
StakePage.getLayout = (page: ReactElement) => {
    return <NewsLayout>{page}</NewsLayout>
}
export default StakePage
