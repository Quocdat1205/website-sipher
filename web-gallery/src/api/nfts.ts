import axios from "axios";
import config from "./config";

//get list nft on user

export const getAllNFTs = async (value: string, from: number, to: number) => {
	const { data } = await axios.get(`/search?max=${to}&min=${from}&value_search=${value}`, config);
	return data;
};

//get info nft by id
export const getNFTId = async (id: string) => {
	const { data } = await axios.get(`/details/${id}`, config);

	return data;
};

export const getMerkle = async (id: string) => {
	const { data } = await axios.get(`/sc/merkle/${id}`, config);
	return data;
};
