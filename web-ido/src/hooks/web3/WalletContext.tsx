import { createContext } from "react"
import useWallet from "./useWallet"

export const WalletContext = createContext<ReturnType<typeof useWallet> | null>(null)

export default WalletContext
