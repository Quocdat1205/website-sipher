import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { useState, useRef, useMemo, useCallback, useEffect } from "react";
import { getChain } from "./chains";
import { connectors, ConnectorId } from "./connectors";
import { ChainUnsupportedError } from "./errors";
import { Status } from "./types";
import {
    clearLastActiveAccount,
    setLastConnector,
    setLastActiveAccount,
    getLastConnector,
    getLastActiveAccount,
} from "./utils";
import Web3 from "web3";
import { authenticateUser, getUsersByAddress, logout } from "@hooks/api/user";
import { ContractCaller } from "@source/contract";
import useChakraToast from "@hooks/useChakraToast";
import { SafeAppConnector } from "@gnosis.pm/safe-apps-web3-react";
import { useSafeAppConnection } from "./useSafeAppConnection";

const gnosisConnector = typeof window !== "undefined" ? new SafeAppConnector() : undefined;
declare global {
    interface Window {
        ethereum: any;
    }
}

const useWallet = () => {
    const [connectorName, setConnectorName] = useState<ConnectorId | null>(null);
    const [status, setStatus] = useState<Status>("disconnected");
    const [error, setError] = useState<Error | null>(null);
    const web3React = useWeb3React();
    const web3 = useRef<null | Web3>(null);
    const { account, chainId, library: ethereum } = web3React;
    const activationId = useRef(0);
    // Current chain id
    const chain = useMemo(() => (chainId ? getChain(chainId) : null), [chainId]);

    const scCaller = useRef<ContractCaller | null>(null);

    useSafeAppConnection(gnosisConnector);

    const resetToken = async () => {
        await logout();
    };

    const reset = useCallback(() => {
        // eslint-disable-next-line @typescript-eslint/no-extra-semi
        (connectors["walletConnect"]().web3ReactConnector as WalletConnectConnector).walletConnectProvider = undefined;
        if (web3React.active) {
            resetToken();
            web3React.deactivate();

            // Manually remove walletconnect
            localStorage.removeItem("walletconnect");
        }

        clearLastActiveAccount();

        setConnectorName(null);
        setError(null);
        setStatus("disconnected");
    }, [web3React, resetToken]);

    // if the user switched networks on the wallet itself
    // return unsupported error.
    useMemo(() => {
        if (web3React.error instanceof UnsupportedChainIdError) {
            setStatus("error");
            setError(new ChainUnsupportedError(web3React.error.message));
        }
    }, [web3React.error]);
    const toast = useChakraToast();

    useEffect(() => {
        if (web3React.library) {
            scCaller.current = new ContractCaller(web3React.library);
            web3.current = new Web3(web3React.library);
        }
    }, [web3React.library]);

    // connect to wallet
    const connect = useCallback(
        async (connectorId: ConnectorId = "injected") => {
            if (connectorId === "gnosis") {
                const isSafe = !!(await gnosisConnector?.isSafeApp());
                if (!isSafe) {
                    await navigator.clipboard.writeText(window.location.href);
                    window.open("https://gnosis-safe.io/app", "_blank");
                    return;
                }
            }

            const id = ++activationId.current;
            reset();

            if (id !== activationId.current) {
                return;
            }

            const connector = connectors[connectorId]();
            const web3ReactConnector = connector.web3ReactConnector;
            setStatus("connecting");
            setConnectorName(connectorId);

            try {
                await web3React.activate(web3ReactConnector, undefined, true);

                // save last connector name to login after refresh
                setLastConnector(connectorId);
                // listen to some event
                if (connectorId === "injected") {
                    const account = await web3ReactConnector.getAccount();
                    account && setLastActiveAccount(account);
                    web3ReactConnector.getProvider().then(provider => {
                        provider.on("accountsChanged", () => {
                            reset();
                            resetToken();
                        });
                        provider.on("chainChanged", () => {
                            reset();
                        });
                    });
                }
                setStatus("connected");
            } catch (err: any) {
                if (id !== activationId.current) return;
                setConnectorName(null);
                setStatus("error");
                if (err instanceof UnsupportedChainIdError) {
                    setError(new ChainUnsupportedError(err.message));
                    toast({
                        status: "error",
                        title: "Unsupported network chain",
                        message: "Please switch to ethereum mainnet and try again!",
                    });
                    return;
                }

                // it might have thrown an error known by the connector
                if (connector.handleActivationError) {
                    const handledError = connector.handleActivationError(err);
                    if (handledError) {
                        toast({ title: handledError.name, message: handledError.message });
                        setError(handledError);
                        return;
                    }
                }

                // otherwise, set to state the received error
                setError(err);
            }
        },
        [reset, resetToken, toast, web3React]
    );

    //** Get accessToken when change emotion */
    const getAccessTokenAPI = async () => {
        if (!account) throw Error("Account not found");
        if (!web3.current) throw Error("Provider not found");

        const user = await getUsersByAddress(account);

        const signature = await web3.current.eth.personal.sign(
            `I am signing my one-time nonce: ${user.nonce}`,
            account as string,
            ""
        );
        const result = await authenticateUser(account, signature);

        return result;
    };

    // auto connect on refresh
    useEffect(() => {
        const lastConnector = getLastConnector();
        const lastActiveAccount = getLastActiveAccount();

        if (lastActiveAccount && lastConnector === "injected" && !account) {
            connect();
        }
    }, [connect, account]);

    const wallet = {
        web3React,
        account: account || null,
        connect,
        connector: connectorName,
        reset,
        chain,
        isConnecting: status === "connecting",
        error,
        isActive: web3React.active,
        ethereum,
        getAccessToken: getAccessTokenAPI,
        scCaller,
        resetToken,
    };

    return wallet;
};

export default useWallet;
