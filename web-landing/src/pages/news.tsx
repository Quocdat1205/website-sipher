import Metadata from "@components/shared/Metadata"
import NewsLayout from "@components/UI/NewsLayout"
import NewsUI from "@components/UI/NewsPage"
import Head from "next/head"
import { ReactElement } from "react"
import { NextPageWithLayout } from "./_app"

const NewsPage: NextPageWithLayout = () => {
    return (
        <>
            <Metadata title="News" description="Sipheria worlds news at your fingertips!" />
            <NewsUI />
        </>
    )
}
NewsPage.getLayout = (page: ReactElement) => {
    return <NewsLayout>{page}</NewsLayout>
}
export default NewsPage
