import NewsLayout from "@components/UI/NewsLayout"
import React, { ReactElement } from "react"
import { NextPageWithLayout } from "./_app"
import Metadata from "@components/shared/Metadata"
import dynamic from "next/dynamic"

const DynamicFagUI = dynamic(() => import("@components/UI/Faq"))

const FagPage: NextPageWithLayout = () => {
    return (
        <>
            <Metadata title="FAQ | Sipher" description="Sipher's frequently asked questions" />
            <DynamicFagUI />
        </>
    )
}
FagPage.getLayout = (page: ReactElement) => {
    return <NewsLayout>{page}</NewsLayout>
}
export default FagPage
