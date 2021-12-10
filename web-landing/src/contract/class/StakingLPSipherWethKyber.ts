import Web3 from "web3"
import { weiToEther } from ".."
import { StakingLPSipherWethKyberAbi, StakingLPSipherWethKyberAddress } from "../code/StakingLPSipherWethKyber"

export class StakingLPSipherWethKyber {
    StakingLPSipherWethKyber

    constructor(web3: Web3) {
        this.StakingLPSipherWethKyber = new web3.eth.Contract(
            StakingLPSipherWethKyberAbi,
            StakingLPSipherWethKyberAddress
        )
    }

    async totalSupply() {
        const value = await this.StakingLPSipherWethKyber.methods.totalSupply().call()
        return weiToEther(value)
    }

    async deposit(from: string, amount: string, duration: number) {
        const dur = Math.max(duration * 7 * 24 * 60 * 60, 600)
        await this.StakingLPSipherWethKyber.methods.deposit(Web3.utils.toWei(amount, "ether"), dur, from).send({ from })
    }

    async claimRewards(from: string) {
        await this.StakingLPSipherWethKyber.methods.claimRewards(from).send({ from })
    }

    async withdraw(depositId: number, from: string) {
        await this.StakingLPSipherWethKyber.methods.withdraw(depositId, from).send({ from })
    }
}
