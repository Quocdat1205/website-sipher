import Web3 from "web3"
import { weiToEther } from ".."
import { SipherTokenAbi, SipherTokenAddress, StakingPoolAddress } from "../code"

export class SipherToken {
    SipherToken

    constructor(web3: Web3) {
        this.SipherToken = new web3.eth.Contract(SipherTokenAbi, SipherTokenAddress)
    }
}
