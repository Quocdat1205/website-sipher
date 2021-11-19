import config from "./config"
import axios from "axios"

export const getListNews = async (min: number, max: number) => {
    const { data } = await axios.get(`/communication/user?min=${min}&max=${max}`, config)

    return data
}

export const getDetailsNews = async published => {
    const { data } = await axios.get(`/communication/user/details?published=${published}`, config)

    return data
}
