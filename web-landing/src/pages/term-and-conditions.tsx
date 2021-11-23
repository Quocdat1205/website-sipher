import Metadata from "@components/shared/Metadata"
import NewsLayout from "@components/UI/NewsLayout"
import TermAndConditionsUI from "@components/UI/TermAndCondition"
import { ReactElement } from "react"
import { NextPageWithLayout } from "./_app"

const NFTPage: NextPageWithLayout = () => {
    return (
        <>
            <Metadata title="Term And Conditions | Sipher" description="Read about Sipher's term and conditions" />
            <TermAndConditionsUI />
        </>
    )
}
NFTPage.getLayout = (page: ReactElement) => {
    return <NewsLayout>{page}</NewsLayout>
}
export default NFTPage
