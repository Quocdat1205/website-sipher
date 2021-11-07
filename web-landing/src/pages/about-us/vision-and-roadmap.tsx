import { NextPageWithLayout } from "@pages/_app"
import { ReactElement } from "react"
import VisionAndRoadMap from "@components/UI/AboutUsPage/VisionAndRoadMap"
import AboutUsLayout from "@components/UI/AboutUsLayout"
import Metadata from "@components/shared/Metadata"
const AboutUsPage: NextPageWithLayout = () => {
    return (
        <>
            <Metadata title="Vision & Roadmap | Sipher" description="Get to know us and Sipher more!" />
            <VisionAndRoadMap />
        </>
    )
}

AboutUsPage.getLayout = (page: ReactElement) => {
    return <AboutUsLayout>{page}</AboutUsLayout>
}

export default AboutUsPage
