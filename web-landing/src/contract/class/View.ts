import Web3 from "web3"
import { weiToEther } from ".."
import { ViewAbi, ViewAddress } from "../code"

export interface Pool {
    accountClaimedRewards: number
    accountPendingRewards: number
    accountPoolShares: number
    accountTotalDeposit: number
    depositToken: string
    deposits: Record<"amount" | "start" | "end", number>[]
    poolAddress: string
    totalPoolShares: number
    weight: number
}

export interface IView {
    pendingRewards: number
    sipherPool: Pool
    lpPool: Pool
    escrowPool: Pool
    totalWeight: number
}

export class View {
    View

    constructor(web3: Web3) {
        this.View = new web3.eth.Contract(ViewAbi, ViewAddress)
    }

    async fetchData(address: string): Promise<IView> {
        const data = await this.View.methods.fetchData(address).call()
        const sipherPoolData = data.pools[0]
        const lpPoolData = data.pools[1]
        const escrowPool = data.escrowPool
        console.log(data)
        return {
            pendingRewards: weiToEther(data.pendingRewards),
            sipherPool: {
                accountClaimedRewards: weiToEther(sipherPoolData.accountClaimedRewards),
                accountPendingRewards: weiToEther(sipherPoolData.accountPendingRewards),
                accountPoolShares: weiToEther(sipherPoolData.accountPoolShares),
                accountTotalDeposit: weiToEther(sipherPoolData.accountTotalDeposit),
                depositToken: sipherPoolData.depositToken,
                deposits: sipherPoolData.deposits.map(deposit => ({
                    amount: weiToEther(deposit.amount),
                    start: parseInt(deposit.start) * 1000,
                    end: parseInt(deposit.end) * 1000,
                })),
                poolAddress: sipherPoolData.poolAddress,
                totalPoolShares: weiToEther(sipherPoolData.totalPoolShares),
                weight: weiToEther(sipherPoolData.weight),
            },
            lpPool: {
                accountClaimedRewards: weiToEther(lpPoolData.accountClaimedRewards),
                accountPendingRewards: weiToEther(lpPoolData.accountPendingRewards),
                accountPoolShares: weiToEther(lpPoolData.accountPoolShares),
                accountTotalDeposit: weiToEther(lpPoolData.accountTotalDeposit),
                depositToken: lpPoolData.depositToken,
                deposits: lpPoolData.deposits.map(deposit => ({
                    amount: weiToEther(deposit.amount),
                    start: parseInt(deposit.start) * 1000,
                    end: parseInt(deposit.end) * 1000,
                })),
                poolAddress: lpPoolData.poolAddress,
                totalPoolShares: weiToEther(lpPoolData.totalPoolShares),
                weight: weiToEther(lpPoolData.weight),
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
