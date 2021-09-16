import { NextPageWithLayout } from "@pages/_app"
import { ReactElement } from "react"
import WhySipherUI from "@components/UI/WhySipherPage"
import TheWorld from "@components/UI/WhySipherPage/TheWorld"
import Head from "next/head"
const WhySipherPage: NextPageWithLayout = () => {
    return <TheWorld />
}

WhySipherPage.getLayout = (page: ReactElement) => {
    return (
        <>
            <Head>
                <title>Why Sipher</title>
            </Head>
            <WhySipherUI>{page}</WhySipherUI>
        </>
    )
}

export default WhySipherPage
