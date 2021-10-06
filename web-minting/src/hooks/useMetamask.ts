import { useEffect, useState } from "react"
import router from "next/router"
import { useChakraToast, useFormCore } from "@sipher/web-components"
import { metaMaskProvider, connectWallet } from "src/helper/metamask"
import { getSaleConfig, getTotalSupply, ISaleConfig } from "@helper/smartContract"
import { useQuery } from "react-query"
import { CHAIN_ID } from "@constant/index"
import { IWhitelisted } from "@api/smartContract"

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
    status: Record<"private" | "public" | "freeMint", "NOT_FOR_SALE" | "SALE" | "END_SALE">
    isWhitelisted: IWhitelisted
    accessToken: string
    saleConfig: ISaleConfig
}

const initialState: TypeState = {
    accountLogin: "",
    chain: null,
    isSmartContract: "NOT_CONNECT",
    status: { private: "NOT_FOR_SALE", public: "NOT_FOR_SALE", freeMint: "NOT_FOR_SALE" },
    isWhitelisted: {
        proof: [],
        privateCap: 0,
        freeMintCap: 0,
    },
    accessToken: "",
    saleConfig: {
        publicTime: 0,
        privateTime: 0,
        freeMintTime: 0,
        endTime: 0,
        maxSupply: 0,
    },
}

export const useMetamask = () => {
    const [isConnecting, setIsConnecting] = useState(false)
    const { values: states, setValue: setState, initForm } = useFormCore<TypeState>(initialState)
    const toast = useChakraToast()
    const connect = async () => {
        try {
            console.log("0. Start connecting!")
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
                ...states,
                chain: chainInfo,
                accessToken: token,
                isWhitelisted: whitelistInfo,
                accountLogin: account.address,
            })
            let now = new Date().getTime()
            if (now)
                if (now > states.saleConfig.endTime) {
                    router.push("inventory")
                } else if (now > states.saleConfig.publicTime) {
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
            ...states,
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
                    setState("accountLogin", "")
                    setState("accessToken", "")
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
                        setState("accountLogin", "")
                        setState("accessToken", "")
                    }
                })
            }
        }
    }, [])

    useQuery("sale-config", getSaleConfig, {
        enabled: !!metaMaskProvider,
        onSuccess: data => {
            getStatus(data)
            setState("saleConfig", data)
        },
        onError: () => {
            toast({ status: "error", title: "Failed to get sale config!", message: "Try again later" })
        },
    })

    useQuery("total-supply", getTotalSupply, {
        enabled: !!metaMaskProvider,
        onSuccess: totalSupply => {
            setState("isSmartContract", "CONNECT")
            if (totalSupply >= 10000) {
                setState("status", { private: "END_SALE", public: "END_SALE" })
            }
        },
        onError: () => {
            toast({ status: "error", title: "Failed to get total suppply!", message: "Try again later" })
            setState("isSmartContract", "ERROR")
        },
    })

    const getStatus = (data: ISaleConfig) => {
        let now = new Date().getTime()
        if (now < data.publicTime) {
            setState("status", { public: "NOT_FOR_SALE", private: "NOT_FOR_SALE", freeMint: "NOT_FOR_SALE" })
        } else if (now < data.privateTime) {
            setState("status", { public: "SALE", private: "NOT_FOR_SALE", freeMint: "NOT_FOR_SALE" })
        } else if (now < data.freeMintTime) {
            setState("status", { public: "END_SALE", private: "SALE", freeMint: "NOT_FOR_SALE" })
        } else if (now < data.endTime) {
            setState("status", { public: "END_SALE", private: "END_SALE", freeMint: "SALE" })
        } else {
            setState("status", { public: "END_SALE", private: "END_SALE", freeMint: "END_SALE" })
        }
    }
    return {
        connect,
        logout,
        setState,
        states: { ...states, isAvailable: !!metaMaskProvider },
        isConnecting,
        toast,
    }
}
