import { weiToEther } from "@source/contract"
import { SipherIBCOAddress, SipherTokenAddress } from "@source/contract/code"
import Web3 from "web3"
import fetcher from "./fetcher"

export const checkGas = async () => {
    const { data } = await fetcher.get("/smartcontract/check-gas")
    const maxFeePerGas = Web3.utils.toWei(Math.round(1.3 * data.message.data.FastGasPrice).toString(), "gwei")
    const maxPriorityFeePerGas = Web3.utils.toWei(
        Math.round(
            parseInt(data.message.data.ProposeGasPrice) - parseInt(data.message.data.suggestBaseFee) < 2
                ? 2
                : parseInt(data.message.data.ProposeGasPrice) - parseInt(data.message.data.suggestBaseFee)
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
