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

        const balance = await this.Weth.balanceOf(UniswapAddress)
        const uniswapTotalSupply = await this.Uniswap.totalSupply()

        const ethPrice = await getETHPrice()
        const sipherPrice = await getSipherPrice()

        const lpPoolTVL = balance * ethPrice // $
        const stakePoolTVL = sipherStaked * sipherPrice

        const lpPoolTotalStakedByUSD = (lpStaked * lpPoolTVL) / uniswapTotalSupply
        const stakePoolTotalStakedByUSD = stakePoolTVL

        return {
            lpPoolTVL,
            stakePoolTVL,
            totalStaked: lpPoolTotalStakedByUSD + stakePoolTotalStakedByUSD,
        }
    }

    async getTotalClaimed() {
        return await this.SipherToken.getBalance(EscrowPoolAddress)
    }
}
