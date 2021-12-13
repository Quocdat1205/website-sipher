// * CHANGED TO MAINNET

export const ViewAddress = "0xA8317c540bC1268F98E042a20fE19057E85d6277"

export const ViewAbi: any = [
    {
        inputs: [
            { internalType: "address", name: "_stakingManager", type: "address" },
            { internalType: "address", name: "_escrowPool", type: "address" },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "escrowPool",
        outputs: [{ internalType: "contract TimeLockPool", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "address", name: "_account", type: "address" }],
        name: "fetchData",
        outputs: [
            {
                components: [
                    { internalType: "uint256", name: "pendingRewards", type: "uint256" },
                    {
                        components: [
                            { internalType: "address", name: "poolAddress", type: "address" },
                            { internalType: "uint256", name: "totalPoolShares", type: "uint256" },
                            { internalType: "address", name: "depositToken", type: "address" },
                            { internalType: "uint256", name: "accountPendingRewards", type: "uint256" },
                            { internalType: "uint256", name: "accountClaimedRewards", type: "uint256" },
                            { internalType: "uint256", name: "accountTotalDeposit", type: "uint256" },
                            { internalType: "uint256", name: "accountPoolShares", type: "uint256" },
                            { internalType: "uint256", name: "weight", type: "uint256" },
                            {
                                components: [
                                    { internalType: "uint256", name: "amount", type: "uint256" },
                                    { internalType: "uint64", name: "start", type: "uint64" },
                                    { internalType: "uint64", name: "end", type: "uint64" },
                                    { internalType: "uint256", name: "multiplier", type: "uint256" },
                                ],
                                internalType: "struct View.Deposit[]",
                                name: "deposits",
                                type: "tuple[]",
                            },
                        ],
                        internalType: "struct View.Pool[]",
                        name: "pools",
                        type: "tuple[]",
                    },
                    {
                        components: [
                            { internalType: "address", name: "poolAddress", type: "address" },
                            { internalType: "uint256", name: "totalPoolShares", type: "uint256" },
                            { internalType: "address", name: "depositToken", type: "address" },
                            { internalType: "uint256", name: "accountPendingRewards", type: "uint256" },
                            { internalType: "uint256", name: "accountClaimedRewards", type: "uint256" },
                            { internalType: "uint256", name: "accountTotalDeposit", type: "uint256" },
                            { internalType: "uint256", name: "accountPoolShares", type: "uint256" },
                            { internalType: "uint256", name: "weight", type: "uint256" },
                            {
                                components: [
                                    { internalType: "uint256", name: "amount", type: "uint256" },
                                    { internalType: "uint64", name: "start", type: "uint64" },
                                    { internalType: "uint64", name: "end", type: "uint64" },
                                    { internalType: "uint256", name: "multiplier", type: "uint256" },
                                ],
                                internalType: "struct View.Deposit[]",
                                name: "deposits",
                                type: "tuple[]",
                            },
                        ],
                        internalType: "struct View.Pool",
                        name: "escrowPool",
                        type: "tuple",
                    },
                    { internalType: "uint256", name: "totalWeight", type: "uint256" },
                ],
                internalType: "struct View.Data",
                name: "result",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "stakingManager",
        outputs: [{ internalType: "contract StakingManager", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
    },
]
