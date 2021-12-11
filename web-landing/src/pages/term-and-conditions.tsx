import Metadata from "@components/shared/Metadata"
import NewsLayout from "@components/UI/NewsLayout"
import { ReactElement } from "react"
import { NextPageWithLayout } from "./_app"
import dynamic from "next/dynamic"

const DynamicTermAndConditionsUI = dynamic(() => import("@components/UI/TermAndCondition"))

const NFTPage: NextPageWithLayout = () => {
    return (
        <>
            <Metadata title="Term And Conditions | Sipher" description="Read about Sipher's term and conditions" />
            <DynamicTermAndConditionsUI />
        </>
    )
}
NFTPage.getLayout = (page: ReactElement) => {
    return <NewsLayout>{page}</NewsLayout>
}
export default NFTPage
