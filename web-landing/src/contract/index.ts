import { getETHPrice, getSipherPrice } from "@hooks/api"
import Web3 from "web3"
import {
    SipherIBCO,
    View,
    SipherToken,
    StakingPools,
    EscrowPool,
    LPSipherWethUniswap,
    StakingLPSipherWethUniswap,
    Weth,
} from "./class"
import { LPSipherWethKyber } from "./class/LPSipherWethKyber"
import { StakingLPSipherWethKyber } from "./class/StakingLPSipherWethKyber"
import {
    StakingPoolAddress,
    EscrowPoolAddress,
    StakingLPSipherWethUniswapAddress,
    LPSipherWethUniswapAddress,
} from "./code"
import { LPSipherWethKyberAddress } from "./code/LPSipherWethKyber"
import { StakingLPSipherWethKyberAddress } from "./code/StakingLPSipherWethKyber"

export const weiToEther = (balance: string) => {
    return parseFloat(Web3.utils.fromWei(balance))
}

export class ContractCaller {
    web3: Web3
    SipherIBCO: SipherIBCO
    View: View
    SipherToken: SipherToken
    StakingPools: StakingPools
    EscrowPools: EscrowPool
    LPSipherWethUniswap: LPSipherWethUniswap
    StakingLPSipherWethUniswap: StakingLPSipherWethUniswap
    LPSipherWethKyber: LPSipherWethKyber
    StakingLPSipherWethKyber: StakingLPSipherWethKyber
    Weth: Weth

    constructor(provider: any) {
        this.web3 = new Web3(provider)
        this.SipherIBCO = new SipherIBCO(this.web3)
        this.View = new View(this.web3)
        this.SipherToken = new SipherToken(this.web3)
        this.StakingPools = new StakingPools(this.web3)
        this.EscrowPools = new EscrowPool(this.web3)
        this.LPSipherWethUniswap = new LPSipherWethUniswap(this.web3)
        this.StakingLPSipherWethUniswap = new StakingLPSipherWethUniswap(this.web3)
        this.LPSipherWethKyber = new LPSipherWethKyber(this.web3)
        this.StakingLPSipherWethKyber = new StakingLPSipherWethKyber(this.web3)
        this.Weth = new Weth(this.web3)
    }

    async getBalance(from: string) {
        return parseInt(await this.web3.eth.getBalance(from))
    }

    /** Returns total staked in USD */
    async getTotalStaked() {
        const sipherStaked = await this.SipherToken.getBalance(StakingPoolAddress)
        const LPUniswapStaked = await this.LPSipherWethUniswap.getBalance(StakingLPSipherWethUniswapAddress)
        const LPKyberStaked = await this.LPSipherWethKyber.getBalance(StakingLPSipherWethKyberAddress)

        const sipherPrice = await getSipherPrice()
        const lpUniswapPrice = await this.getLpUniswapPrice()
        const lpKyberPrice = await this.getLpKyberPrice()

        const stakePoolTotalStakedByUSD = sipherStaked * sipherPrice
        const lpUniswapPoolTotalStakedByUSD = LPUniswapStaked * lpUniswapPrice
        const lpKyberPoolTotalStakedByUSD = LPKyberStaked * lpKyberPrice

        return {
            stakePoolTotalStakedByUSD,
            lpUniswapPoolTotalStakedByUSD,
            lpKyberPoolTotalStakedByUSD,
            totalStaked: stakePoolTotalStakedByUSD + lpUniswapPoolTotalStakedByUSD + lpKyberPoolTotalStakedByUSD,
        }
    }

    async getTotalClaimed() {
        return await this.SipherToken.getBalance(EscrowPoolAddress)
    }

    async getLpUniswapTVL() {
        const lpBalance = await this.Weth.balanceOf(LPSipherWethUniswapAddress)
        const ethPrice = await getETHPrice()
        const StakedLPPoolETH = lpBalance * ethPrice

        const sipherBalance = await this.SipherToken.getBalance(LPSipherWethUniswapAddress)
        const sipherPrice = await getSipherPrice()
        const StakedLPPoolSipher = sipherBalance * sipherPrice

        return StakedLPPoolETH + StakedLPPoolSipher
    }

    async getLpKyberTVL() {
        const lpBalance = await this.Weth.balanceOf(LPSipherWethKyberAddress)
        const ethPrice = await getETHPrice()
        const StakedLPPoolETH = lpBalance * ethPrice

        const sipherBalance = await this.SipherToken.getBalance(LPSipherWethKyberAddress)
        const sipherPrice = await getSipherPrice()
        const StakedLPPoolSipher = sipherBalance * sipherPrice

        return StakedLPPoolETH + StakedLPPoolSipher
    }

    async getLpUniswapPrice() {
        const lpPoolTVL = await this.getLpUniswapTVL()

        const totalSupply = await this.LPSipherWethUniswap.totalSupply()
        return lpPoolTVL / totalSupply
    }

    async getLpKyberPrice() {
        const lpPoolTVL = await this.getLpKyberTVL()
        const totalSupply = await this.LPSipherWethKyber.totalSupply()
        return lpPoolTVL / totalSupply
    }
}
