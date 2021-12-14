import Head from "next/head"
import { ReactElement } from "react"
import { NextPageWithLayout } from "@pages/_app"
import InventoryLayout from "@components/UI/InventoryLayout"
import NFTList from "@components/UI/Dashboard/Inventory/NFTList"

const InventoryPage: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Inventory: NEKO | Sipher</title>
            </Head>
            <NFTList race="NEKO" />
        </>
    )
}

InventoryPage.getLayout = (page: ReactElement) => {
    return <InventoryLayout>{page}</InventoryLayout>
}
export default InventoryPage
