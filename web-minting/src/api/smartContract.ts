import config from "./config"
import axios from "axios"
import { SMARTCONTRACT_SALE_NEKO, SMARTCONTRACT_NEKO } from "@constant/index"

/** Check smart contract! I don't know about this */
export const checkSmartContract = async (publicAddress: string): Promise<boolean> => {
    let address = publicAddress.toLowerCase()
    const { data } = await axios.get(
        `/neko-sc/checkSC?nftContractAddress=${SMARTCONTRACT_NEKO}&saleContractAddress=${SMARTCONTRACT_SALE_NEKO}&WalletAddress=${address}`,
        config
    )

    return data.message
}

/** Check gas! I don't know for sure */
export const checkGas = async () => {
    const { data } = await axios.get(`/neko-sc/checkgas`, config)
    return data.message
}

export interface IWhitelisted {
    proof: string[]
    privateCap: number
    freeMintCap: number
}

/** Check if an address is whitelisted
 * @returns proof: list of string to prove you are whitelisted
 * @returns privateCap: maximum quatity of NFT that address can buy on private sale
 * @returns freeMintCap: maximum quatity of NFT that address can buy on free mint
 */
export const checkIsWhitelisted = async (publicAddress: string): Promise<IWhitelisted> => {
    const { data } = await axios.get(
        `/neko-sc/checkWhiteList?saleContractAddress=${SMARTCONTRACT_SALE_NEKO}&WalletAddress=${publicAddress}`,
        config
    )
    return { proof: data.message.proof, privateCap: data.message.privateCap, freeMintCap: data.message.freeMintCap }
}
