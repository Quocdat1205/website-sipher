import fetcher from "./fetcher"

export interface IUser {
    address: string
    nonce: number
}

/** Get user from address */
export const getUsersByAddress = async (address: string): Promise<IUser> => {
    const { data } = await fetcher.get(`/login?publicAddress=${address}`)

    return {
        nonce: data.nonce,
        address: data.publicAddress,
    }
}

/** Sign up user by wallet address */
export const signupUser = async (address: string): Promise<IUser> => {
    const { data } = await fetcher.post(`/login`, { publicAddress: address })
    return data
}

/** Authenticate user by address and signature */
export const authenticateUser = async (
    address: string,
    signature: string
): Promise<{ accessToken: string; tracking: boolean }> => {
    const {
        data: { accessToken, tracking },
    } = await fetcher.post("/login/authentication", { publicAddress: address, signature })
    return { accessToken, tracking }
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
