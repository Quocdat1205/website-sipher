import { NextPageWithLayout } from "@pages/_app"
import { ReactElement } from "react"
import WhySipherUI from "@components/UI/WhySipherPage"
import Factions from "@components/UI/WhySipherPage/Factions"
import Head from "next/head"
import WhySipherLayout from "@components/UI/WhySipherLayout"
const WhySipherPage: NextPageWithLayout = () => {
    return <Factions />
}

WhySipherPage.getLayout = (page: ReactElement) => {
    return (
        <>
            <Head>
                <title>Why Sipher</title>
            </Head>
            <WhySipherLayout>
                <WhySipherUI>{page}</WhySipherUI>
            </WhySipherLayout>
        </>
    )
}

export default WhySipherPage
