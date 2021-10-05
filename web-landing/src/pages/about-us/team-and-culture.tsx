import { NextPageWithLayout } from "@pages/_app"
import { ReactElement } from "react"
import Head from "next/head"
import AboutUsUI from "@components/UI/AboutUsPage"
import TeamAndCulture from "@components/UI/AboutUsPage/TeamAndCulture"
import AboutUsLayout from "@components/UI/AboutUsLayout"
const AboutUsPage: NextPageWithLayout = () => {
	return <TeamAndCulture />
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
