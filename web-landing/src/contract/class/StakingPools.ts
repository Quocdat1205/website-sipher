import Web3 from "web3"
import { weiToEther } from ".."
import { StakingPoolAbi, StakingPoolAddress } from "../code"

export class StakingPools {
    StakingPools

    constructor(web3: Web3) {
        this.StakingPools = new web3.eth.Contract(StakingPoolAbi, StakingPoolAddress)
    }

    async totalSupply() {
        const value = await this.StakingPools.methods.totalSupply().call()
        return weiToEther(value)
    }

    async deposit(from: string, amount: string, duration: number) {
        const dur = Math.max(duration * 7 * 24 * 60 * 60, 600)
        await this.StakingPools.methods.deposit(Web3.utils.toWei(amount, "ether"), dur, from).send({ from })
    }

    async claimRewards(from: string) {
        await this.StakingPools.methods.claimRewards(from).send({ from })
    }

    async withdraw(depositId: number, from: string) {
        await this.StakingPools.methods.withdraw(depositId, from).send({ from })
    }
}
