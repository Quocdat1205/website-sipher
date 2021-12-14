import Metadata from "@components/shared/Metadata"
import NewsLayout from "@components/UI/NewsLayout"
import dynamic from "next/dynamic"
import { ReactElement } from "react"
import { NextPageWithLayout } from "./_app"

const DynamicNewsPage = dynamic(() => import("@components/UI/NewsPage"))

const NewsPage: NextPageWithLayout = () => {
    return (
        <>
            <Metadata title="News | Sipher" description="Sipheria worlds news at your fingertips!" />
            <DynamicNewsPage />
        </>
    )
}
NewsPage.getLayout = (page: ReactElement) => {
    return <NewsLayout>{page}</NewsLayout>
}
export default NewsPage
