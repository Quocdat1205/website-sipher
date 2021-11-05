import { getMaxPublicSaleCap } from "@helper/smartContract"
import { useQuery } from "react-query"

interface IPublicCapLimit {
    publicSaleCapLimit: number
    isLoadingCapLimit: boolean
}

const usePublicCapLimit = (): IPublicCapLimit => {
    const { data: publicSaleCapLimit, isLoading: isLoadingCapLimit } = useQuery(
        "public-sale-cap-limit",
        getMaxPublicSaleCap
    )

    return { publicSaleCapLimit, isLoadingCapLimit } as IPublicCapLimit
}

export default usePublicCapLimit
