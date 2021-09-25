import Web3 from "web3"
import { useQuery } from "react-query"
import { SMARTCONTRACT_SALE_NEKO, SMARTCONTRACT_NEKO } from "../utils/key_auth"
import NFT from "../contract/NFT"
import SALE from "../contract/SALE"
import { checkgas } from "@api/index"
import { useWalletContext } from "@hooks/storeWallet/store"

const provider = typeof window !== "undefined" && window.ethereum
const web3 = new Web3(provider)

export const useSmartContract = () => {
	const { values, setValue } = useWalletContext()

	const ContractProviderSALE = new web3.eth.Contract(SALE.abiSale, SMARTCONTRACT_SALE_NEKO)
	const ContractProviderNFT = new web3.eth.Contract(NFT.apiNFT, SMARTCONTRACT_NEKO)

	useQuery("NFT-sale", () => ContractProviderSALE.methods.getSaleConfig().call(), {
		onSuccess: (data) => getStatus(data),
		onError: () => ErrorGetTimer(),
	})

	// useQuery("NFT-supply", () => ContractProviderINU.methods.totalSupply().call(), {
	// 	onSuccess: (data) => getTotal(data),
	// 	onError: () => console.log("Something went wrong! getTotalSupply"),
	// });

	// get total supply nft
	const getTotalSupply = async () => {
		try {
			const data = await ContractProviderNFT.methods.totalSupply().call()
			if (data) {
				setValue("isSmartContract", "CONNECT")
				return parseInt(data)
			}
		} catch (error) {
			console.log(error)
			setValue("isSmartContract", "ERROR")
		}
	}

	const ErrorGetTimer = () => {
		console.log("Something went wrong! getPreSales")
		setValue("time", { private: 0, public: 0 })
	}

	const getStatus = (data) => {
		//data[0] -> data[1]: private
		//data[1] -> data[2]: public
		let now = new Date()
		if (now < new Date(parseInt(data[0]) * 1000)) {
			setValue("time", { private: parseInt(data[0]) * 1000, public: parseInt(data[1]) * 1000 })
			setValue("status", { private: "NOT_FOR_SALE", public: "NOT_FOR_SALE" })
		} else if (now < new Date(parseInt(data[1]) * 1000)) {
			setValue("time", { private: parseInt(data[1]) * 1000, public: parseInt(data[1]) * 1000 })
			setValue("status", { private: "PRIVATE_SALE", public: "NOT_FOR_SALE" })
		} else if (now < new Date(parseInt(data[2]) * 1000)) {
			setValue("time", { private: now, public: parseInt(data[2]) * 1000 })
			setValue("status", { private: "END_SALE", public: "PUBLIC_SALE" })
		} else if (now > new Date(parseInt(data[2]) * 1000)) {
			setValue("time", { private: now, public: now })
			setValue("status", "END_SALE")
		} else {
			setValue("time", { private: now, public: now })
			setValue("status", "END_SALE")
		}
		// }
	}

	//buy NFT
	const sendSmartContract = async (account, slot, slotPrice) => {
		const _gaslimit =
			slot === "1" ? 296656 : slot === "2" ? 438147 : slot === "3" ? 612987 : slot === "4" ? 787828 : 962668
		// const _gasprice = await web3.eth.getGasPrice();
		const gaseth = await checkgas()

		const maxFeePerGas = Math.round(1.3 * parseInt(gaseth.data.FastGasPrice))
		const maxPriorityFeePerGas = Math.round(
			parseInt(gaseth.data.ProposeGasPrice) - parseInt(gaseth.data.suggestBaseFee) < 2
				? 2
				: parseInt(gaseth.data.ProposeGasPrice) - parseInt(gaseth.data.suggestBaseFee)
		)

		await ContractProviderSALE.methods.buy(slot, values.proof).send({
			from: account,
			value: web3.utils.toHex(web3.utils.toWei(slotPrice, "ether")),
			// gasLimit: web3.utils.toHex(_gaslimit),
			// maxPriorityFeePerGas: web3.utils.toHex(web3.utils.toWei((Math.round(_gasprice/100000000000*2)).toString(), "gwei")),
			// maxFeePerGas: null,
			gasLimit: web3.utils.toHex(_gaslimit),
			maxPriorityFeePerGas: web3.utils.toHex(web3.utils.toWei(maxPriorityFeePerGas.toString(), "gwei")),
			maxFeePerGas: web3.utils.toHex(web3.utils.toWei(maxFeePerGas.toString(), "gwei")),
		})
	}

	// get balane of account (nft)
	const getBalanceOf = async (publicAddress: string) => {
		const data = await ContractProviderNFT.methods.balanceOf(publicAddress).call()
		return parseInt(data)
	}

	// get balane of account (nft)
	const getUserRecord = async (publicAddress: string) => {
		const data = await ContractProviderSALE.methods.getUserRecord(publicAddress).call()
		return {
			whitelistBought: parseInt(data[0]),
			publicBought: parseInt(data[1]),
		}
	}

	return {
		sendSmartContract,
		getBalanceOf,
		getUserRecord,
		getTotalSupply,
		setContractState: setValue,
		metaState: { ...values, isAvailable: !!provider },
	}
}
