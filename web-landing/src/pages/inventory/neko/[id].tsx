import Detail from "@components/UI/Inventory/Detail"
import InventoryLayout from "@components/UI/InventoryLayout"
import { useRouter } from "next/router"
import { ReactElement } from "react"

interface InuInventoryDetailProps {}

const InuInventoryDetail = ({}: InuInventoryDetailProps) => {
    const router = useRouter()
    const { id } = router.query
    return <Detail race="NEKO" />
}

InuInventoryDetail.getLayout = (page: ReactElement) => {
    return <InventoryLayout>{page}</InventoryLayout>
}

export default InuInventoryDetail
