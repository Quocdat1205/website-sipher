import NewsLayout from "@components/UI/NewsLayout"
import NewsUI from "@components/UI/NewsPage"
import Head from "next/head"
import { ReactElement } from "react"
import { NextPageWithLayout } from "./_app"

const NewsPage: NextPageWithLayout = () => {
	return <NewsUI />
}
NewsPage.getLayout = (page: ReactElement) => {
	return (
		<>
			<Head>
				<title>News</title>
			</Head>
			<NewsLayout>{page}</NewsLayout>
		</>
	)
}
export default NewsPage
