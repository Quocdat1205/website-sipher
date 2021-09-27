import config from "./config"
import axios from "axios"

export const getListNFT = async (publicAddress, from, to, type) => {
	const { data } = await axios.get(
		`/nft/get-list-nft?publicAddress=${publicAddress}&min=${from}&max=${to}&type=${type}`,
		config
	)
	if (data.success && data.message.data.length > 0) {
		return data.message
	} else {
		return []
	}
}

//get info nft by id
export const getInfoNFT = async (publicAddress, id, type) => {
	const { data } = await axios.get(`/nft/get-nft?publicAddress=${publicAddress}&id=${id}&race=${type}`, config)

	return data.message
}

export const getMerkle = async (type,id) => {
	const { data } = await axios.get(`/${type.toLowerCase()}-sc/merkle/${id}`, config)
	return data
}

//change emotion
export const changeEmotion = async (accessToken, id, emotion, publicAddress, race) => {
	const { data } = await axios.post(
		`/nft/change-emotion`,
		{
			id,
			emotion,
			publicAddress,
			race,
		},
		{
			baseURL: config.baseURL,
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		}
	)
	return data
}
