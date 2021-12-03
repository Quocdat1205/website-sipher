import { useQuery } from "react-query"
import fetcher from "./fetcher"

export const getPrice = async (): Promise<number> => {
    const { data } = await fetcher.get("/smartcontract/check-price")
    return data.message.data.sipher.usd
}

export const useSipherPrice = () => {
    const { data } = useQuery("sipher-price", getPrice, {
        initialData: 0,
    })

    return data as number
}
