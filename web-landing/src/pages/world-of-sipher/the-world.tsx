import { NextPageWithLayout } from "@pages/_app"
import { ReactElement } from "react"
import Head from "next/head"
import WorldOfSipherUI from "@components/UI/WorldOfSipherPage"
import TheWorld from "@components/UI/WorldOfSipherPage/TheWorld"
import MainLayout from "@components/UI/MainLayout"
const WorldOfSipherPage: NextPageWithLayout = () => {
	return <TheWorld />
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
