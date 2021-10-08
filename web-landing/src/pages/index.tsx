import HomeLayout from "@components/UI/HomeLayout"
import Home from "@components/UI/HomePage"
import MainLayout from "@components/UI/MainLayout"
import { ReactElement } from "react"

import { NextPageWithLayout } from "./_app"

const HomePage: NextPageWithLayout = () => {
    return <Home />
}
HomePage.getLayout = (page: ReactElement) => {
    return <HomeLayout>{page}</HomeLayout>
}
export default HomePage
