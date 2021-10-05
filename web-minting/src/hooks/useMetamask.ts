import { useEffect, useState } from "react"
import router from "next/router"
import { useChakraToast, useFormCore } from "@sipher/web-components"
import { metaMaskProvider, connectWallet } from "src/helper/metamask"
import { getSaleConfig, getTotalSupply } from "@helper/smartContract"
import { useQuery } from "react-query"
import { CHAIN_ID } from "@constant/index"

declare global {
	interface Window {
		ethereum: any
	}
}

interface TypeState {
	accountLogin: string
	chain: {
		id: string | null
		name: string
	} | null
	isSmartContract: "NOT_CONNECT" | "CONNECT" | "ERROR"
	time: {
		private: number
		public: number
		freeMint: number
	}
	status: Record<"private" | "public" | "freeMint", "NOT_FOR_SALE" | "SALE" | "END_SALE">
	isWhitelisted: {
		proof: string[]
		privateCap: number
		freeCap: number
	}
	accessToken: string
}

const initialState: TypeState = {
	accountLogin: "",
	chain: null,
	isSmartContract: "NOT_CONNECT",
	time: { private: 0, public: 0, freeMint: 0 },
	status: { private: "NOT_FOR_SALE", public: "NOT_FOR_SALE", freeMint: "NOT_FOR_SALE" },
	isWhitelisted: {
		proof: [],
		privateCap: 0,
		freeCap: 0,
	},
	accessToken: "",
}

export const useMetamask = () => {
	const [isConnecting, setIsConnecting] = useState(false)
	const { values, setValue, initForm } = useFormCore<TypeState>(initialState)
	const [saleTime, setSaleTime] = useState({
		private: 0,
		public: 0,
		end: 0,
	})
	const toast = useChakraToast()
	const connect = async () => {
		try {
			if (!metaMaskProvider) {
				toast({ status: "error", title: "MetaMask not found!", message: "Please install MetaMask extension." })
				return
			}
			if (isConnecting) {
				toast({ status: "warning", title: "MetaMask is connecting!" })
				return
			}
			setIsConnecting(true)
			const { account, chainInfo, token, whitelistInfo } = await connectWallet()
			if (chainInfo.id !== CHAIN_ID) {
				toast({ status: "error", title: "Wrong network!" })
				setIsConnecting(false)
				return
			}
			initForm({
				...values,
				chain: chainInfo,
				accessToken: token,
				isWhitelisted: whitelistInfo,
				accountLogin: account.address,
			})
			let now = new Date().getTime()
			if (now > saleTime.end) {
				router.push("inventory")
			} else if (now > saleTime.public) {
				router.push("public-minting")
			} else {
				router.push(whitelistInfo.proof.length > 0 ? "private-minting" : "public-minting")
			}
			setIsConnecting(false)
			toast({ status: "success", title: "Connected to MetaMask!" })
		} catch (error: any) {
			if (error.code === 4001) {
				toast({
					status: "error",
					title: "User denied message signature",
					message: "Please sign the message to continue!",
				})
			} else {
				toast({ status: "error", title: "Something went wrong!", message: "Try again later." })
			}
			setIsConnecting(false)
		}
	}

	const logout = () => {
		initForm({
			...values,
			accountLogin: "",
			accessToken: "",
		})
		toast({ status: "success", title: "Logged out successfully!" })
	}

	// ethereum wallet listener
	useEffect(() => {
		if (metaMaskProvider) {
			metaMaskProvider.on("chainChanged", async () => {
				window.location.reload()
			})

			//check account wallet change
			metaMaskProvider.on("accountsChanged", async (accounts: string[]) => {
				if (accounts.length) {
					setValue("accountLogin", "")
					setValue("accessToken", "")
				}
			})
		}
		return () => {
			if (metaMaskProvider) {
				metaMaskProvider.removeListener("chainChanged", async () => {
					window.location.reload()
				})
				metaMaskProvider.removeListener("accountsChanged", async (accounts: string[]) => {
					if (accounts.length) {
						setValue("accountLogin", "")
						setValue("accessToken", "")
					}
				})
			}
		}
	}, [])

	useQuery("sale-config", getSaleConfig, {
		enabled: !!metaMaskProvider,
		onSuccess: (data) => {
			getStatus(data)
			setSaleTime({
				private: data[0] * 1000,
				public: data[1] * 1000,
				end: data[2] * 1000,
			})
		},
		onError: () => {
			toast({ status: "error", title: "Failed to get sale config!", message: "Try again later" })
			setValue("time", { private: 0, public: 0 })
		},
	})

	useQuery("total-supply", getTotalSupply, {
		enabled: !!metaMaskProvider,
		onSuccess: (totalSupply) => {
			setValue("isSmartContract", "CONNECT")
			if (totalSupply >= 10000) {
				setValue("status", { private: "END_SALE", public: "END_SALE" })
			}
		},
		onError: () => {
			toast({ status: "error", title: "Failed to get total suppply!", message: "Try again later" })
			setValue("isSmartContract", "ERROR")
		},
	})

	const getStatus = (data: [number, number, number, number]) => {
		//data[0] -> data[1]: private
		//data[1] -> data[2]: public
		let now = new Date()
		if (now < new Date(data[0] * 1000)) {
			setValue("time", { public: data[0] * 1000, private: data[1] * 1000, freeMint: data[2] * 1000 })
			setValue("status", { public: "NOT_FOR_SALE", private: "NOT_FOR_SALE", freeMint: "NOT_FOR_SALE" })
		} else if (now < new Date(data[1] * 1000)) {
			setValue("time", { public: data[1] * 1000, private: data[1] * 1000 })
			setValue("status", { public: "SALE", private: "NOT_FOR_SALE", freeMint: "NOT_FOR_SALE" })
		} else if (now < new Date(data[2] * 1000)) {
			setValue("time", { public: now, private: data[2] * 1000 })
			setValue("status", { public: "END_SALE", private: "SALE", freeMint: "NOT_FOR_SALE" })
		} else if (now < new Date(data[3] * 1000)) {
			setValue("time", { public: now, private: data[3] * 1000 })
			setValue("status", { public: "END_SALE", private: "END_SALE", freeMint: "SALE" })
		} else {
			setValue("time", { public: now, private: now })
			setValue("status", { public: "END_SALE", private: "END_SALE", freeMint: "END_SALE" })
		}
	}

	return {
		connect,
		logout,
		setMetaState: setValue,
		metaState: { ...values, isAvailable: !!metaMaskProvider },
		isConnecting,
		toast,
		saleTime,
	}
}
