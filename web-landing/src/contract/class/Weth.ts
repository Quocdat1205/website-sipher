import Web3 from "web3"
import { weiToEther } from ".."
import { WethAbi, WethAddress } from "../code/Weth"

export class Weth {
    Weth

    constructor(web3: Web3) {
        this.Weth = new web3.eth.Contract(WethAbi, WethAddress)
    }

    async balanceOf(address: string) {
        const value = await this.Weth.methods.balanceOf(address).call()
        return weiToEther(value)
    }
}
