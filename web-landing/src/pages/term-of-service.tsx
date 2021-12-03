import Metadata from "@components/shared/Metadata"
import NewsLayout from "@components/UI/NewsLayout"
import TermOfServiceUI from "@components/UI/TermOfService"
import { ReactElement } from "react"
import { NextPageWithLayout } from "./_app"

const NFTPage: NextPageWithLayout = () => {
    return (
        <>
            <Metadata title="Terms of Service | Sipher" description="Read about Sipher's terms of service" />
            <TermOfServiceUI />
        </>
    )
}
NFTPage.getLayout = (page: ReactElement) => {
    return <NewsLayout>{page}</NewsLayout>
}
export default NFTPage
