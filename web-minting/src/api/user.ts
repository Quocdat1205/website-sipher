import axios from "axios"
import config from "./config"
export interface IUser {
    address: string
    nonce: number
}

/** Get user from address */
export const getUsersByAddress = async (address: string): Promise<IUser> => {
    const { data } = await axios.get(`/login?publicAddress=${address}`, config)

    return {
        nonce: data.nonce,
        address: data.publicAddress,
    }
}

/** Sign up user by wallet address */
export const signupUser = async (address: string): Promise<IUser> => {
    const { data } = await axios.post(`/login`, { publicAddress: address }, config)
    return data
}

/** Authenticate user by address and signature */
export const authenticateUser = async (address: string, signature: string): Promise<string> => {
    const {
        data: { accessToken },
    } = await axios.post("/login/authentication", { publicAddress: address, signature }, config)
    return accessToken
}

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
