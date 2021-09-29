import { useEffect, useState } from "react"
import router from "next/router"
import { endTime, publicSaleTime } from "@utils/key_auth"
import { useChakraToast, useFormCore } from "@sipher/web-components"
import { getChainName, metaMaskProvider, connectWallet } from "src/helper/metamask"
import { getSaleConfig, getTotalSupply } from "@helper/smartContract"
import { useQuery } from "react-query"

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
    isConnected: boolean
    isSignature: boolean
    isSmartContract: "NOT_CONNECT" | "CONNECT" | "ERROR"
    time: {
        private: number
        public: number
    }
    status: {
        private: string
        public: string
    }
    isWhitelisted: {
        proof: string[]
        cap: number
    }
    accessToken: string
}

const initialState: TypeState = {
    accountLogin: "",
    chain: null,
    isConnected: false,
    isSignature: false,
    isSmartContract: "NOT_CONNECT",
    time: { private: 0, public: 0 },
    status: { private: "NOT_FOR_SALE", public: "NOT_FOR_SALE" },
    isWhitelisted: {
        proof: [],
        cap: 0,
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
    const toast = useChakraToast(4500)

    const connect = async () => {
        try {
            if (!metaMaskProvider) {
                toast("error", "MetaMask not found!", "Please install MetaMask extension.")
                return
            }
            if (isConnecting) {
                toast("warning", "MetaMask is connecting!")
                return
            }
            setIsConnecting(true)
            const { account, chainInfo, token, whitelistInfo } = await connectWallet()
            initForm({
                ...values,
                isConnected: true,
                chain: chainInfo,
                accessToken: token,
                isWhitelisted: whitelistInfo,
                accountLogin: account.address,
            })
            let now = new Date().getTime()
            if (now > endTime) {
                router.push("inventory")
            } else if (now > publicSaleTime) {
                router.push("public-minting")
            } else {
                router.push(whitelistInfo.proof.length > 0 ? "private-minting" : "public-minting")
            }
            setIsConnecting(false)
            toast("success", "Connected to MetaMask!")
        } catch (error: any) {
            if (error.code === 4001) {
                toast("error", "User denied message signature", "Please sign the message to continue!")
            } else {
                toast("error", "Something went wrong!", "Try again later.")
            }
            setIsConnecting(false)
        }
    }
    const logout = () => {
        initForm({
            ...values,
            isConnected: false,
            isSignature: false,
            accountLogin: "",
        })
        toast("success", "Logged out successfully!")
    }

    // ethereum wallet listener
    useEffect(() => {
        if (metaMaskProvider) {
            metaMaskProvider.on("chainChanged", async chainId => {
                const _chainId = parseInt(chainId, 16).toString()
                const _chainInfo = { id: _chainId, name: getChainName(_chainId) }
                setValue("chain", _chainInfo)
            })

            //check account wallet change
            metaMaskProvider.on("accountsChanged", async accounts => {
                if (accounts.length) {
                    setValue("accountLogin", "")
                    setValue("isConnected", false)
                    setValue("isSignature", false)
                }
            })
        }
    }, [])

    useQuery("sale-config", getSaleConfig, {
        onSuccess: data => {
            getStatus(data)
            setSaleTime({
                private: data[0] * 1000,
                public: data[1] * 1000,
                end: data[2] * 1000,
            })
        },
        onError: () => {
            toast("error", "Failed to get sale config!", "Try again later")
            setValue("time", { private: 0, public: 0 })
        },
    })

    useQuery("total-supply", getTotalSupply, {
        onSuccess: totalSupply => {
            setValue("isSmartContract", "CONNECT")
            if (totalSupply >= 10000) {
                setValue("status", { private: "END_SALE", public: "END_SALE" })
            }
        },
        onError: () => {
            toast("error", "Failed to get total suppply!", "Try again later")
            setValue("isSmartContract", "ERROR")
        },
    })

    const getStatus = (data: [number, number, number]) => {
        //data[0] -> data[1]: private
        //data[1] -> data[2]: public
        let now = new Date()
        if (now < new Date(data[0] * 1000)) {
            setValue("time", { private: data[0] * 1000, public: data[1] * 1000 })
            setValue("status", { private: "NOT_FOR_SALE", public: "NOT_FOR_SALE" })
        } else if (now < new Date(data[1] * 1000)) {
            setValue("time", { private: data[1] * 1000, public: data[1] * 1000 })
            setValue("status", { private: "SALE", public: "NOT_FOR_SALE" })
        } else if (now < new Date(data[2] * 1000)) {
            setValue("time", { private: now, public: data[2] * 1000 })
            setValue("status", { private: "END_SALE", public: "SALE" })
        } else {
            setValue("time", { private: now, public: now })
            setValue("status", { private: "END_SALE", public: "END_SALE" })
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
