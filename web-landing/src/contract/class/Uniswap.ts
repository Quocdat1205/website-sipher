import Web3 from "web3"
import { weiToEther } from ".."
import { LpPoolAddress, UniswapAbi, UniswapAddress } from "../code"

export class Uniswap {
    Uniswap

    constructor(web3: Web3) {
        this.Uniswap = new web3.eth.Contract(UniswapAbi, UniswapAddress)
    }

    async getBalance(address: string) {
        const value = await this.Uniswap.methods.balanceOf(address).call()
        return weiToEther(value)
    }

    async isApproved(address: string) {
        const value = weiToEther(await this.Uniswap.methods.allowance(address, LpPoolAddress).call())
        return value > 0
    }

    async approve(from: string) {
        const maxValue = "115792089237316195423570985008687907853269984665640564039457584007913129639935"
        await this.Uniswap.methods.approve(LpPoolAddress, maxValue).send({ from })
    }

    async totalSupply() {
        return weiToEther(await this.Uniswap.methods.totalSupply().call())
    }
}
