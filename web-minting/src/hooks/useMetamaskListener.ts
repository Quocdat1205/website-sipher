import { metaMaskProvider } from "@helper/metamask"
import { useEffect } from "react"

interface UseMetaMaskListenerProps {
    onAccountsChanged: (accounts: string[]) => void
    onChainChanged: () => void
}

/** Listen to "chainChanged" and "accountsChanged" events */
const useMetaMaskListener = ({ onAccountsChanged, onChainChanged }: UseMetaMaskListenerProps) => {
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
