import { NextPageWithLayout } from "@pages/_app"
import { ReactElement } from "react"
import Head from "next/head"
import WorldOfSipherUI from "@components/UI/WorldOfSipherPage"
import MainLayout from "@components/UI/MainLayout"
import Gameplay from "@components/UI/WorldOfSipherPage/Gameplay"
const WorldOfSipherPage: NextPageWithLayout = () => {
	return <Gameplay />
}

WorldOfSipherPage.getLayout = (page: ReactElement) => {
	return (
		<>
			<Head>
				<title>Team And Culture</title>
			</Head>
			<MainLayout>
				<WorldOfSipherUI>{page}</WorldOfSipherUI>
			</MainLayout>
		</>
	)
}

export default WorldOfSipherPage
