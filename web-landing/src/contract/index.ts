import Web3 from "web3"
import { SipherTokenAbi, SipherTokenAddress } from "./SipherToken"
import { SipherIBCOAbi, SipherIBCOAddress } from "./SipherIBCO"
const web3 = new Web3()

export const SipherToken = new web3.eth.Contract(SipherTokenAbi, SipherTokenAddress)
export const SipherIBCO = new web3.eth.Contract(SipherIBCOAbi, SipherIBCOAddress)

export const getStartTime = async () => {
    return await SipherToken.methods.START_TIME().call()
}

export const getUserDeposited = async (address: string) => {
    return await SipherIBCO.methods.getUserDeposited(address).call()
}

export const claim = async (address: string) => {
    await SipherIBCO.methods.claim().send({
        from: address,
    })
}
