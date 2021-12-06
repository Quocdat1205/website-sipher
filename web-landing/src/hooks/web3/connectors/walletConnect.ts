import { CHAIN_ID } from "@constant/index"
import { UserRejectedRequestError, WalletConnectConnector } from "@web3-react/walletconnect-connector"
import { ConnectionRejectedError } from "../errors"
import { Connector } from "../types"

const initWalletConnect = (): Connector => {
    const web3ReactConnector = () => {
        return new WalletConnectConnector({
            qrcode: true,
            infuraId: "8e3937db21b341ceac1607d35ae551dd",
            supportedChainIds: [CHAIN_ID],
        })
    }
    const handleActivationError = (err: Error) => {
        return err instanceof UserRejectedRequestError ? new ConnectionRejectedError() : null
    }
    return {
        web3ReactConnector: web3ReactConnector(),
        handleActivationError,
    }
}

export default initWalletConnect
