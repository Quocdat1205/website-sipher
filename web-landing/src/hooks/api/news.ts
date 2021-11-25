import axios from "axios"
import fetcher from "./fetcher"

export const getListNews = async (min: number, max: number) => {
    const { data } = await fetcher.get(`/communication/user?min=${min}&max=${max}`)

    return data
}

export const getDetailsNews = async published => {
    const { data } = await fetcher.get(`/communication/user-details?published=${published}`)

    return data
}
