import Web3 from "web3"
import { weiToEther } from ".."
import {} from "../code"
import { LPSipherWethKyberAbi, LPSipherWethKyberAddress } from "../code/LPSipherWethKyber"
import { StakingLPSipherWethKyberAddress } from "../code/StakingLPSipherWethKyber"

export class LPSipherWethKyber {
    LPSipherWethKyber

    constructor(web3: Web3) {
        this.LPSipherWethKyber = new web3.eth.Contract(LPSipherWethKyberAbi, LPSipherWethKyberAddress)
    }

    async getBalance(address: string) {
        const value = await this.LPSipherWethKyber.methods.balanceOf(address).call()
        return weiToEther(value)
    }

    async isApproved(address: string) {
        const value = weiToEther(
            await this.LPSipherWethKyber.methods.allowance(address, StakingLPSipherWethKyberAddress).call()
        )
        return value > 0
    }

    async approve(from: string) {
        const maxValue = "115792089237316195423570985008687907853269984665640564039457584007913129639935"
        await this.LPSipherWethKyber.methods.approve(StakingLPSipherWethKyberAddress, maxValue).send({ from })
    }

    async totalSupply() {
        return weiToEther(await this.LPSipherWethKyber.methods.totalSupply().call())
    }
}
