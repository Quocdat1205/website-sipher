import Web3 from "web3"
import { weiToEther } from ".."
import { StakingLPSipherWethUniswapAbi, StakingLPSipherWethUniswapAddress } from "../code"

export class StakingLPSipherWethUniswap {
    StakingLPSipherWethUniswap

    constructor(web3: Web3) {
        this.StakingLPSipherWethUniswap = new web3.eth.Contract(
            StakingLPSipherWethUniswapAbi,
            StakingLPSipherWethUniswapAddress
        )
    }

    async totalSupply() {
        const value = await this.StakingLPSipherWethUniswap.methods.totalSupply().call()
        return weiToEther(value)
    }

    async deposit(from: string, amount: string, duration: number) {
        const dur = Math.max(duration * 7 * 24 * 60 * 60, 600)
        await this.StakingLPSipherWethUniswap.methods
            .deposit(Web3.utils.toWei(amount, "ether"), dur, from)
            .send({ from })
    }

    async claimRewards(from: string) {
        await this.StakingLPSipherWethUniswap.methods.claimRewards(from).send({ from })
    }

    async withdraw(depositId: number, from: string) {
        await this.StakingLPSipherWethUniswap.methods.withdraw(depositId, from).send({ from })
    }
}
