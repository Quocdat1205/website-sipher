import { useEffect, useRef } from "react"
import Web3 from "web3"
import { authenticateUser, getUsersByAddress, IUser, signupUser, checkIsWhitelisted } from "@api/index"
import { useWalletContext } from "@hooks/storeWallet/store"
import router from "next/router"
import { useIsMounted } from "."

declare global {
	interface Window {
		ethereum: any
	}
}

const provider = typeof window !== "undefined" && window.ethereum
const web3 = new Web3(provider)

const getNetwork = (networkId: string) => {
	if (!!Number(networkId) && networkId.length > 9) {
		return "local"
	}
	switch (networkId) {
		case "1":
			return "mainnet"
		case "3":
			return "ropsten"
		case "4":
			return "rinkeby"
		case "5":
			return "goerli"
		case "42":
			return "kovan"
		default:
			return `unknown`
	}
}

export const useMetamask = () => {
	const { values, setValue } = useWalletContext()
	const _isConnectCalled = useRef(false)
	const isMounted = useIsMounted()

	//conect metamask
	const connect = async () => {
		if (!provider) throw Error("Metamask is not available.")
		if (!isMounted) throw Error("Component is not mounted.")
		if (_isConnectCalled.current) throw Error("Connect method already called.")
		_isConnectCalled.current = true
		setValue("web3", web3)
		const accounts = await getAccounts()
		const publicAddress = await accounts[0].toLowerCase()
		await getChain()
		const [token, proof] = await getToken(publicAddress)
		setValue("isSignature", !!token && !!proof ? true : false)
		setValue("accessToken", !!token && token)
		setValue("proof", !!proof && proof)
		_isConnectCalled.current = false
		router.push(proof.length > 0 ? "private-minting" : "public-minting")
	}

	//change wallet or change network return account wallet new and chain network
	const UpdateAccount = () => {
		//check chain network change
		provider.on("chainChanged", async (chainId) => {
			const _chainId = parseInt(chainId, 16).toString()
			const _chainInfo = { id: _chainId, name: getNetwork(_chainId) }
			setValue("chain", _chainInfo)
		})

		//check account wallet change
		provider.on("accountsChanged", async (accounts) => {
			if (accounts.length) {
				setValue("account", accounts[0])
				setValue("accountLogin", "")
				setValue("isConnected", false)
				setValue("isSignature", false)
			}
		})
	}

	const getToken = async (publicAddress: string) => {
		//check info user
		//info user return true
		const user = await getUsersByAddress(publicAddress)
		//info user return false (signup user)
		let accountSignup
		if (user) {
			accountSignup = user
		} else {
			//Register an account if not in the data
			accountSignup = await signupUser(publicAddress)
		}
		//check token on cookies
		const token = await handleAuthenticate(accountSignup)
		const proof = await checkIsWhitelisted(publicAddress)
		setValue("accountLogin", publicAddress)

		return [token, proof]
	}

	//get account wallet metamask
	const getAccounts = async () => {
		if (!provider) {
			console.warn("Metamask is not available.")
			return
		}
		try {
			const accounts = await provider.request({
				method: "eth_requestAccounts",
				params: [],
			})
			if (accounts.length) {
				setValue("isConnected", true)
				setValue("account", accounts[0])
			}
			return accounts
		} catch (error: any) {
			throw Error(error)
		}
	}

	// get network chain in metamask
	const getChain = async () => {
		if (!provider) {
			console.warn("Metamask is not available.")
			return
		}
		try {
			const chainId = await provider.request({
				method: "net_version",
				params: [],
			})
			const _chainInfo = { id: chainId, name: getNetwork(chainId) }
			setValue("chain", _chainInfo)
			return _chainInfo
		} catch (error: any) {
			throw Error(error)
		}
	}

	//get balance metamask
	const getMetamaskBalance = async (): Promise<number> => {
		if (values.account.length && values.isConnected && values.web3) {
			let _balance
			if (values.web3?.eth) {
				_balance = await values.web3.eth.getBalance(values.accountLogin)
			} else {
				_balance = await values.web3.getBalance(values.accountLogin)
			}
			return parseFloat((_balance / 10 ** 18).toFixed(2).toString())
		}
		return 0
	}

	//auth accountLogin return token
	const handleAuthenticate = async (accountSignup: IUser): Promise<string> => {
		const { publicAddress, nonce } = accountSignup
		const signature = await handleSignMessage(publicAddress, nonce)
		const token = await authenticateUser(publicAddress, signature)
		// setCookie("login-with-metamask:auth", token, {
		// 	path: "/",
		// 	maxAge: 60 * 60 * 1,
		// });
		return token
	}

	// signature accountLogin return hash code
	const handleSignMessage = async (publicAddress: string, nonce: number) => {
		try {
			const signature = await web3.eth.personal.sign(
				`I am signing my one-time nonce: ${nonce}`,
				publicAddress,
				"" // MetaMask will ignore the password argument here
			)
			return signature
		} catch (err) {
			throw new Error("You need to sign the message to be able to log in.")
		}
	}

	return {
		connect,
		getAccounts,
		getChain,
		UpdateAccount,
		handleAuthenticate,
		getBalanceMetaMask: getMetamaskBalance,
		setMetaState: setValue,
		metaState: { ...values, isAvailable: !!provider },
	}
}
