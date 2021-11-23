import Home from "@components/UI/HomePage"
import NewsLayout from "@components/UI/NewsLayout"
import { ReactElement } from "react"

import { NextPageWithLayout } from "./_app"

type HomePageProps = NextPageWithLayout & {
    uaString: string
}

const HomePage = ({ uaString }: HomePageProps) => {
    return <Home uaString={uaString} />
}

HomePage.getLayout = (page: ReactElement) => {
    return <NewsLayout>{page}</NewsLayout>
}

export default HomePage
export function getServerSideProps(context) {
    return {
        props: {
            uaString: context.req.headers["user-agent"],
        },
    }
}
