import config from "./config"
import axios from "axios"

export const getListNews = async () => {
	const { data } = await axios.get(`/communication`, config)

	return data
}

export const getDetailsNews = async (type, published) => {
	const { data } = await axios.get(`/communication/details?type=${type}&published=${published}`, config)

	return data
}
