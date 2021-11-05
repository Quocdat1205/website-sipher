import { getTotalSupply } from "@helper/smartContract"
import { useQuery } from "react-query"

interface ITotalSupply {
    totalSupply: number
    isLoading: boolean
}

const useTotalSupply = (): ITotalSupply => {
    const { data: totalSupply, isLoading } = useQuery("total-supply", getTotalSupply, {
        initialData: 0,
        refetchInterval: 2500,
    })

    return { totalSupply, isLoading } as ITotalSupply
}

export default useTotalSupply
