import Metadata from "@components/shared/Metadata"
import NewsLayout from "@components/UI/NewsLayout"
import dynamic from "next/dynamic"
import { ReactElement } from "react"
import { NextPageWithLayout } from "./_app"

const DynamicWorldOfSipherUI = dynamic(() => import("@components/UI/WorldOfSipherPage"))

const WordSipherPage: NextPageWithLayout = () => {
    return (
        <>
            <Metadata
                title="World Of Sipher | Sipher"
                description="Learn why we're the next awesome blockchain game you'll play!"
            />
            <DynamicWorldOfSipherUI />
        </>
    )
}
WordSipherPage.getLayout = (page: ReactElement) => {
    return <NewsLayout>{page}</NewsLayout>
}
export default WordSipherPage
