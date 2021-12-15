import Head from "next/head"
import { ReactElement } from "react"
import { NextPageWithLayout } from "@pages/_app"
import InventoryLayout from "@components/UI/InventoryLayout"
import Airdrops from "@components/UI/Dashboard/Airdrops"

const InventoryPage: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Airdrops</title>
            </Head>
            <Airdrops />
        </>
    )
}

InventoryPage.getLayout = (page: ReactElement) => {
    return <InventoryLayout>{page}</InventoryLayout>
}
export default InventoryPage
