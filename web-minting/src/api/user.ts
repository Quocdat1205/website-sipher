import axios from "axios";
import config from "./config";

//get data user on address
export const getUsersByAddress = async (publicAddress: string) => {
	const { data } = await axios.get(`/login?publicAddress=${publicAddress}`, config);
	return data;
};

//user not data then user signup
export interface IUser {
	publicAddress: string;
	nonce: number;
}

export const signupUser = async (publicAddress: string): Promise<IUser> => {
	const { data } = await axios.post(`/login`, { publicAddress }, config);
	return data;
};

//request token on user
export const authenticateUser = async (publicAddress: string, signature: string): Promise<string> => {
	const {
		data: { accessToken },
	} = await axios.post("/login/authentication", { publicAddress, signature }, config);
	return accessToken;
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
