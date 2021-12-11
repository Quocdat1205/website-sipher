import Detail from "@components/UI/Inventory/Detail"
import InventoryLayout from "@components/UI/InventoryLayout"
import { ReactElement } from "react"

const InuInventoryDetail = () => {
    return <Detail race="INU" />
}

InuInventoryDetail.getLayout = (page: ReactElement) => {
    return <InventoryLayout>{page}</InventoryLayout>
}

export default InuInventoryDetail
