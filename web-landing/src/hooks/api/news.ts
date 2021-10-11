import config from "./config"
import axios from "axios"

export const getListNews = async (to: number, from: number) => {
	const { data } = await axios.get(`/discord?min=${to}&max=${from}`, config)

	return data.success ? data.data : []
}
