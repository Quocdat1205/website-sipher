import { SMARTCONTRACT_SALE_NEKO, SMARTCONTRACT_NEKO } from "@constant/index"
import fetcher from "./fetcher"

/** Check smart contract!
 * @description Check whether front-end and back-end is using the same contract
 */
export const checkSmartContract = async (publicAddress: string): Promise<boolean> => {
    let address = publicAddress.toLowerCase()
    const { data } = await fetcher.get(
        `/neko-sc/checkSC?nftContractAddress=${SMARTCONTRACT_NEKO}&saleContractAddress=${SMARTCONTRACT_SALE_NEKO}&WalletAddress=${address}`
    )

    return data.message
}

/** Check gas! I don't know for sure */
export const checkGas = async () => {
    const { data } = await fetcher.get(`/neko-sc/checkgas`)
    return data.message
}

export interface WhitelistInfo {
    proof: string[]
    privateCap: number
    freeMintCap: number
}

/** Check if an address is whitelisted
 * @returns WhiteListInfo, contains proof, privateCap and freeMintCap
 */
export const checkIsWhitelisted = async (publicAddress: string): Promise<WhitelistInfo> => {
    const { data } = await fetcher.get(
        `/neko-sc/checkWhiteList?saleContractAddress=${SMARTCONTRACT_SALE_NEKO}&WalletAddress=${publicAddress}`
    )
    return { proof: data.message.proof, privateCap: data.message.privateCap, freeMintCap: data.message.freeMintCap }
}
