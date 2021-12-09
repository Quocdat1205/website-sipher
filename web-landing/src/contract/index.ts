import { getETHPrice, getSipherPrice } from "@hooks/api"
import Web3 from "web3"
import { SipherIBCO, View, SipherToken, StakingPools, EscrowPools, Uniswap, LpPools, Weth } from "./class"
import { StakingPoolAddress, EscrowPoolAddress, LpPoolAddress, UniswapAddress } from "./code"

export const weiToEther = (balance: string) => {
    return parseFloat(Web3.utils.fromWei(balance))
}

export class ContractCaller {
    web3: Web3
    SipherIBCO: SipherIBCO
    View: View
    SipherToken: SipherToken
    StakingPools: StakingPools
    EscrowPools: EscrowPools
    Uniswap: Uniswap
    LpPools: LpPools
    Weth: Weth

    constructor(provider: any) {
        this.web3 = new Web3(provider)
        this.SipherIBCO = new SipherIBCO(this.web3)
        this.View = new View(this.web3)
        this.SipherToken = new SipherToken(this.web3)
        this.StakingPools = new StakingPools(this.web3)
        this.EscrowPools = new EscrowPools(this.web3)
        this.Uniswap = new Uniswap(this.web3)
        this.LpPools = new LpPools(this.web3)
        this.Weth = new Weth(this.web3)
    }

    async getBalance(from: string) {
        return parseInt(await this.web3.eth.getBalance(from))
    }

    /** Returns total staked in USD */
    async getTotalStaked() {
        const sipherStaked = await this.SipherToken.getBalance(StakingPoolAddress)
        const lpStaked = await this.Uniswap.getBalance(LpPoolAddress)

        const sipherPrice = await getSipherPrice()
        const lpPrice = await this.getLpPrice()

        const lpPoolTotalStakedByUSD = lpStaked * lpPrice
        const stakePoolTotalStakedByUSD = sipherStaked * sipherPrice

        return {
            lpPoolTotalStakedByUSD,
            stakePoolTotalStakedByUSD,
            totalStaked: lpPoolTotalStakedByUSD + stakePoolTotalStakedByUSD,
        }
    }

    async getTotalClaimed() {
        return await this.SipherToken.getBalance(EscrowPoolAddress)
    }

    async getLpTVL() {
        const balance = await this.Weth.balanceOf(UniswapAddress)
        const ethPrice = await getETHPrice()
        const lpPoolTVL = balance * ethPrice
        return lpPoolTVL
    }

    async getLpPrice() {
        const lpPoolTVL = await this.getLpTVL()
        const uniswapTotalSupply = await this.Uniswap.totalSupply()
        return lpPoolTVL / uniswapTotalSupply
    }
}
