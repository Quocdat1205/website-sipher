import Web3 from "web3";
import { AirdropsAbi, AirdropsAddress } from "../code";

export class Airdrops {
    Airdrops;

    constructor(web3: Web3) {
        this.Airdrops = new web3.eth.Contract(AirdropsAbi, AirdropsAddress);
    }

    async claim(from: string, totalAmount: string, proof: string[]) {
        console.log(totalAmount, proof);
        await this.Airdrops.methods.claim(totalAmount, proof).send({ from });
    }
}
