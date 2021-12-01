import axios from "axios"

export const checkGas = async () => {
    const { data } = await axios.get("https://be.sipherion.com/api/sipher/v1.1/smartcontract/check-gas")

    const maxFeePerGas = Math.round(1.3 * parseInt(data.message.data.FastGasPrice))
    const maxPriorityFeePerGas = Math.round(
        parseInt(data.message.data.ProposeGasPrice) - parseInt(data.message.data.suggestBaseFee) < 2
            ? 2
            : parseInt(data.message.data.ProposeGasPrice) - parseInt(data.message.data.suggestBaseFee)
    )

    return {
        maxFeePerGas,
        maxPriorityFeePerGas,
    }
}
