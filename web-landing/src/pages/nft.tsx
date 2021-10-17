import Metadata from "@components/shared/Metadata"
import MainLayout from "@components/UI/MainLayout"
import NFTUI from "@components/UI/NFTPage"
import Head from "next/head"
import { ReactElement } from "react"
import { NextPageWithLayout } from "./_app"

const NFTPage: NextPageWithLayout = () => {
    return (
        <>
            <Metadata title="NFT" description="Find all of our characters within clicks!" />
            <NFTUI />
        </>
    )
}
NFTPage.getLayout = (page: ReactElement) => {
    return <MainLayout>{page}</MainLayout>
}
export default NFTPage
