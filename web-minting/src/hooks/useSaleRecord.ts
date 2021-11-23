import { getSaleRecord, SaleRecord } from "@helper"
import { useQuery } from "react-query"

export const useSaleRecord = () => {
    const { data: saleRecord } = useQuery("sale-record", getSaleRecord, {
        initialData: {
            publicSale: 0,
            privateSale: 0,
            freeMint: 0,
        },
        refetchInterval: 1000,
    })
    return saleRecord as SaleRecord
}

export default useSaleRecord
