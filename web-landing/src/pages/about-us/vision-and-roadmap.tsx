import { NextPageWithLayout } from "@pages/_app"
import { ReactElement } from "react"
import Head from "next/head"
import VisionAndRoadMap from "@components/UI/AboutUsPage/VisionAndRoadMap"
import AboutUsLayout from "@components/UI/AboutUsLayout"
const AboutUsPage: NextPageWithLayout = () => {
    return <VisionAndRoadMap />
}

AboutUsPage.getLayout = (page: ReactElement) => {
    return (
        <>
            <Head>
                <title>{`Vision & Roadmap`}</title>
            </Head>
            <AboutUsLayout>{page}</AboutUsLayout>
        </>
    )
}

export default AboutUsPage
