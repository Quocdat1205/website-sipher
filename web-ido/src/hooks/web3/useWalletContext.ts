import { useContext } from "react"
import WalletContext from "./WalletContext"

export const useWalletContext = () => {
    const walletContext = useContext(WalletContext)

    if (walletContext === null) {
        throw new Error(
            "useWallet() can only be used inside of <UseWalletProvider />, " + "please declare it at a higher level."
        )
    }

    return walletContext
}

export default useWalletContext
