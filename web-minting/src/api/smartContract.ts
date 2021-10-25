import config from "./config"
import axios from "axios"
import { SMARTCONTRACT_SALE_NEKO, SMARTCONTRACT_NEKO } from "@constant/index"

/** Check smart contract! I don't know about this
 * @description Not used! Will be remove soon!
 */
export const checkSmartContract = async (publicAddress: string): Promise<boolean> => {
    let address = publicAddress.toLowerCase()
    const { data } = await axios.get(
        `/neko-sc/checkSC?nftContractAddress=${SMARTCONTRACT_NEKO}&saleContractAddress=${SMARTCONTRACT_SALE_NEKO}&WalletAddress=${address}`,
        config
    )
    console.log("data", SMARTCONTRACT_NEKO, SMARTCONTRACT_SALE_NEKO, address)

    return data.message
}

/** Check gas! I don't know for sure */
export const checkGas = async () => {
    const { data } = await axios.get(`/neko-sc/checkgas`, config)
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
    const { data } = await axios.get(
        `/neko-sc/checkWhiteList?saleContractAddress=${SMARTCONTRACT_SALE_NEKO}&WalletAddress=${publicAddress}`,
        config
    )
    return { proof: data.message.proof, privateCap: data.message.privateCap, freeMintCap: data.message.freeMintCap }
}
