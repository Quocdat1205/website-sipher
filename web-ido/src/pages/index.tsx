import MainLayout from "@components/UI/MainLayout"
import HomeUI from "@components/UI/HomeUI"
import { ReactElement } from "react"

import { NextPageWithLayout } from "./_app"

type HomePageProps = NextPageWithLayout & {
    uaString: string
}

const HomePage = ({ uaString }: HomePageProps) => {
    return <HomeUI uaString={uaString} />
}

HomePage.getLayout = (page: ReactElement) => {
    return <MainLayout>{page}</MainLayout>
}

export default HomePage
export function getServerSideProps(context) {
    return {
        props: {
            uaString: context.req.headers["user-agent"],
        },
    }
}
