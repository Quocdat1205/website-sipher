import { NextPageWithLayout } from "@pages/_app"
import { ReactElement } from "react"
import Head from "next/head"
import MainLayout from "@components/UI/MainLayout"
import AboutUsUI from "@components/UI/AboutUsPage"
import TeamAndCulture from "@components/UI/AboutUsPage/TeamAndCulture"
const AboutUsPage: NextPageWithLayout = () => {
	return <TeamAndCulture />
}

AboutUsPage.getLayout = (page: ReactElement) => {
	return (
		<>
			<Head>
				<title>Team And Culture</title>
			</Head>
			<MainLayout>
				<AboutUsUI>{page}</AboutUsUI>
			</MainLayout>
		</>
	)
}

export default AboutUsPage
