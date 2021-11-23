import Metadata from "@components/shared/Metadata"
import NewsLayout from "@components/UI/NewsLayout"
import Swap from "@components/UI/Swap"
import { ReactElement } from "react"
import { NextPageWithLayout } from "./_app"

const SwapPage: NextPageWithLayout = () => {
    return (
        <>
            <Metadata title="Swap | Sipher" description="Swap" />
            <Swap />
        </>
    )
}
SwapPage.getLayout = (page: ReactElement) => {
    return <NewsLayout>{page}</NewsLayout>
}
export default SwapPage
