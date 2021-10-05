import { NextPageWithLayout } from "@pages/_app"
import { ReactElement } from "react"
import Head from "next/head"
import AboutUsUI from "@components/UI/AboutUsPage"
import Careers from "@components/UI/AboutUsPage/Careers"
import AboutUsLayout from "@components/UI/AboutUsLayout"
const AboutUsPage: NextPageWithLayout = () => {
	return <Careers />
}

AboutUsPage.getLayout = (page: ReactElement) => {
	return (
		<>
			<Head>
				<title>Team And Culture</title>
			</Head>
			<AboutUsLayout>
				<AboutUsUI>{page}</AboutUsUI>
			</AboutUsLayout>
		</>
	)
}

export default AboutUsPage
