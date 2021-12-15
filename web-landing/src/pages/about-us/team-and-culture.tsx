import { NextPageWithLayout } from "@pages/_app"
import { ReactElement } from "react"
import TeamAndCulture from "@components/UI/AboutUsPage/TeamAndCulture"
import AboutUsLayout from "@components/UI/AboutUsLayout"
import Metadata from "@components/shared/Metadata"

const AboutUsPage: NextPageWithLayout = () => {
    return (
        <>
            <Metadata title="Team & Culture | Sipher" description="Get to know us and Sipher more!" />
            <TeamAndCulture />
        </>
    )
}

AboutUsPage.getLayout = (page: ReactElement) => {
    return <AboutUsLayout>{page}</AboutUsLayout>
}

export default AboutUsPage
