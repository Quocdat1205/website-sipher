import Web3 from "web3"
import { weiToEther } from ".."
import { SipherTokenAbi, SipherTokenAddress, StakingPoolAddress } from "../code"

export class SipherToken {
    SipherToken

    constructor(web3: Web3) {
        this.SipherToken = new web3.eth.Contract(SipherTokenAbi, SipherTokenAddress)
    }

    async getBalance(address: string) {
        const value = await this.SipherToken.methods.balanceOf(address).call()
        return weiToEther(value)
    }

    async isApproved(address: string) {
        const value = weiToEther(await this.SipherToken.methods.allowance(address, StakingPoolAddress).call())
        return value > 0
    }

    async approve(from: string) {
        const maxValue = "115792089237316195423570985008687907853269984665640564039457584007913129639935"
        await this.SipherToken.methods.approve(StakingPoolAddress, maxValue).send({ from })
    }
}
