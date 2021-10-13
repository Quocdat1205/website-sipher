import NewsLayout from "@components/UI/NewsLayout"
import WorldOfSipherUI from "@components/UI/WorldOfSipherPage"
import Head from "next/head"
import { ReactElement } from "react"
import { NextPageWithLayout } from "./_app"

const WordSipherPage: NextPageWithLayout = () => {
	return <WorldOfSipherUI />
}
WordSipherPage.getLayout = (page: ReactElement) => {
	return (
		<>
			<Head>
				<title>World Sipher</title>
			</Head>
			<NewsLayout>{page}</NewsLayout>
		</>
	)
}
export default WordSipherPage
