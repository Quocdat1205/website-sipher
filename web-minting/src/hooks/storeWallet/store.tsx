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
	totalSupply: number;
	time: number;
	status: string;
}

const initialState: TypeState = {
	account: "",
	accountLogin: "",
	chain: { id: null, name: "" },
	isConnected: false,
	web3: null,
	isSignature: false,
	totalSupply: 0,
	time: 0,
	status: "NOT_FOR_SALE",
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
