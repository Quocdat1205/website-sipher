import MainLayout from "@components/UI/MainLayout"
import NewsUI from "@components/UI/NewsPage"
import Head from "next/head"
import { ReactElement } from "react"
import { NextPageWithLayout } from "./_app"

const NFTPage: NextPageWithLayout = () => {
	return <NewsUI />
}
NFTPage.getLayout = (page: ReactElement) => {
	return (
		<>
			<Head>
				<title>News</title>
			</Head>
			<MainLayout>{page}</MainLayout>
		</>
	)
}
export default NFTPage
