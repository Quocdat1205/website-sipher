import Detail from "@components/UI/Inventory/Detail"
import InventoryLayout from "@components/UI/InventoryLayout"
import { useRouter } from "next/router"
import { ReactElement } from "react"

interface InuInventoryDetailProps {}

const InuInventoryDetail = ({}: InuInventoryDetailProps) => {
    return <Detail race="INU" />
}

InuInventoryDetail.getLayout = (page: ReactElement) => {
    return <InventoryLayout>{page}</InventoryLayout>
}

export default InuInventoryDetail
