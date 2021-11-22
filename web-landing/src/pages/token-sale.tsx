import Metadata from "@components/shared/Metadata"
import NewsLayout from "@components/UI/NewsLayout"
import TokenSale from "@components/UI/TokenSale"
import { ReactElement } from "react"
import { NextPageWithLayout } from "./_app"

const TokenSalePage: NextPageWithLayout = () => {
    return (
        <>
            <Metadata title="Token Sale | Sipher" description="Token Sale" />
            <TokenSale />
        </>
    )
}
TokenSalePage.getLayout = (page: ReactElement) => {
    return <NewsLayout>{page}</NewsLayout>
}
export default TokenSalePage
