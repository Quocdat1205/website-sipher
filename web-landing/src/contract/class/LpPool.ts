import Web3 from "web3"
import { weiToEther } from ".."
import { LpPoolAbi, LpPoolAddress } from "../code"

export class LpPools {
    LpPools

    constructor(web3: Web3) {
        this.LpPools = new web3.eth.Contract(LpPoolAbi, LpPoolAddress)
    }

    async totalSupply() {
        const value = await this.LpPools.methods.totalSupply().call()
        return weiToEther(value)
    }

    async deposit(from: string, amount: string, duration: number) {
        const dur = Math.max(duration * 7 * 24 * 60 * 60, 600)
        await this.LpPools.methods.deposit(Web3.utils.toWei(amount, "ether"), dur, from).send({ from })
    }

    async claimRewards(from: string) {
        await this.LpPools.methods.claimRewards(from).send({ from })
    }

    async withdraw(depositId: number, from: string) {
        await this.LpPools.methods.withdraw(depositId, from).send({ from })
    }
}
