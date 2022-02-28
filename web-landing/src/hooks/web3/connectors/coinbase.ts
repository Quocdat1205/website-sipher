import { CHAIN_ID } from "@constant/index"
import { WalletLinkConnector } from "@web3-react/walletlink-connector"
import { Connector } from "../types"

const RPC_URLS: { [chainId: number]: string } = {
    1: `https://eth-mainnet.alchemyapi.io/v2/${process.env.NEXT_PUBLIC_INFURA_ID_MAIN}`,
    4: `https://eth-rinkeby.alchemyapi.io/v2/${process.env.NEXT_PUBLIC_INFURA_ID_TEST}`,
}

const initCoinbaseConnect = (): Connector => {
    const web3ReactConnector = () => {
        return new WalletLinkConnector({
            url: RPC_URLS[CHAIN_ID],
            appName: "SIPHER",
            supportedChainIds: [CHAIN_ID],
        })
    }

    return {
        web3ReactConnector: web3ReactConnector(),
    }
}

export default initCoinbaseConnect
