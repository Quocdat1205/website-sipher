import { authenticateUser, getUsersByAddress, IUser, checkIsWhitelisted } from "@api"
import { weiToEther } from "@helper"
import WalletConnectProvider from "@walletconnect/web3-provider"
import Web3 from "web3"

export const connectWalletProvider = new WalletConnectProvider({
    rpc: {
        1: "https://mainnet.mycustomnode.com",
        3: "https://ropsten.mycustomnode.com",
        100: "https://dai.poa.network",
        // ...
    },
})

export const web3WalletConnect = new Web3(connectWalletProvider as any)

/** Get accounts from MetaMask
 * @returns List of addresses
 */
export const getWalletConnectAccounnt = async (): Promise<string[]> => {
    if (!connectWalletProvider) {
        console.warn("MetaMask is not available.")
        return []
    }

    const accounts = await web3WalletConnect.eth.getAccounts()
    return accounts
}

/** Get current ethereum chain name */
export const getChainNameWalletConnect = (chainId: number) => {
    if (!!Number(chainId)) {
        return "local"
    }
    switch (chainId) {
        case 1:
            return "mainnet"
        case 3:
            return "ropsten"
        case 4:
            return "rinkeby"
        case 5:
            return "goerli"
        case 42:
            return "kovan"
        default:
            return `unknown`
    }
}

/** Get current chain infomation */
export const getChainInfoWalletConnect = async (): Promise<{ id: number; name: string }> => {
    const chainId = await web3WalletConnect.eth.net.getId()

    const chainInfo = { id: chainId, name: getChainNameWalletConnect(chainId) }
    return chainInfo
}

/** Prompt user to sign on MetaMask */
export const signWalletConnect = async (address: string, nonce: number) => {
    const signature = await web3WalletConnect.eth.personal.sign(
        `I am signing my one-time nonce: ${nonce}`,
        address,
        "" // MetaMask will ignore the password argument here
    )
    return signature
}

/** Get eth balance from metamask
 * @param address: ethereum wallet address
 * @returns ether with 2 decimals
 */
export const getBalanceWalletConnect = async (address: string): Promise<number> => {
    /** returns wei in string, ex: "1000000000000000000" */
    const wei = await web3WalletConnect.eth.getBalance(address)
    return weiToEther(wei)
}

/** Connect to metamask, return bunch of info */
export const connectWalletConnect = async () => {
    await connectWalletProvider.enable()

    const accounts = await getWalletConnectAccounnt()
    const address = accounts[0]
    const chainInfo = await getChainInfoWalletConnect()

    return {
        chainInfo,
        account: address,
    }
}
