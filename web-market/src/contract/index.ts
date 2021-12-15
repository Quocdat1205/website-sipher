import Web3 from "web3"
import { SipherToken } from "./class"

export const weiToEther = (balance: string) => {
    const actualValue = parseFloat(Web3.utils.fromWei(balance))
    return actualValue - (actualValue % 0.00000001)
}

export class ContractCaller {
    web3: Web3

    SipherToken: SipherToken

    constructor(provider: any) {
        this.web3 = new Web3(provider)

        this.SipherToken = new SipherToken(this.web3)
    }

    async getBalance(from: string) {
        return parseInt(await this.web3.eth.getBalance(from))
    }
}
