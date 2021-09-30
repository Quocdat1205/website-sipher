export const sale = {
    public: {
        NOT_FOR_SALE: ["Each address will be able to mint 05 NFTs at maximum.", "Public sale start time."],
        SALE: ["Each address will be able to mint 05 NFTs at maximum.", "Public sale end time."],
    },
    private: {
        NOT_FOR_SALE: [
            "Available for whitelisted address only. The purchase limit will be based on contribution history to Sipher community.",
            "Private sale start time:",
        ],
        SALE: [
            "Available for whitelisted address only. The purchase limit will be based on contribution history to Sipher community.",
            "Private sale end time:",
        ],
    },
}
type INote = Record<"NOT_END_SALE" | "END_SALE", { text: string; link?: { path: string; text: string } }[]>

export const note: INote = {
    NOT_END_SALE: [
        {
            text: "Only confirm transaction when your wallet provider shows no error/warning.",
        },
        {
            text: "Adjust Gas Fees accordingly to your transaction to go through fast.",
            link: {
                path: "https://ethgasstation.info",
                text: "(For reference: https://ethgasstation.info)",
            },
        },
        {
            text: "Be careful before confirming a transaction when all NFTs are almost minted. Your transaction could be reverted if all supplies sold out.",
        },
        {
            text: "Sipher NEKO reveal party will take place on ...",
        },
    ],
    END_SALE: [
        { text: "Never provide your private key." },
        { text: "Adjust Gas Fees according for your transaction to go through fast." },
        {
            text: "Be careful before confirming a transaction when all NFTs are almost minted. Your transaction could be reverted if all supplies sold out.",
        },
    ],
}
