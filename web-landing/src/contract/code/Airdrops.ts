export const AirdropsAddress = "0xaf53B583cB0e2A27cd2BCCF1356639cEB176383C"; // test

export const AirdropsAbi: any = [
    {
        inputs: [
            { internalType: "contract IERC20", name: "_tokenDrops", type: "address" },
            {
                components: [
                    { internalType: "uint32", name: "startTime", type: "uint32" },
                    { internalType: "uint32", name: "vestingInterval", type: "uint32" },
                    { internalType: "uint32", name: "numberOfVestingPoint", type: "uint32" },
                ],
                internalType: "struct SipherAirdrops.AirdropsConfig",
                name: "_airdropsConfig",
                type: "tuple",
            },
            { internalType: "bytes32", name: "_whitelistedMerkleRoot", type: "bytes32" },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: "address", name: "account", type: "address" },
            { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
            { indexed: false, internalType: "uint32", name: "airdropsID", type: "uint32" },
        ],
        name: "Claim",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: "address", name: "previousOwner", type: "address" },
            { indexed: true, internalType: "address", name: "newOwner", type: "address" },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        inputs: [],
        name: "airdropsConfig",
        outputs: [
            { internalType: "uint32", name: "startTime", type: "uint32" },
            { internalType: "uint32", name: "vestingInterval", type: "uint32" },
            { internalType: "uint32", name: "numberOfVestingPoint", type: "uint32" },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "airdropsID",
        outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "uint256", name: "totalAmount", type: "uint256" },
            { internalType: "bytes32[]", name: "proofs", type: "bytes32[]" },
        ],
        name: "claim",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "uint256", name: "", type: "uint256" },
            { internalType: "address", name: "", type: "address" },
        ],
        name: "claimed",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "claimer", type: "address" },
            { internalType: "uint256", name: "totalAmount", type: "uint256" },
            { internalType: "bytes32[]", name: "proofs", type: "bytes32[]" },
            { internalType: "uint32", name: "timestamp", type: "uint32" },
        ],
        name: "getClaimableAmountAtTimestamp",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "claimer", type: "address" },
            { internalType: "uint256", name: "totalAmount", type: "uint256" },
            { internalType: "bytes32[]", name: "proofs", type: "bytes32[]" },
        ],
        name: "isValidClaimer",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
    },
    { inputs: [], name: "pause", outputs: [], stateMutability: "nonpayable", type: "function" },
    {
        inputs: [],
        name: "paused",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function",
    },
    { inputs: [], name: "renounceOwnership", outputs: [], stateMutability: "nonpayable", type: "function" },
    {
        inputs: [
            { internalType: "contract IERC20", name: "_tokenDrops", type: "address" },
            {
                components: [
                    { internalType: "uint32", name: "startTime", type: "uint32" },
                    { internalType: "uint32", name: "vestingInterval", type: "uint32" },
                    { internalType: "uint32", name: "numberOfVestingPoint", type: "uint32" },
                ],
                internalType: "struct SipherAirdrops.AirdropsConfig",
                name: "_airdropsConfig",
                type: "tuple",
            },
            { internalType: "bytes32", name: "_whitelistedMerkleRoot", type: "bytes32" },
        ],
        name: "startNewAirdrops",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "tokenDrops",
        outputs: [{ internalType: "contract IERC20", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    { inputs: [], name: "unpause", outputs: [], stateMutability: "nonpayable", type: "function" },
    {
        inputs: [
            {
                components: [
                    { internalType: "uint32", name: "startTime", type: "uint32" },
                    { internalType: "uint32", name: "vestingInterval", type: "uint32" },
                    { internalType: "uint32", name: "numberOfVestingPoint", type: "uint32" },
                ],
                internalType: "struct SipherAirdrops.AirdropsConfig",
                name: "_airdropsConfig",
                type: "tuple",
            },
        ],
        name: "updateAirdropsConfg",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{ internalType: "bytes32", name: "_whitelistedMerkleRoot", type: "bytes32" }],
        name: "updateWhitelistedMerkleRoot",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "whitelistedMerkleRoot",
        outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "contract IERC20", name: "_tokenERC20", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "withdrawFund",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
