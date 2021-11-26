import { AnyPointerEvent } from "framer-motion/types/gestures/PanSession"
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
        return weiToEther(value)
    }

    async getTotalProvided() {
        return weiToEther(await this.SipherIBCO.methods.totalProvided().call())
    }

    async getUserDeposited(address: string) {
        return weiToEther(await this.SipherIBCO.methods.getUserDeposited(address).call())
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

    async deposit(from: string, amount: string) {
        await this.SipherIBCO.methods.deposit().send({
            from,
            value: Web3.utils.toWei(amount, "ether"),
        })
    }

    async claim(from: string) {
        await this.SipherIBCO.methods.claim().send({ from })
    }

    async withdraw(from: string, amount: string) {
        await this.SipherIBCO.methods.withdraw(Web3.utils.toWei(amount, "ether")).send({ from })
    }

    async getEstTokenPrice() {
        return weiToEther(await this.SipherIBCO.methods.getEstTokenPrice().call())
    }

    async getEstReceivedToken(from: string) {
        return weiToEther(await this.SipherIBCO.methods.getEstReceivedToken(from).call())
    }

    async getWithdrawableAmount(from: string) {
        return weiToEther(await this.SipherIBCO.methods.getWithdrawableAmount(from).call())
    }

    async getLockedAmount(from: string): Promise<number> {
        return weiToEther(await this.SipherIBCO.methods.getLockedAmount(from).call())
    }

    async calculateLocked(amount: string): Promise<number> {
        // console.log(amount)
        // const lockedAmount = Web3.utils.toHex(Web3.utils.toWei(amount, "ether"))
        return weiToEther(await this.SipherIBCO.methods.getLockedInvestment(Web3.utils.toWei(amount, "ether")).call())
    }
}
