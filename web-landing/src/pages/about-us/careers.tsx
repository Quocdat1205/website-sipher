import { NextPageWithLayout } from "@pages/_app"
import { ReactElement } from "react"
import Head from "next/head"
import Careers from "@components/UI/AboutUsPage/Careers"
import AboutUsLayout from "@components/UI/AboutUsLayout"
const AboutUsPage: NextPageWithLayout = () => {
    return <Careers />
}

AboutUsPage.getLayout = (page: ReactElement) => {
    return (
        <>
            <Head>
                <title>Careers | Sipher</title>
            </Head>
            <AboutUsLayout>{page}</AboutUsLayout>
        </>
    )
}

export default AboutUsPage
