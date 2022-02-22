import Web3 from "web3";
import { weiToEther } from "..";
import { AirdropsAbi, AirdropsAddress } from "../code";

export class Airdrops {
    Airdrops;

    constructor(web3: Web3) {
        this.Airdrops = new web3.eth.Contract(AirdropsAbi, AirdropsAddress);
    }

    async claim(from: string, totalAmount: string, proof: string[]) {
        await this.Airdrops.methods.claim(totalAmount, proof).send({ from });
    }
    async claimed(from: string) {
        return weiToEther(await this.Airdrops.methods.claimed("0", from).call());
    }

    async getClaimableAmountAtTimestamp(from: string, totalAmount: string, proof: string[]) {
        return weiToEther(
            await this.Airdrops.methods
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
