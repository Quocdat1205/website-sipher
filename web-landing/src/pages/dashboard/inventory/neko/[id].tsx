import Detail from "@components/UI/Dashboard/Inventory/Detail"
import InventoryLayout from "@components/UI/InventoryLayout"
import { ReactElement } from "react"

const InuInventoryDetail = () => {
    return <Detail race="NEKO" />
}

InuInventoryDetail.getLayout = (page: ReactElement) => {
    return <InventoryLayout>{page}</InventoryLayout>
}

export default InuInventoryDetail
