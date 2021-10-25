import { web3 } from "./metamask"
import { SMARTCONTRACT_SALE_NEKO, SMARTCONTRACT_NEKO } from "@constant/index"
import { NFT_ABI, SALE_ABI } from "../contract"
import { checkGas } from "@api/smartContract"

export const ContractProviderSALE = new web3.eth.Contract(SALE_ABI, SMARTCONTRACT_SALE_NEKO)
export const ContractProviderNFT = new web3.eth.Contract(NFT_ABI, SMARTCONTRACT_NEKO)

/** Get NFT total supply
 * @returns totalSupply: number
 */
export const getTotalSupply = async (): Promise<number> => {
    const supply = await ContractProviderNFT.methods.totalSupply().call()
    return parseInt(supply)
}

export type SaleRecord = Record<"publicSale" | "privateSale" | "freeMint", number>
export const getSaleRecord = async (): Promise<SaleRecord> => {
    const saleRecord = await ContractProviderSALE.methods.getSaleRecord().call()
    return {
        publicSale: parseInt(saleRecord.totalPublicSold),
        privateSale: parseInt(saleRecord.totalWhitelistSold),
        freeMint: parseInt(saleRecord.totalFreeMintSold),
    }
}

interface SendSCInput {
    address: string
    slot: number
    slotPrice: number
    privateCap: number
    freeMintCap: number
    proof: string[]
}

/** Buy NFT
 * @param input: includes address, slot, slotPrice, cap and proof
 */
export const sendSmartContract = async (input: SendSCInput) => {
    const { address, slot, slotPrice, proof, privateCap, freeMintCap } = input

    const _gaslimit =
        slot === 1
            ? 296656
            : slot === 2
            ? 438147
            : slot === 3
            ? 612987
            : slot === 4
            ? 787828
            : slot === 5
            ? 962668
            : slot === 6
            ? 1155201
            : 1386241
    const gaseth = await checkGas()
    const maxFeePerGas = Math.round(1.3 * parseInt(gaseth.data.FastGasPrice))
    const maxPriorityFeePerGas = Math.round(
        parseInt(gaseth.data.ProposeGasPrice) - parseInt(gaseth.data.suggestBaseFee) < 2
            ? 2
            : parseInt(gaseth.data.ProposeGasPrice) - parseInt(gaseth.data.suggestBaseFee)
    )
    await ContractProviderSALE.methods.buy(slot, privateCap, freeMintCap, proof).send({
        from: address,
        value: web3.utils.toHex(web3.utils.toWei(slotPrice.toString(), "ether")),
        gasLimit: web3.utils.toHex(_gaslimit),
        maxPriorityFeePerGas: web3.utils.toHex(web3.utils.toWei(maxPriorityFeePerGas.toString(), "gwei")),
        maxFeePerGas: web3.utils.toHex(web3.utils.toWei(maxFeePerGas.toString(), "gwei")),
    })
}

/** Get NFT balance
 * @returns NFT: number
 */
export const getBalanceOf = async (publicAddress: string) => {
    const data = await ContractProviderNFT.methods.balanceOf(publicAddress).call()
    return parseInt(data)
}

export type IUserRecord = Record<"publicBought" | "whitelistBought" | "freeMintBought", number>

/** Get number of NFT buy from private and public */
export const getUserRecord = async (publicAddress: string): Promise<IUserRecord> => {
    const data = await ContractProviderSALE.methods.getUserRecord(publicAddress).call()
    console.log("user record of", publicAddress, data)
    return {
        publicBought: parseInt(data[0]),
        whitelistBought: parseInt(data[1]),
        freeMintBought: parseInt(data[2]),
    }
}

/** Get current price of NFT (Public Sale) */
export const getPublicCurrentPrice = async () => {
    const data = await ContractProviderSALE.methods.getPublicSaleCurrentPrice().call()
    return parseFloat((data / 10 ** 18).toFixed(2))
}

export type ISaleConfig = Record<
    "publicTime" | "publicEndTime" | "privateTime" | "freeMintTime" | "endTime" | "maxSupply",
    number
>

/** Get sale config
 * @returns publicTime, privateTime, freeMintTime, endTime, maxSupply
 */
export const getSaleConfig = async (): Promise<ISaleConfig> => {
    const data = await ContractProviderSALE.methods.getSaleConfig().call()
    return {
        publicTime: parseInt(data[0]) * 1000,
        publicEndTime: parseInt(data[1]) * 1000,
        privateTime: parseInt(data[2]) * 1000,
        freeMintTime: parseInt(data[3]) * 1000,
        endTime: parseInt(data[4]) * 1000,
        maxSupply: parseInt(data[5]),
    }
}
