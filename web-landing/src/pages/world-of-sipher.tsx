import Metadata from "@components/shared/Metadata"
import NewsLayout from "@components/UI/NewsLayout"
import WorldOfSipherUI from "@components/UI/WorldOfSipherPage"
import { ReactElement } from "react"
import { NextPageWithLayout } from "./_app"

const WordSipherPage: NextPageWithLayout = () => {
    return (
        <>
            <Metadata
                title="World Of Sipher"
                description="Learn why we're the next awesome blockchain game you'll play!"
            />
            <WorldOfSipherUI />
        </>
    )
}
WordSipherPage.getLayout = (page: ReactElement) => {
    return <NewsLayout>{page}</NewsLayout>
}
export default WordSipherPage
