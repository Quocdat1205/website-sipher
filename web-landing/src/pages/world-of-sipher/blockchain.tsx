import { NextPageWithLayout } from "@pages/_app"
import { ReactElement } from "react"
import Head from "next/head"
import WorldOfSipherUI from "@components/UI/WorldOfSipherPage"
import MainLayout from "@components/UI/MainLayout"
import Blockchain from "@components/UI/WorldOfSipherPage/Blockchain"
const WorldOfSipherPage: NextPageWithLayout = () => {
	return <Blockchain />
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
