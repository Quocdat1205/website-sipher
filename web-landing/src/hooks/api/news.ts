import config from "./config"
import axios from "axios"

export const getListNews = async (min: number, max: number) => {
	const { data } = await axios.get(`/communication?min=${min}&max=${max}`, config)

	return data
}

export const getDetailsNews = async (published) => {
	const { data } = await axios.get(`/communication/details?published=${published}`, config)

	return data
}
