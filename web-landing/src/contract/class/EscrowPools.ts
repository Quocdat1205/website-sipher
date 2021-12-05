import Web3 from "web3"
import { EscrowPoolAbi, EscrowPoolAddress } from "../code"

export class EscrowPools {
    EscrowPools

    constructor(web3: Web3) {
        this.EscrowPools = new web3.eth.Contract(EscrowPoolAbi, EscrowPoolAddress)
    }

    async withdraw(depositId: number, from: string) {
        await this.EscrowPools.methods.withdraw(depositId, from).send({ from })
    }
}
