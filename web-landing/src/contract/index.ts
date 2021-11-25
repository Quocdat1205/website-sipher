import Web3 from "web3"
import { SipherIBCOAbi, SipherIBCOAddress } from "./SipherIBCO"

export const weiToEther = (balance: string) => {
    return parseFloat(Web3.utils.fromWei(balance))
}
export class ContractCaller {
    web3: Web3
    SipherIBCO

    constructor(provider: any) {
        this.web3 = new Web3(provider)
        this.SipherIBCO = new this.web3.eth.Contract(SipherIBCOAbi, SipherIBCOAddress)
    }

    async getStartTime() {
        return parseInt(await this.SipherIBCO.methods.START().call()) * 1000
    }

    async getEndTime() {
        return parseInt(await this.SipherIBCO.methods.END().call()) * 1000
    }

    async getTotalDistributeAmount() {
        const value = await this.SipherIBCO.methods.TOTAL_DISTRIBUTE_AMOUNT().call()
        return parseInt(this.web3.utils.fromWei(value))
    }

    async getTotalProvided() {
        return parseInt(await this.SipherIBCO.methods.totalProvided().call())
    }

    async getUserDeposited(address: string) {
        return await this.SipherIBCO.methods.getUserDeposited(address).call()
    }

    /**
     *
     * @returns [startTime, endTime, totalDistributeAmount, totalProvided]
     */
    async getConstants(): Promise<[number, number, number, number]> {
        return await Promise.all([
            this.getStartTime(),
            this.getEndTime(),
            this.getTotalDistributeAmount(),
            this.getTotalProvided(),
        ])
    }

    async deposit(amount: number) {
        await this.SipherIBCO.methods.deposit().send({
            value: this.web3.utils.toHex(this.web3.utils.toWei(amount.toString(), "ether")),
        })
    }

    async claim() {
        await this.SipherIBCO.methods.claim().send()
    }

    async withdraw(amount: number) {
        await this.SipherIBCO.methods.withdraw(amount).send()
    }

    async getEstTokenPrice() {
        return await this.SipherIBCO.methods.getEstTokenPrice().call()
    }

    async getEstReceivedToken() {
        return await this.SipherIBCO.methods.getEstReceivedToken().call()
    }
}

// export const claim = async (address: string) => {
//     await SipherIBCO.methods.claim().send({
//         from: address,
//     })
// }
