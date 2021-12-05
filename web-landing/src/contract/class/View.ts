import Web3 from "web3"
import { weiToEther } from ".."
import { ViewAbi, ViewAddress } from "../code"

export class View {
    View

    constructor(web3: Web3) {
        this.View = new web3.eth.Contract(ViewAbi, ViewAddress)
    }

    async fetchData(address: string) {
        const data = await this.View.methods.fetchData(address).call()
        const pool = data.pools[0]
        const escrowPool = data.escrowPool

        return {
            pendingRewards: weiToEther(data.pendingRewards),
            pool: {
                accountClaimedRewards: weiToEther(pool.accountClaimedRewards),
                accountPendingRewards: weiToEther(pool.accountPendingRewards),
                accountPoolShares: weiToEther(pool.accountPoolShares),
                accountTotalDeposit: weiToEther(pool.accountTotalDeposit),
                depositToken: pool.depositToken,
                deposits: pool.deposits.map(deposit => ({
                    amount: weiToEther(deposit.amount),
                    start: parseInt(deposit.start) * 1000,
                    end: parseInt(deposit.end) * 1000,
                })),
                poolAddress: pool.poolAddress,
                totalPoolShares: weiToEther(pool.totalPoolShares),
                weight: weiToEther(pool.weight),
            },
            escrowPool: {
                accountClaimedRewards: weiToEther(escrowPool.accountClaimedRewards),
                accountPendingRewards: weiToEther(escrowPool.accountPendingRewards),
                accountPoolShares: weiToEther(escrowPool.accountPoolShares),
                accountTotalDeposit: weiToEther(escrowPool.accountTotalDeposit),
                depositToken: escrowPool.depositToken,
                deposits: escrowPool.deposits.map(deposit => ({
                    amount: weiToEther(deposit.amount),
                    start: parseInt(deposit.start) * 1000,
                    end: parseInt(deposit.end) * 1000,
                })),
                poolAddress: escrowPool.poolAddress,
                totalPoolShares: weiToEther(escrowPool.totalPoolShares),
                weight: weiToEther(escrowPool.weight),
            },
            totalWeight: weiToEther(data.totalWeight),
        }
    }
}
