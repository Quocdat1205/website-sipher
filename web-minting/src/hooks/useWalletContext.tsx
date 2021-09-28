import { createContext, useContext } from "react"
import { useMetamask } from "./useMetamask"

type IWalletContext = ReturnType<typeof useMetamask>

const WalletContext = createContext<IWalletContext | null>(null)

export const WalletProvider = ({ children }) => {
    const hook = useMetamask()
    return <WalletContext.Provider value={hook}>{children}</WalletContext.Provider>
}

const useWalletContext = () => useContext(WalletContext) as IWalletContext

export default useWalletContext
