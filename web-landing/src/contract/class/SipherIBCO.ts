import { checkGas } from "@hooks/api"
import Web3 from "web3"
import { weiToEther } from ".."
import { SipherIBCOAbi, SipherIBCOAddress } from "../code"

export class SipherIBCO {
    SipherIBCO

    constructor(web3: Web3) {
        this.SipherIBCO = new web3.eth.Contract(SipherIBCOAbi, SipherIBCOAddress)
    }

    async getStartTime() {
        return parseInt(await this.SipherIBCO.methods.START().call()) * 1000 + 15000
    }

    async getEndTime() {
        return parseInt(await this.SipherIBCO.methods.END().call()) * 1000 + 15000
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
        const { maxFeePerGas, maxPriorityFeePerGas } = await checkGas()
        await this.SipherIBCO.methods.deposit().send({
            from,
            value: Web3.utils.toWei(amount, "ether"),
            maxFeePerGas: Web3.utils.toHex(maxFeePerGas),
            maxPriorityFeePerGas: Web3.utils.toHex(maxPriorityFeePerGas),
        })
    }

    async claim(from: string) {
        const { maxFeePerGas, maxPriorityFeePerGas } = await checkGas()
        await this.SipherIBCO.methods.claim().send({ from, maxFeePerGas, maxPriorityFeePerGas })
    }

    async withdraw(from: string, amount: string) {
        const { maxFeePerGas, maxPriorityFeePerGas } = await checkGas()
        await this.SipherIBCO.methods
            .withdraw(Web3.utils.toWei(amount, "ether"))
            .send({ from, maxFeePerGas, maxPriorityFeePerGas })
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
        return weiToEther(await this.SipherIBCO.methods.getLockedInvestment(Web3.utils.toWei(amount, "ether")).call())
    }

    async getLockAmountAfterDeposit(address: string, amount: string) {
        return weiToEther(
            await this.SipherIBCO.methods.getLockAmountAfterDeposit(address, Web3.utils.toWei(amount, "ether")).call()
        )
    }

    async getAccumulatedAfterDeposit(address: string, amount: string) {
        return weiToEther(
            await this.SipherIBCO.methods.getAccumulatedAfterDeposit(address, Web3.utils.toWei(amount, "ether")).call()
        )
    }

    async claimAndStake(from: string, amount: string, duration: number) {
        const dur = Math.max(duration * 7 * 24 * 60 * 60, 600)
        const { maxFeePerGas, maxPriorityFeePerGas } = await checkGas()
        await this.SipherIBCO.methods
            .claimAndDepositForStaking(Web3.utils.toWei(amount, "ether"), dur)
            .send({ from, maxFeePerGas, maxPriorityFeePerGas })
    }
}
