import { NextPageWithLayout } from "@pages/_app"
import { ReactElement } from "react"
import Careers from "@components/UI/AboutUsPage/Careers"
import AboutUsLayout from "@components/UI/AboutUsLayout"
import Metadata from "@components/shared/Metadata"
const AboutUsPage: NextPageWithLayout = () => {
    return (
        <>
            <Metadata title="Careers | Sipher" description="Get to know us and Sipher more!" />
            <Careers />
        </>
    )
}

AboutUsPage.getLayout = (page: ReactElement) => {
    return <AboutUsLayout>{page}</AboutUsLayout>
}

export default AboutUsPage
