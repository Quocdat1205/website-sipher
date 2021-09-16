import { useContext } from "react";
import Web3 from "web3";
import { useQuery } from "react-query";
import { SMARTCONTRACT_SALE, SMARTCONTRACT_INU } from "../utils/key_auth";
import INU from "@src/contract/INU.json";
import SALE from "@src/contract/SALE.json";
import { checkgas } from "../api/user";
import { useWalletContext } from "@hooks/storeWallet/store";

const provider = window !== undefined && window.ethereum;
const web3 = new Web3(provider);

export const useSmartContract = () => {
	const { values, setValue } = useWalletContext();

	const ContractProviderNFT = new web3.eth.Contract(SALE.abiNFT, SMARTCONTRACT_SALE);

	const ContractProviderINU = new web3.eth.Contract(INU.apiINU, SMARTCONTRACT_INU);

	useQuery("NFT-sale", () => ContractProviderNFT.methods.getSaleConfig().call(), {
		onSuccess: (data) => getStatus(data),
		onError: () => ErrorGetTimer(),
	});

	useQuery("NFT-supply", () => ContractProviderINU.methods.totalSupply().call(), {
		onSuccess: (data) => getTotal(data),
		onError: () => console.log("Something went wrong! getTotalSupply"),
	});

	// get total supply nft
	const getTotal = (data) => {
		setValue("totalSupply", parseInt(data));
	};

	const ErrorGetTimer = () => {
		console.log("Something went wrong! getPreSales");
		setValue("time", 0);
	};

	const getStatus = (data) => {
		// let now = new Date();
		// let nowTimestamp = moment(now).unix() * 1000;
		// if (nowTimestamp < parseInt(data[0]) * 1000) {
		//   dispatch({ type: "SET_TIME", payload: parseInt(data[0]) * 1000 });
		//   dispatch({ type: "SET_STATUS", payload: "NOT_FOR_SALE" });
		// } else if (nowTimestamp < parseInt(data[1]) * 1000) {
		//   dispatch({ type: "SET_TIME", payload: parseInt(data[1]) * 1000 });
		//   dispatch({ type: "SET_STATUS", payload: "PRIVATE_SALE" });
		// } else if (nowTimestamp < parseInt(data[2]) * 1000) {
		//   dispatch({ type: "SET_TIME", payload: parseInt(data[2]) * 1000 });
		//   dispatch({ type: "SET_STATUS", payload: "PUBLIC_SALE" });
		// } else if (nowTimestamp > parseInt(data[2]) * 1000) {
		//   dispatch({ type: "SET_TIME", payload: parseInt(data[2]) * 1000 });
		if (data) {
			setValue("status", "END_SAVE");
		}
		setValue("status", "END_SAVE");
		// }
	};

	//buy NFT
	const sendSmartContract = async (account, slot, slotPrice) => {
		const _gaslimit =
			slot === "1" ? 296656 : slot === "2" ? 438147 : slot === "3" ? 612987 : slot === "4" ? 787828 : 962668;
		// const _gasprice = await web3.eth.getGasPrice();
		const gaseth = await checkgas();

		const maxFeePerGas = Math.round(1.3 * parseInt(gaseth.data.FastGasPrice));
		const maxPriorityFeePerGas = Math.round(
			parseInt(gaseth.data.ProposeGasPrice) - parseInt(gaseth.data.suggestBaseFee) < 2
				? 2
				: parseInt(gaseth.data.ProposeGasPrice) - parseInt(gaseth.data.suggestBaseFee)
		);
		console.log(maxPriorityFeePerGas);
		await ContractProviderNFT.methods.buy(slot).send({
			from: account,
			value: web3.utils.toHex(web3.utils.toWei(slotPrice, "ether")),
			// gasLimit: web3.utils.toHex(_gaslimit),
			// maxPriorityFeePerGas: web3.utils.toHex(web3.utils.toWei((Math.round(_gasprice/100000000000*2)).toString(), "gwei")),
			// maxFeePerGas: null,
			gasLimit: web3.utils.toHex(_gaslimit),
			maxPriorityFeePerGas: web3.utils.toHex(web3.utils.toWei(maxPriorityFeePerGas.toString(), "gwei")),
			maxFeePerGas: web3.utils.toHex(web3.utils.toWei(maxFeePerGas.toString(), "gwei")),
		});
	};

	// get balane of account (nft)
	const getBalanceOf = async (publicAddress) => {
		const data = await ContractProviderINU.methods.balanceOf(publicAddress).call();
		return parseInt(data);
	};

	// get balane of account (nft)
	const getUserRecord = async (publicAddress) => {
		const data = await ContractProviderNFT.methods.getUserRecord(publicAddress).call();
		return {
			whitelistBought: parseInt(data[0]),
			publicBought: parseInt(data[1]),
		};
	};

	const getWhiteList = async (publicAddress) => {
		const isWhiteList = await ContractProviderNFT.methods.isWhitelistedAddress(publicAddress).call();
		return isWhiteList;
	};

	return {
		sendSmartContract,
		getBalanceOf,
		getUserRecord,
		getWhiteList,
		metaState: { ...values, isAvailable: !!provider },
	};
};
