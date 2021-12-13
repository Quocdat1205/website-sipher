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

/** Authenticate user by address and signature */
export const authenticateUser = async (address: string, signature: string): Promise<string> => {
    const {
        data: { accessToken },
    } = await fetcher.post("/login/authentication", { publicAddress: address, signature })
    return accessToken
}
