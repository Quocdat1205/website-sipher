import axios from "axios"
import Web3 from "web3"

export const checkGas = async () => {
    const { data } = await axios.get("https://be.sipherion.com/api/sipher/v1.1/smartcontract/check-gas")
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
