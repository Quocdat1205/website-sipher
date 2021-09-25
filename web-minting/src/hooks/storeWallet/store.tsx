import useFormCore from "@hooks/useFormCore";
import { createContext, useContext } from "react";

interface TypeState {
	account: string;
	accountLogin: string;
	chain: {
		id: string | null;
		name: "";
	};
	isConnected: boolean;
	web3: any;
	isSignature: boolean;
	isSmartContract: "NOT_CONNECT" | "CONNECT" | "ERROR";
	time: {
		private: number;
		public: number;
	};
	status: {
		private: string;
		public: string;
	};
	proof: any;
	accessToken: string;
}

const initialState: TypeState = {
	account: "",
	accountLogin: "",
	chain: { id: null, name: "" },
	isConnected: false,
	web3: null,
	isSignature: false,
	isSmartContract: "NOT_CONNECT",
	time: { private: 0, public: 0 },
	status: { private: "NOT_FOR_SALE", public: "NOT_FOR_SALE" },
	proof: [],
	accessToken: "",
};

type IWalletContext = { values: TypeState; setValue: (field: keyof TypeState, value: any) => void };

const WalletContext = createContext<IWalletContext | null>(null);

export const WalletProvider = ({ children }) => {
	const { values, setValue } = useFormCore<TypeState>(initialState);
	return <WalletContext.Provider value={{ values, setValue }}>{children}</WalletContext.Provider>;
};

export const useWalletContext = () => {
	const ctx = useContext(WalletContext) as IWalletContext;
	return ctx;
};
