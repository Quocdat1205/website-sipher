import MainLayout from "@components/UI/MainLayout"
import NFTUI from "@components/UI/NFTPage"
import Head from "next/head"
import { ReactElement } from "react"
import { NextPageWithLayout } from "./_app"

const NFTPage: NextPageWithLayout = () => {
	return <NFTUI />
}
NFTPage.getLayout = (page: ReactElement) => {
	return (
		<>
			<Head>
				<title>NFT</title>
			</Head>
			<MainLayout>{page}</MainLayout>
		</>
	)
}
export default NFTPage
