import config from "./config";
import axios from "axios";
import { SMARTCONTRACT_SALE_NEKO, SMARTCONTRACT_NEKO } from "../utils/key_auth";

//check smartcontract in BE
export const checkSmartContract = async (publicAddress) => {
	let address = publicAddress.toLowerCase();

	const { data } = await axios.get(
		`/sc/checkSC?nftContractAddress=${SMARTCONTRACT_NEKO}&saleContractAddress=${SMARTCONTRACT_SALE_NEKO}&WalletAddress=${address}`,
		config
	);

	return data.message;
};

//check whitelist on private sale
export const checkgas = async () => {
	const { data } = await axios.get(`/neko-sc/checkgas`, config);
	return data.message;
};

//check whitelisted
export const checkIsWhitelisted = async (publicAddress) => {
	const { data } = await axios.get(
		`/neko-sc/checkWhiteList?saleContractAddress=${SMARTCONTRACT_SALE_NEKO}&WalletAddress=${publicAddress}`,
		config
	);
	return data.message.proof;
};
