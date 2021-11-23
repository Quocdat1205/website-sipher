import { getMaxPublicSaleCap } from "@helper"
import { useQuery } from "react-query"

export const usePublicCapLimit = () => {
    const { data: publicSaleCapLimit, isLoading: isLoadingCapLimit } = useQuery(
        "public-sale-cap-limit",
        getMaxPublicSaleCap,
        {
            initialData: 0,
        }
    )

    return { publicSaleCapLimit, isLoadingCapLimit }
}

export default usePublicCapLimit
