import Metadata from "@components/shared/Metadata"
import MainLayout from "@components/UI/MainLayout"
import TermAndConditionsUI from "@components/UI/TermAndCondition"
import Head from "next/head"
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
    return <MainLayout>{page}</MainLayout>
}
export default NFTPage
