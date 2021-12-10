import Web3 from "web3"
import { EscrowPoolAbi, EscrowPoolAddress } from "../code"

export class EscrowPool {
    EscrowPool

    constructor(web3: Web3) {
        this.EscrowPool = new web3.eth.Contract(EscrowPoolAbi, EscrowPoolAddress)
    }

    async withdraw(depositId: number, from: string) {
        await this.EscrowPool.methods.withdraw(depositId, from).send({ from })
    }
}
