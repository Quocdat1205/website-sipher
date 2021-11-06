import FagUI from "@components/UI/Faq"
import NewsLayout from "@components/UI/NewsLayout"
import React, { ReactElement } from "react"
import { NextPageWithLayout } from "./_app"
import Metadata from "@components/shared/Metadata"
const FagPage: NextPageWithLayout = () => {
    return (
        <>
            <Metadata title="FAQ | Sipher" description="Sipher's frequently asked questions" />
            <FagUI />
        </>
    )
}
FagPage.getLayout = (page: ReactElement) => {
    return <NewsLayout>{page}</NewsLayout>
}
export default FagPage
