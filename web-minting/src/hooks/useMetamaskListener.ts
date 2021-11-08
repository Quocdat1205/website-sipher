import { metaMaskProvider } from "@helper"
import { useEffect } from "react"

export interface UseMetaMaskListenerProps {
    onAccountsChanged: (accounts: string[]) => void
    onChainChanged: () => void
}

/** Listen to "chainChanged" and "accountsChanged" events */
export const useMetaMaskListener = ({ onAccountsChanged, onChainChanged }: UseMetaMaskListenerProps) => {
    useEffect(() => {
        if (metaMaskProvider) {
            metaMaskProvider.on("accountsChanged", onAccountsChanged)
            metaMaskProvider.on("chainChanged", onChainChanged)
        }
        return () => {
            if (metaMaskProvider) {
                metaMaskProvider.removeListener("accountsChanged", onAccountsChanged)
                metaMaskProvider.removeListener("chainChanged", onChainChanged)
            }
        }
    }, [])
}

export default useMetaMaskListener
