import Metadata from "@components/shared/Metadata"
import NFTList from "@components/UI/Inventory/NFTList"
import InventoryLayout from "@components/UI/InventoryLayout"
import { NextPageWithLayout } from "@pages/_app"
import { ReactElement } from "react"

const StakePage: NextPageWithLayout = () => {
    return (
        <>
            <Metadata title="Inventory | Sipher" description="Stake" />
            <NFTList race="INU" />
        </>
    )
}
StakePage.getLayout = (page: ReactElement) => {
    return <InventoryLayout>{page}</InventoryLayout>
}
export default StakePage
