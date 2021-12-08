import { useQuery } from "react-query"
import fetcher from "./fetcher"

export const getSipherPrice = async (): Promise<number> => {
    const { data } = await fetcher.get("/smartcontract/check-price")
    return data.message.data.sipher.usd
}

export const getETHPrice = async (): Promise<number> => {
    const { data } = await fetcher.get("/smartcontract/check-price")
    return data.message.data.ethereum.usd
}

export const useSipherPrice = () => {
    const { data } = useQuery("sipher-price", getSipherPrice, {
        initialData: 0,
    })

    return data as number
}

export const useETHPrice = () => {
    const { data } = useQuery("eth-price", getETHPrice, {
        initialData: 0,
    })

    return data as number
}
