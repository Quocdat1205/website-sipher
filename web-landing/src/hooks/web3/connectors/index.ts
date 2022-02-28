import initGnosis from "./gnosis"
import initInjected from "./injected"
import initWalletConnect from "./walletConnect"
import initCoinbaseConnect from "./coinbase"

export const connectors = {
    injected: initInjected,
    walletConnect: initWalletConnect,
    gnosis: initGnosis,
    coinbase: initCoinbaseConnect,
} as const

export type ConnectorId = keyof typeof connectors
