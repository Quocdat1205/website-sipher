import { useState } from "react"
import router from "next/router"
import { useChakraToast, useFormCore } from "@sipher/web-components"
import { metaMaskProvider, connectWallet } from "src/helper/metamask"
import { getUserRecord } from "@helper/smartContract"
import { useQuery } from "react-query"
import { CHAIN_ID } from "@constant/index"
import { WhitelistInfo } from "@api/smartContract"
import useMetaMaskListener from "./useMetamaskListener"
import useSaleConfig from "./useSaleConfig"

declare global {
    interface Window {
        ethereum: any
    }
}

interface AppState {
    accountLogin: string
    chain: {
        id: string | null
        name: string
    } | null
    isScAvailable: boolean
    whitelistInfo: WhitelistInfo
    accessToken: string
}

const initialState: AppState = {
    accountLogin: "",
    chain: null,
    isScAvailable: false,
    whitelistInfo: {
        proof: [],
        privateCap: 0,
        freeMintCap: 0,
    },
    accessToken: "",
}

export const useMetamask = () => {
    const [isConnecting, setIsConnecting] = useState(false)
    const { values: states, setValue: setState, initForm } = useFormCore<AppState>(initialState)
    const toast = useChakraToast()
    const { saleConfig } = useSaleConfig()
    const { data: userRecord, isLoading: isLoadingUserRecord } = useQuery(
        "user-record",
        () => getUserRecord(states.accountLogin),
        {
            enabled: !!states.accountLogin,
            initialData: {
                publicBought: 0,
                whitelistBought: 0,
                freeMintBought: 0,
            },
        }
    )

    useMetaMaskListener({
        onAccountsChanged: () => {
            setState("accountLogin", "")
            setState("accessToken", "")
        },
        onChainChanged: () => window && window.location.reload(),
    })

    /** Connect to metamask */
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
                ...states,
                chain: chainInfo,
                accessToken: token,
                whitelistInfo: whitelistInfo,
                accountLogin: account.address,
            })
            let now = new Date().getTime()
            if (now)
                if (now > saleConfig!.endTime) {
                    router.push("inventory/neko")
                } else if (now > saleConfig!.freeMintTime && whitelistInfo.freeMintCap > 0) {
                    router.push("/free-minting")
                } else if (now > saleConfig!.publicEndTime && whitelistInfo.privateCap > 0) {
                    router.push("/private-sale")
                } else {
                    router.push("/public-sale")
                }
            setIsConnecting(false)
            toast({ status: "success", title: "Connected to MetaMask!" })
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

    /** Log out of metamask */
    const logout = () => {
        initForm({
            ...states,
            accountLogin: "",
            accessToken: "",
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
        userRecord,
        isLoadingUserRecord,
    }
}
