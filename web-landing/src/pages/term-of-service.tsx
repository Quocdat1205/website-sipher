import Metadata from "@components/shared/Metadata"
import NewsLayout from "@components/UI/NewsLayout"
import { ReactElement } from "react"
import { NextPageWithLayout } from "./_app"
import dynamic from "next/dynamic"

const DynamicTermOfServiceUI = dynamic(() => import("@components/UI/TermOfService"))

const NFTPage: NextPageWithLayout = () => {
    return (
        <>
            <Metadata title="Terms of Service | Sipher" description="Read about Sipher's terms of service" />
            <DynamicTermOfServiceUI />
        </>
    )
}
NFTPage.getLayout = (page: ReactElement) => {
    return <NewsLayout>{page}</NewsLayout>
}
export default NFTPage
