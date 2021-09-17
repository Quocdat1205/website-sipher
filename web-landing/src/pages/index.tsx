import Home from "@components/UI/HomePage"
import MainLayout from "@components/UI/MainLayout"
import { ReactElement } from "react"

import { NextPageWithLayout } from "./_app"

const HomePage: NextPageWithLayout = () => {
    return <Home />
}
HomePage.getLayout = (page: ReactElement) => {
    return <MainLayout>{page}</MainLayout>
}
export default HomePage
