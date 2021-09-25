import axios from "axios";
import config from "./config";
import { SMARTCONTRACT_SALE, SMARTCONTRACT_NFT, LS_KEY } from "../utils/key_auth";

//get data user on address
export const getUsersByAddress = async (publicAddress) => {
	const { data } = await axios.get(`/login?publicAddress=${publicAddress}`, config);
	return data;
};

//user not data then user signup
export const signupUser = async (publicAddress) => {
	const { data } = await axios.post(`/login`, { publicAddress }, config);
	return data;
};

//request token on user
export const authenticateUser = async (publicAddress, signature) => {
	const {
		data: { accessToken },
	} = await axios.post("/login/authentication", { publicAddress, signature }, config);
	return accessToken;
};

// //not used
// export const getUserData = async (cookies) => {
//   const accessToken = cookies["login-with-metamask:auth"];
//   const {
//     payload: { id },
//   } = jwtDecode(accessToken);

//   const { data } = await axios.get(`/users/${id}`, {
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//     },
//   });
//   return data;
// };

//get list nft on user
export const getListNFT = async (publicAddress, page) => {
	const { data } = await axios.get(`/nft/get-list-nft?publicAddress=${publicAddress}&page=${page}`, config);
	if (data.success && data.message.data.length > 0) {
		return data.message;
	} else {
		return [];
	}
};

//get info nft by id
export const getInfoNFT = async (publicAddress, id, type) => {
	const { data } = await axios.get(`/nft/get-nft?publicAddress=${publicAddress}&id=${id}&race=${type}`, config);
	if (data.success) return data.message;
};

//check smartcontract in BE
export const checkSmartContract = async (publicAddress) => {
	let address = publicAddress.toLowerCase();

	const { data } = await axios.get(
		`/sc/checkSC?nftContractAddress=${SMARTCONTRACT_NFT}&saleContractAddress=${SMARTCONTRACT_SALE}&WalletAddress=${address}`,
		config
	);

	return data.message;
};

//check whitelist on private sale
export const checkgas = async () => {
	const { data } = await axios.get(`/neko-sc/checkgas`, config);
	return data.message;
};

export const getMerkle = async (id) => {
	const { data } = await axios.get(`/neko-sc/merkle/${id}`, config);
	return data;
};

//check whitelisted
export const checkIsWhitelisted = async (publicAddress) => {
	const { data } = await axios.get(
		`/neko-sc/checkWhiteList?saleContractAddress=${SMARTCONTRACT_SALE}&WalletAddress=${publicAddress}`,
		config
	);
	console.log(data);
	return data.message;
};

// export const logLocation = async (cookies) => {
// 	const accessToken = cookies[LS_KEY];
// 	const ipdata = await axios.get("https://geolocation-db.com/json/");
// 	const { data } = await axios.put(
// 		`/log`,
// 		{
// 			ip: ipdata.data.IPv4,
// 		},
// 		{
// 			baseURL: config.baseURL,
// 			headers: {
// 				Authorization: `Bearer ${accessToken}`,
// 			},
// 		}
// 	);
// 	return data;
// };

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
	);
	return data;
};
