import { NextPageWithLayout } from "@pages/_app"
import { ReactElement } from "react"
import Head from "next/head"
import TeamAndCulture from "@components/UI/AboutUsPage/TeamAndCulture"
import AboutUsLayout from "@components/UI/AboutUsLayout"
const AboutUsPage: NextPageWithLayout = () => {
    return <TeamAndCulture />
}

AboutUsPage.getLayout = (page: ReactElement) => {
    return (
        <>
            <Head>
                <title>{`Team & Culture | Sipher`}</title>
            </Head>
            <AboutUsLayout>{page}</AboutUsLayout>
        </>
    )
}

export default AboutUsPage
