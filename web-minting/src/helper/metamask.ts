import { checkIsWhitelisted } from "@api/smartContract"
import { authenticateUser, getUsersByAddress, IUser, signupUser } from "@api/user"
import Web3 from "web3"

export const metaMaskProvider = typeof window !== "undefined" && window.ethereum
export const web3 = new Web3(metaMaskProvider)

/** Get accounts from MetaMask
 * @returns List of addresses
 */
export const getMetaMaskAccounts = async (): Promise<string[]> => {
    if (!metaMaskProvider) {
        console.warn("MetaMask is not available.")
        return []
    }
    const accounts = await metaMaskProvider
        .request({
            method: "eth_requestAccounts",
        })
        .catch(error => {
            console.log("metamask error", error)
        })
    return accounts
}

/** Get current ethereum chain name */
export const getChainName = (chainId: string) => {
    if (!!Number(chainId) && chainId.length > 9) {
        return "local"
    }
    switch (chainId) {
        case "1":
            return "mainnet"
        case "3":
            return "ropsten"
        case "4":
            return "rinkeby"
        case "5":
            return "goerli"
        case "42":
            return "kovan"
        default:
            return `unknown`
    }
}

/** Get current chain infomation */
export const getChainInfo = async (): Promise<{ id: string; name: string }> => {
    const chainId = await metaMaskProvider.request({
        method: "net_version",
    })
    const chainInfo = { id: chainId, name: getChainName(chainId) }
    return chainInfo
}

/** Prompt user to sign on MetaMask */
export const sign = async (address: string, nonce: number) => {
    const signature = await web3.eth.personal.sign(
        `I am signing my one-time nonce: ${nonce}`,
        address,
        "" // MetaMask will ignore the password argument here
    )
    return signature
}

/** Authenticate user by address and nonce
 * @returns string
 */
export const getAccessToken = async (user: IUser): Promise<string> => {
    const { address, nonce } = user
    const signature = await sign(address, nonce)
    const token = await authenticateUser(address, signature)
    return token
}

/** Sign user up or log user in with address */
export const getUser = async (address: string) => {
    let account = await getUsersByAddress(address)
    return account
}

/** Convert wei to ether
 * @param wei: wei in string or number
 * @returns ether with 2 decimals
 */
export const weiToEther = (wei: string | number) => {
    const weiAmount = typeof wei === "string" ? parseInt(wei) : wei
    return parseFloat((weiAmount / 10 ** 18).toFixed(2))
}

/** Get eth balance from metamask
 * @param address: ethereum wallet address
 * @returns ether with 2 decimals
 */
export const getMetamaskBalance = async (address: string): Promise<number> => {
    /** returns wei in string, ex: "1000000000000000000" */
    const wei = await web3.eth.getBalance(address)
    return weiToEther(wei)
}

/** Connect to metask, return bunch of info */
export const connectWallet = async () => {
    const accounts = await getMetaMaskAccounts()
    const address = accounts[0]
    const chainInfo = await getChainInfo()
    const account = await getUser(address)
    const token = await getAccessToken(account)
    const whitelistInfo = await checkIsWhitelisted(address)

    return {
        chainInfo,
        account,
        token,
        whitelistInfo,
    }
}
