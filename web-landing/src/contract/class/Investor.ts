import Web3 from "web3";
import { InvestorAbi, InvestorAddress } from "../code";

export class Investor {
    Investor;

    constructor(web3: Web3) {
        this.Investor = new web3.eth.Contract(InvestorAbi, InvestorAddress);
    }

    async claim(from: string, totalAmount: string, proof: string[]) {
        await this.Investor.methods.claim(totalAmount, proof).send({ from });
    }
    async claimed(from: string) {
        return parseInt(await this.Investor.methods.claimed("0", from).call());
    }

    async getClaimableAmountAtTimestamp(from: string, totalAmount: string, proof: string[]) {
        return parseInt(
            await this.Investor.methods
                .getClaimableAmountAtTimestamp(
                    from,
                    totalAmount,
                    proof,
                    Math.floor(new Date().getTime() / 1000).toString()
                )
                .call()
        );
    }
}
