import { useState } from "react"
import { useChakraToast, useFormCore } from "@sipher/web-components"
import { metaMaskProvider, connectMetamask, connectWalletConnect } from "@helper"
import { CHAIN_ID } from "@constant/index"
import useMetaMaskListener from "./useMetamaskListener"

declare global {
    interface Window {
        ethereum: any
    }
}

export interface AppState {
    accountLogin: string
    chain: {
        id: string | null
        name: string
    } | null
    isScAvailable: boolean
}

const initialState: AppState = {
    accountLogin: "",
    chain: null,
    isScAvailable: false,
}

export const useMetamask = () => {
    const [isConnecting, setIsConnecting] = useState(false)
    const { values: states, setValue: setState, initForm } = useFormCore<AppState>(initialState)
    const toast = useChakraToast()

    useMetaMaskListener({
        onAccountsChanged: () => {
            setState("accountLogin", "")
        },
        onChainChanged: () => window && window.location.reload(),
    })

    /** Connect to metamask */
    const connect = async type => {
        if (type === "WalletConnect") {
            try {
                const { account, chainInfo } = await connectWalletConnect()
                console.log(account, chainInfo)
            } catch (error) {
                console.log(error)
            }
        } else {
            try {
                if (!metaMaskProvider) {
                    toast({
                        status: "error",
                        title: "MetaMask not found!",
                        message: "Please install MetaMask extension.",
                    })
                    return
                }
                if (isConnecting) {
                    return
                }
                setIsConnecting(true)
                const { account, chainInfo } = await connectMetamask()
                if (chainInfo.id !== CHAIN_ID) {
                    toast({
                        status: "error",
                        title: "Wrong network!",
                        message: "Please switch to ethereum mainnet and try again.",
                    })
                    setIsConnecting(false)
                    return
                }
                initForm({
                    ...states,
                    chain: chainInfo,
                    accountLogin: account,
                })
                setIsConnecting(false)
            } catch (error: any) {
                if (error.code === 4001) {
                    toast({
                        status: "error",
                        title: "User denied to sign message!",
                        message: "Please sign the message to continue!",
                    })
                } else {
                    toast({ status: "error", title: "Something went wrong!", message: "Try again later." })
                }
                setIsConnecting(false)
            }
        }
    }

    /** Log out of metamask */
    const logout = () => {
        initForm({
            ...states,
            accountLogin: "",
        })
        toast({ status: "success", title: "Logged out successfully!" })
    }

    return {
        connect,
        logout,
        setState,
        states,
        isConnecting,
        toast,
    }
}
