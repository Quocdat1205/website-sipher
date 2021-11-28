import { CHAIN_ID } from "@constant/index"
import { UserRejectedRequestError, WalletConnectConnector } from "@web3-react/walletconnect-connector"
import { ConnectionRejectedError } from "../errors"
import { Connector } from "../types"

const initWalletConnect = (): Connector => {
    const web3ReactConnector = () => {
        return new WalletConnectConnector({
            qrcode: true,
            infuraId: "52e62e876fe64ea2b200aea33d8e22f1",
            supportedChainIds: [CHAIN_ID],
        })
    }
    const handleActivationError = (err: Error) => {
        console.log(err)
        return err instanceof UserRejectedRequestError ? new ConnectionRejectedError() : null
    }
    return {
        web3ReactConnector: web3ReactConnector(),
        handleActivationError,
    }
}

export default initWalletConnect
