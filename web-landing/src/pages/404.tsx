import NotFoundUI from "@components/UI/404"
import type { NextPage } from "next"
import Head from "next/head"
const LaboratoryPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Not found</title>
            </Head>
            <NotFoundUI />
        </>
    )
}

export default LaboratoryPage
