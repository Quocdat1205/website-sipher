import { CHAIN_ID } from "@constant/index"
import { Connector } from "../types"
import { SafeAppConnector } from "@gnosis.pm/safe-apps-web3-react"

// Injected is actually MetaMask Extension
const initGnosis = (): Connector => {
    return {
        web3ReactConnector: new SafeAppConnector({ supportedChainIds: [CHAIN_ID] }),
    }
}

export default initGnosis
