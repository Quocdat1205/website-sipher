import { weiToEther } from "@source/contract"
import { SipherIBCOAddress, SipherTokenAddress } from "@source/contract/code"
import Web3 from "web3"
import fetcher from "./fetcher"

export const checkGas = async () => {
    const { data } = await fetcher.get("/gas")
    const maxFeePerGas = Web3.utils.toWei(Math.round(1.3 * data.data.FastGasPrice).toString(), "gwei")
    const maxPriorityFeePerGas = Web3.utils.toWei(
        Math.round(
            parseInt(data.data.ProposeGasPrice) - parseInt(data.data.suggestBaseFee) < 2
                ? 2
                : parseInt(data.data.ProposeGasPrice) - parseInt(data.data.suggestBaseFee)
        ).toString(),
        "gwei"
    )

    return {
        maxFeePerGas,
        maxPriorityFeePerGas,
    }
}

export const getIbcoInfo = async (): Promise<Record<"totalProvided" | "txCount" | "estTokenPrice", number>> => {
    const { data } = await fetcher.get("/smartcontract/check-ibco")
    return data.message
}

export const checkSmartContract = async (): Promise<boolean> => {
    const { data } = await fetcher(
        `/smartcontract/check-contract?sipherTokenAddress=${SipherTokenAddress}&ibcoAddress=${SipherIBCOAddress}`
    )
    return data.message
}

export const getNewEscrowedPool = async (address: string): Promise<number> => {
    const { data } = await fetcher.get(`/pool/reward/${address}`)

    return weiToEther(data.toString())
}
