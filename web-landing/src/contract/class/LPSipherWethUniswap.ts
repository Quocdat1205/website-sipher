import Web3 from "web3"
import { weiToEther } from ".."
import { StakingLPSipherWethUniswapAddress, LPSipherWethUniswapAbi, LPSipherWethUniswapAddress } from "../code"

export class LPSipherWethUniswap {
    LPSipherWethUniswap

    constructor(web3: Web3) {
        this.LPSipherWethUniswap = new web3.eth.Contract(LPSipherWethUniswapAbi, LPSipherWethUniswapAddress)
    }

    async getBalance(address: string) {
        const value = await this.LPSipherWethUniswap.methods.balanceOf(address).call()
        return weiToEther(value)
    }

    async isApproved(address: string) {
        const value = weiToEther(
            await this.LPSipherWethUniswap.methods.allowance(address, StakingLPSipherWethUniswapAddress).call()
        )
        return value > 0
    }

    async approve(from: string) {
        const maxValue = "115792089237316195423570985008687907853269984665640564039457584007913129639935"
        await this.LPSipherWethUniswap.methods.approve(StakingLPSipherWethUniswapAddress, maxValue).send({ from })
    }

    async totalSupply() {
        return weiToEther(await this.LPSipherWethUniswap.methods.totalSupply().call())
    }
}
