import Home from "@components/UI/Home"
import MainLayout from "@components/UI/MainLayout"
import { ReactElement } from "react"

type HomePageProps = {}

const HomePage = ({}: HomePageProps) => {
    return <Home mode="Characters" />
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
