import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core"
import { WalletConnectConnector } from "@web3-react/walletconnect-connector"
import { useState, useRef, useMemo, useCallback, useEffect } from "react"
import { getChain } from "./chains"
import { connectors, ConnectorId } from "./connectors"
import { ChainUnsupportedError } from "./errors"
import { Status } from "./types"
import {
    clearLastActiveAccount,
    setLastConnector,
    setLastActiveAccount,
    getLastConnector,
    getLastActiveAccount,
    setAccessToken,
    clearAccessToken,
} from "./utils"
import Web3 from "web3"
import WalletConnectProvider from "@walletconnect/web3-provider"
import { authenticateUser, getUsersByAddress, IUser } from "@hooks/api/user"
import { useChakraToast } from "@sipher/web-components"

declare global {
    interface Window {
        ethereum: any
    }
}
const providerMM = typeof window !== "undefined" && window.ethereum
const providerWC = new WalletConnectProvider({
    infuraId: "52e62e876fe64ea2b200aea33d8e22f1", // Required
})

const useWallet = () => {
    const [connectorName, setConnectorName] = useState<ConnectorId | null>(null)
    const [status, setStatus] = useState<Status>("disconnected")
    const [error, setError] = useState<Error | null>(null)
    const web3React = useWeb3React()
    const { account, chainId } = web3React
    const activationId = useRef(0)
    // Current chain id
    const chain = useMemo(() => (chainId ? getChain(chainId) : null), [chainId])

    const reset = useCallback(() => {
        ;(connectors["walletConnect"].web3ReactConnector as WalletConnectConnector).walletConnectProvider = undefined
        if (web3React.active) {
            web3React.deactivate()
        }
        clearLastActiveAccount()
        clearAccessToken()
        setConnectorName(null)
        setError(null)
        setStatus("disconnected")
    }, [web3React])

    // if the user switched networks on the wallet itself
    // return unsupported error.
    useMemo(() => {
        if (web3React.error instanceof UnsupportedChainIdError) {
            setStatus("error")
            setError(new ChainUnsupportedError(web3React.error.message))
        }
    }, [web3React.error])
    const toast = useChakraToast()
    // connect to wallet
    const connect = useCallback(
        async (connectorId: ConnectorId = "injected") => {
            const id = ++activationId.current
            reset()

            if (id !== activationId.current) {
                return
            }

            // start connecting if nothing went wrong
            setStatus("connecting")

            const connector = connectors[connectorId]

            // get injected web3 connector
            const web3ReactConnector = connector.web3ReactConnector
            try {
                // set connector name to injected
                setConnectorName(connectorId)
                // actual connect
                await web3React.activate(web3ReactConnector, undefined, true)

                // save last connector name to login after refresh
                setLastConnector(connectorId)
                // listen to some event
                if (connectorId === "injected") {
                    const account = await web3ReactConnector.getAccount()
                    account && setLastActiveAccount(account)
                    web3ReactConnector.getProvider().then(provider => {
                        provider.on("accountsChanged", () => {
                            reset()
                        })
                        provider.on("chainChanged", () => {
                            reset()
                        })
                    })
                }
                setStatus("connected")
            } catch (err: any) {
                if (id !== activationId.current) return
                setConnectorName(null)
                setStatus("error")
                if (err instanceof UnsupportedChainIdError) {
                    setError(new ChainUnsupportedError(err.message))
                    toast({ title: err.name, message: err.message })
                    return
                }

                // it might have thrown an error known by the connector
                if (connector.handleActivationError) {
                    const handledError = connector.handleActivationError(err)
                    if (handledError) {
                        toast({ title: handledError.name, message: handledError.message })
                        setError(handledError)
                        return
                    }
                }

                // otherwise, set to state the received error
                setError(err)
            }
        },
        [reset, web3React]
    )

    // Signature message on provider
    const signMessage = useCallback(
        async (address: string, nonce: number) => {
            const web3 = new Web3(connectorName === "injected" ? providerMM : providerWC)
            let signature: string
            if (connectorName === "injected") {
                signature = await web3.eth.personal.sign(
                    `I am signing my one-time nonce: ${nonce}`,
                    address,
                    "" // MetaMask will ignore the password argument here
                )
            } else {
                await providerWC.enable()
                signature = await web3.eth.personal.sign(
                    `I am signing my one-time nonce: ${nonce}`,
                    address,
                    "" // WalletConnect will ignore the password argument here
                )
            }

            return signature
        },
        [web3React, connectorName]
    )

    /** Authenticate user by address and nonce
     * @returns string
     */
    const authenticateAddress = async (user: IUser): Promise<string> => {
        const { address, nonce } = user
        const signature = await signMessage(address, nonce)
        const token = await authenticateUser(address, signature)
        return token
    }

    /** Sign user up or log user in with address */
    const getUser = async (address: string): Promise<IUser> => {
        let account = await getUsersByAddress(address)
        return account
    }

    //** Get accessToken when change emotion */
    const getAccessToken = useCallback(
        async address => {
            const account = await getUser(address)
            const token = await authenticateAddress(account)

            setAccessToken(token)
            return token
        },
        [web3React]
    )
    // auto connect on refresh
    useEffect(() => {
        const lastConnector = getLastConnector()
        const lastActiveAccount = getLastActiveAccount()

        if (lastActiveAccount && lastConnector === "injected" && !account) {
            connect()
        }
    }, [connect])

    const wallet = {
        web3React,
        account: account || null,
        connect,
        connector: connectorName,
        reset,
        chain,
        isConnecting: status === "connecting",
        error,
        isActive: web3React.active,
        ethereum: web3React.library,
        getAccessToken,
    }

    return wallet
}

export default useWallet
