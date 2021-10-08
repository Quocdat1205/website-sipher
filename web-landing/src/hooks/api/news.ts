import config from "./config"
import axios from "axios"

export const getListNews = async () => {
	const { data } = await axios.get(`/discord`, config)

	return data.success ? data.data : []
}
