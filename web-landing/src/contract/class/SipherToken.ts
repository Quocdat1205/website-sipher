import Web3 from "web3"
import { weiToEther } from ".."
import { SipherTokenAbi, SipherTokenAddress } from "../code"

export class SipherToken {
    SipherToken

    constructor(web3: Web3) {
        this.SipherToken = new web3.eth.Contract(SipherTokenAbi, SipherTokenAddress)
    }

    async getBalance(address: string) {
        const value = await this.SipherToken.methods.balanceOf(address).call()
        return weiToEther(value)
    }
}
