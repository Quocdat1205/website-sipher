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
} from "./utils"

const useWallet = () => {
    const [connectorName, setConnectorName] = useState<ConnectorId | null>(null)
    const [status, setStatus] = useState<Status>("disconnected")
    const [error, setError] = useState<Error | null>(null)
    const web3React = useWeb3React()
    const { account, chainId } = web3React
    const activationId = useRef(0)
    console.log("Address", account)
    // Current chain id
    const chain = useMemo(() => (chainId ? getChain(chainId) : null), [chainId])

    const reset = useCallback(() => {
        ;(connectors["walletConnect"].web3ReactConnector as WalletConnectConnector).walletConnectProvider = undefined
        if (web3React.active) {
            web3React.deactivate()
        }
        clearLastActiveAccount()
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
                            console.log("Account changed!")
                        })
                        provider.on("chainChanged", () => {
                            reset()
                            console.log("Chain changed!")
                        })
                    })
                }
                setStatus("connected")
            } catch (err: any) {
                console.log(err)
                if (id !== activationId.current) return
                setConnectorName(null)
                setStatus("error")
                if (err instanceof UnsupportedChainIdError) {
                    setError(new ChainUnsupportedError(err.message))
                    return
                }

                // it might have thrown an error known by the connector
                if (connector.handleActivationError) {
                    const handledError = connector.handleActivationError(err)
                    if (handledError) {
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
    }

    return wallet
}

export default useWallet
