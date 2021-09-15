import { useContext, useEffect, useRef } from "react";
import Web3 from "web3";
import { MetaStateContext, MetaDispatchContext } from "./store";
import {
  authenticateUser,
  getUsersByAddress,
  signupUser,
} from "../../api/user";
import { useCookies } from "react-cookie";
import { LS_KEY } from "../../utils/key_auth";

const web3 = new Web3(window.ethereum);

const chains = (chainId) => {
  if (!!Number(chainId) && chainId.length > 9) {
    return "local";
  }
  switch (chainId) {
    case "1":
      return "mainnet";
    case "3":
      return "ropsten";
    case "4":
      return "rinkeby";
    case "5":
      return "goerli";
    case "42":
      return "kovan";
    default:
      return `unknown`;
  }
};

export const useMetamask = () => {
  const state = useContext(MetaStateContext);
  const dispatch = useContext(MetaDispatchContext);
  const _isMounted = useRef(true);
  const _isConnectCalled = useRef(false);
  const [cookies, setCookie, removeCookie] = useCookies([LS_KEY]);

  useEffect(() => {
    return () => {
      _isMounted.current = false;
    };
  }, []);

  const connect = async (Web3Interface, settings = {}) => {
    if (!window.ethereum) throw Error("Metamask is not available.");
    if (!Web3Interface)
      throw Error("Web3 Provider is required. You can use web3.js.");
    if (!_isMounted.current) throw Error("Component is not mounted.");
    if (_isConnectCalled.current) throw Error("Connect method already called.");
    _isConnectCalled.current = true;

    const _web3 = new Web3Interface(
      ...(Object.keys(settings).length
        ? [window.ethereum, settings]
        : [window.ethereum])
    );
    dispatch({ type: "SET_WEB3", payload: _web3 });

    const accounts = await getAccounts({ requestPermission: true });
    const publicAddress = await accounts[0].toLowerCase();

    await getChain();
    await getToken(publicAddress);

    //check change accounts
    _isConnectCalled.current = false;
  };

  const UpdateAccount = () => {
    window.ethereum.on("chainChanged", async (chainId) => {
      const _chainId = parseInt(chainId, 16).toString();
      const _chainInfo = { id: _chainId, name: chains(_chainId) };
      dispatch({ type: "SET_CHAIN", payload: _chainInfo });
    });

    window.ethereum.on("accountsChanged", async (accounts) => {
      if (accounts.length) {
        removeCookie(LS_KEY);
        dispatch({ type: "SET_ACCOUNT", payload: accounts });
        dispatch({ type: "SET_CONNECTED", payload: false });
      }
    });
  };

  const getToken = async (publicAddress) => {
    //check info user
    //info user return true
    const user = await getUsersByAddress(publicAddress);
    //info user return false (signup user)
    let accountSignup;
    if (user) {
      accountSignup = user;
    } else {
      accountSignup = await signupUser(publicAddress);
    }
    //check token on cookies
    let token;
    if (!cookies[LS_KEY]) {
      token = await handleAuthenticate(accountSignup);
    }
    dispatch({
      type: "SET_SIGN",
      payload: !!cookies[LS_KEY] || token ? true : false,
    });
    dispatch({
      type: "SET_ACCOUNT_LOGIN",
      payload: accountSignup.publicAddress,
    });
  };

  const getAccounts = async ({ requestPermission }) => {
    if (!window.ethereum) {
      console.warn("Metamask is not available.");
      return;
    }
    try {
      const accounts = await window.ethereum.request({
        method: requestPermission ? "eth_requestAccounts" : "eth_accounts",
        params: [],
      });
      if (accounts.length) {
        dispatch({ type: "SET_CONNECTED", payload: true });
        dispatch({ type: "SET_ACCOUNT", payload: accounts });
      }
      return accounts;
    } catch (error) {
      throw Error(error);
    }
  };

  const getChain = async () => {
    if (!window.ethereum) {
      console.warn("Metamask is not available.");
      return;
    }
    try {
      const chainId = await window.ethereum.request({
        method: "net_version",
        params: [],
      });
      const _chainInfo = { id: chainId, name: chains(chainId) };
      dispatch({
        type: "SET_CHAIN",
        payload: _chainInfo,
      });
      return _chainInfo;
    } catch (error) {
      throw Error(error);
    }
  };

  const getBalanceMetaMask = async () => {
    if (state.account.length && state.isConnected && state.web3) {
      let _balance;
      if (state.web3?.eth) {
        _balance = await state.web3.eth.getBalance(state.account[0]);
      } else {
        _balance = await state.web3.getBalance(state.account[0]);
      }
      return parseFloat(_balance / 10 ** 18).toFixed(2);
    }
  };

  const handleAuthenticate = async (accountSignup) => {
    const { publicAddress, nonce } = accountSignup;
    const signature = await handleSignMessage(publicAddress, nonce);
    const token = await authenticateUser(publicAddress, signature);
    setCookie("login-with-metamask:auth", token, {
      path: "/",
      maxAge: 60 * 60 * 1,
    });
    return token;
  };

  const handleSignMessage = async (publicAddress, nonce) => {
    try {
      const signature = await web3.eth.personal.sign(
        `I am signing my one-time nonce: ${nonce}`,
        publicAddress,
        "" // MetaMask will ignore the password argument here
      );
      return signature;
    } catch (err) {
      throw new Error("You need to sign the message to be able to log in.");
    }
  };

  return {
    connect,
    getAccounts,
    getChain,
    UpdateAccount,
    handleAuthenticate,
    dispatch,
    getBalanceMetaMask,
    metaState: { ...state, isAvailable: !!window.ethereum },
  };
};
