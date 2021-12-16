import Metadata from "@components/shared/Metadata"
import HomePage from "@components/UI/Home"
import MainLayout from "@components/UI/MainLayout"
import { ReactElement } from "react"
import { NextPageWithLayout } from "./_app"

const CharacterPage: NextPageWithLayout = () => {
    return (
        <>
            <Metadata title="Characters | Sipher" description="" />
            <HomePage mode="Characters" />
        </>
    )
}
CharacterPage.getLayout = (page: ReactElement) => {
    return <MainLayout>{page}</MainLayout>
}
export default CharacterPage
