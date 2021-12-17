import React from "react"
import { useWeb3React } from "@web3-react/core"
import { SafeAppConnector } from "@gnosis.pm/safe-apps-web3-react"
import { CHAIN_ID } from "@constant/index"
import useChakraToast from "@hooks/useChakraToast"

function useSafeAppConnection(connector: SafeAppConnector | undefined) {
    const { activate } = useWeb3React()
    const toast = useChakraToast()

    React.useEffect(() => {
        const autoConnect = async () => {
            if (connector) {
                const isSafe = await connector.isSafeApp()
                if (!isSafe) return

                const chain = await connector.getChainId()
                if (chain !== CHAIN_ID) {
                    toast({
                        status: "error",
                        title: "Unsupported network chain",
                        message: "Please switch to ethereum mainnet and try again!",
                    })
                    return
                }
                activate(connector, undefined, true)
            }
        }

        autoConnect()
    }, [activate, connector, toast]) // intentionally only running on mount (make sure it's only mounted once :))
}

export { useSafeAppConnection }
