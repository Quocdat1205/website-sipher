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
    signature: string,
    country?: string
): Promise<{ accessToken: string; tracking: boolean }> => {
    const {
        data: { accessToken, tracking },
    } = await fetcher.post("/login/authentication", { publicAddress: address, signature, national: country })
    return { accessToken, tracking }
}

/** TrackIP user address */
export const trackingIP = async (
    address: string,
    accessToken: string,
    action: string
): Promise<{ success: boolean }> => {
    const type = action.toLowerCase()
    const {
        data: { success },
    } = await fetcher.post(
        "/tracking",
        { address, type },
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        }
    )
    return success
}
