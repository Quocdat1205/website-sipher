import { useEffect, useRef } from "react";
import Web3 from "web3";
import { authenticateUser, getUsersByAddress, signupUser } from "@api/user";
import { useWalletContext } from "@hooks/storeWallet/store";

declare global {
	interface Window {
		ethereum: any;
	}
}

const provider = typeof window !== "undefined" && window.ethereum;
const web3 = new Web3(provider);

const chains = (chainId) => {
	if (!!Number(chainId) && chainId.length > 9) {
		return "local";
	}
	switch (chainId) {
		case "1":
			return "mainnet";
		case "3":
			return "ropsten";
		case "4":
			return "rinkeby";
		case "5":
			return "goerli";
		case "42":
			return "kovan";
		default:
			return `unknown`;
	}
};

export const useMetamask = () => {
	const { values, setValue } = useWalletContext();
	const _isMounted = useRef(true);
	const _isConnectCalled = useRef(false);

	useEffect(() => {
		return () => {
			_isMounted.current = false;
		};
	}, []);

	//conect metamask
	const connect = async () => {
		if (!provider) throw Error("Metamask is not available.");
		if (!_isMounted.current) throw Error("Component is not mounted.");
		if (_isConnectCalled.current) throw Error("Connect method already called.");
		_isConnectCalled.current = true;
		setValue("web3", web3);
		const accounts = await getAccounts({ requestPermission: true });
		const publicAddress = await accounts[0].toLowerCase();

		await getChain();
		await getToken(publicAddress);

		_isConnectCalled.current = false;
	};

	//change wallet or change network return account wallet new and chain network
	const UpdateAccount = () => {
		//check chain network change
		provider.on("chainChanged", async (chainId) => {
			const _chainId = parseInt(chainId, 16).toString();
			const _chainInfo = { id: _chainId, name: chains(_chainId) };
			setValue("chain", _chainInfo);
		});

		//check account wallet change
		provider.on("accountsChanged", async (accounts) => {
			if (accounts.length) {
				setValue("account", accounts[0]);
				setValue("isConnected", false);
			}
		});
	};

	const getToken = async (publicAddress) => {
		//check info user
		//info user return true
		const user = await getUsersByAddress(publicAddress);
		//info user return false (signup user)
		let accountSignup;
		if (user) {
			accountSignup = user;
		} else {
			//Register an account if not in the data
			accountSignup = await signupUser(publicAddress);
		}
		//check token on cookies
		let token;
		// if (!cookies[LS_KEY]) {
		// 	token = await handleAuthenticate(accountSignup);
		// }
		// setValue("isSignature", !!cookies[LS_KEY] || token ? true : false)
		setValue("accountLogin", accountSignup.publicAddress);
	};

	//get account wallet metamask
	const getAccounts = async ({ requestPermission }) => {
		if (!provider) {
			console.warn("Metamask is not available.");
			return;
		}
		try {
			const accounts = await provider.request({
				method: requestPermission ? "eth_requestAccounts" : "eth_accounts",
				params: [],
			});
			if (accounts.length) {
				setValue("isConnected", true);
				setValue("account", accounts[0]);
			}
			return accounts;
		} catch (error: any) {
			throw Error(error);
		}
	};

	// get network chain in metamask
	const getChain = async () => {
		if (!provider) {
			console.warn("Metamask is not available.");
			return;
		}
		try {
			const chainId = await provider.request({
				method: "net_version",
				params: [],
			});
			const _chainInfo = { id: chainId, name: chains(chainId) };
			setValue("chain", _chainInfo);
			return _chainInfo;
		} catch (error: any) {
			throw Error(error);
		}
	};

	//get balance metamask
	const getBalanceMetaMask = async () => {
		if (values.account.length && values.isConnected && values.web3) {
			let _balance;
			if (values.web3?.eth) {
				_balance = await values.web3.eth.getBalance(values.account[0]);
			} else {
				_balance = await values.web3.getBalance(values.account[0]);
			}
			return parseFloat((_balance / 10 ** 18).toString()).toFixed(2);
		}
		return 0;
	};

	//auth accountLogin return token
	const handleAuthenticate = async (accountSignup) => {
		const { publicAddress, nonce } = accountSignup;
		const signature = await handleSignMessage(publicAddress, nonce);
		const token = await authenticateUser(publicAddress, signature);
		// setCookie("login-with-metamask:auth", token, {
		// 	path: "/",
		// 	maxAge: 60 * 60 * 1,
		// });
		return token;
	};

	// signature accountLogin return hash code
	const handleSignMessage = async (publicAddress, nonce) => {
		try {
			const signature = await web3.eth.personal.sign(
				`I am signing my one-time nonce: ${nonce}`,
				publicAddress,
				"" // MetaMask will ignore the password argument here
			);
			return signature;
		} catch (err) {
			throw new Error("You need to sign the message to be able to log in.");
		}
	};

	return {
		connect,
		getAccounts,
		getChain,
		UpdateAccount,
		handleAuthenticate,
		getBalanceMetaMask,
		metaState: { ...values, isAvailable: !!provider },
	};
};
