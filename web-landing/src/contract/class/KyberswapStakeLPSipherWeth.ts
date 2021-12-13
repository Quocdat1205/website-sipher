import Web3 from "web3"
import { weiToEther } from ".."
import {
    KyberswapStakeLPSipherWethAbi,
    KyberswapStakeLPSipherWethAddress,
    StakingLPSipherWethKyberAddress,
} from "../code/"

// MOCK
export class KyberswapStakeLPSipherWeth {
    KyberswapStakeLPSipherWeth

    constructor(web3: Web3) {
        this.KyberswapStakeLPSipherWeth = new web3.eth.Contract(
            KyberswapStakeLPSipherWethAbi,
            KyberswapStakeLPSipherWethAddress
        )
    }

    async getBalance(address: string) {
        const value = await this.KyberswapStakeLPSipherWeth.methods.balanceOf(address).call()
        return weiToEther(value)
    }

    async totalSupply() {
        return weiToEther(await this.KyberswapStakeLPSipherWeth.methods.totalSupply().call())
    }

    async isApproved(address: string) {
        const value = weiToEther(
            await this.KyberswapStakeLPSipherWeth.methods.allowance(address, StakingLPSipherWethKyberAddress).call()
        )
        return value > 0
    }

    async deposit(from: string, amount: string, duration: number) {
        const dur = Math.max(duration * 7 * 24 * 60 * 60, 600)
        await this.KyberswapStakeLPSipherWeth.methods
            .deposit(Web3.utils.toWei(amount, "ether"), dur, from)
            .send({ from })
    }

    async claimRewards(from: string) {
        await this.KyberswapStakeLPSipherWeth.methods.claimRewards(from).send({ from })
    }

    async approve(from: string) {
        const maxValue = "115792089237316195423570985008687907853269984665640564039457584007913129639935"
        await this.KyberswapStakeLPSipherWeth.methods.approve(StakingLPSipherWethKyberAddress, maxValue).send({ from })
    }
}
