import Web3 from "web3"
import { SipherIBCO, View, SipherToken, StakingPools } from "./class"
import { StakingPoolAddress, EscrowPoolAddress } from "./code"

export const weiToEther = (balance: string) => {
    return parseFloat(Web3.utils.fromWei(balance))
}

export class ContractCaller {
    web3: Web3
    SipherIBCO: SipherIBCO
    View: View
    SipherToken: SipherToken
    StakingPools: StakingPools

    constructor(provider: any) {
        this.web3 = new Web3(provider)
        this.SipherIBCO = new SipherIBCO(this.web3)
        this.View = new View(this.web3)
        this.SipherToken = new SipherToken(this.web3)
        this.StakingPools = new StakingPools(this.web3)
    }

    async getBalance(from: string) {
        return parseInt(await this.web3.eth.getBalance(from))
    }

    async getTotalStaked() {
        return await this.SipherToken.getBalance(StakingPoolAddress)
    }

    async getTotalClaimed() {
        return await this.SipherToken.getBalance(EscrowPoolAddress)
    }
}
