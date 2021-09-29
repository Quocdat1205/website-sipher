import { web3 } from "./metamask"
import { SMARTCONTRACT_SALE_NEKO, SMARTCONTRACT_NEKO } from "@constant/index"
import { NFT, SALE } from "../contract"
import { checkGas } from "@api/smartContract"

export const ContractProviderSALE = new web3.eth.Contract(SALE.abiSale, SMARTCONTRACT_SALE_NEKO)
export const ContractProviderNFT = new web3.eth.Contract(NFT.apiNFT, SMARTCONTRACT_NEKO)

/** Get NFT total supply
 * @returns totalSupply: number
 */
export const getTotalSupply = async (): Promise<number> => {
    const supply = await ContractProviderNFT.methods.totalSupply().call()
    return parseInt(supply)
}

/** Buy NFT
 * @param address: ether address to buy from
 * @param slot: number of NFT to buy
 * @param slotPrice: price of each NFT
 * @param caps: whitelist cap
 * @param proof: used by whitelisted address
 */
export const sendSmartContract = async (
    address: string,
    slot: number,
    slotPrice: number,
    cap: number,
    proof: string[]
) => {
    console.log("senc sc", address, slot, slotPrice, proof)
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
    // const _gasprice = await web3.eth.getGasPrice();
    const gaseth = await checkGas()
    const maxFeePerGas = Math.round(1.3 * parseInt(gaseth.data.FastGasPrice))
    const maxPriorityFeePerGas = Math.round(
        parseInt(gaseth.data.ProposeGasPrice) - parseInt(gaseth.data.suggestBaseFee) < 2
            ? 2
            : parseInt(gaseth.data.ProposeGasPrice) - parseInt(gaseth.data.suggestBaseFee)
    )
    await ContractProviderSALE.methods.buy(slot, cap, proof).send({
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

/** Get number of NFT buy from private and public */
export const getUserRecord = async (publicAddress: string) => {
    const data = await ContractProviderSALE.methods.getUserRecord(publicAddress).call()
    return {
        whitelistBought: parseInt(data[0]),
        publicBought: parseInt(data[1]),
    }
}

/** Get current price of NFT (Public Sale) */
export const getPublicCurrentPrice = async () => {
    const data = await ContractProviderSALE.methods.getPublicSaleCurrentPrice().call()
    return parseFloat((data / 10 ** 18).toFixed(2))
}

/** Get sale config
 * @returns [PRIVATE_SALE_TIME, PUBLIC_SALE_TIME, END_TIME]
 */
export const getSaleConfig = async (): Promise<[number, number, number]> => {
    const data = await ContractProviderSALE.methods.getSaleConfig().call()
    return [parseInt(data[0]), parseInt(data[1]), parseInt(data[2])]
}
