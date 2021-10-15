import HomeLayout from "@components/UI/HomeLayout"
import Home from "@components/UI/HomePage"
import { ReactElement } from "react"

import { NextPageWithLayout } from "./_app"

type HomePageProps = NextPageWithLayout & {
    uaString: string
}

const HomePage = ({ uaString }: HomePageProps) => {
    return <Home uaString={uaString} />
}

HomePage.getLayout = (page: ReactElement) => {
    return <HomeLayout>{page}</HomeLayout>
}

export default HomePage
export function getServerSideProps(context) {
    return {
        props: {
            uaString: context.req.headers["user-agent"],
        },
    }
}
