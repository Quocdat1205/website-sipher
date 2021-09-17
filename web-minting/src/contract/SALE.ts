const data: { abiNFT: any } = {
	abiNFT: [
		{
			inputs: [
				{
					internalType: "contract ISipherNFT",
					name: "_nft",
					type: "address",
				},
				{
					internalType: "uint64",
					name: "_whitelistTime",
					type: "uint64",
				},
				{
					internalType: "uint64",
					name: "_publicTime",
					type: "uint64",
				},
				{
					internalType: "uint64",
					name: "_endTime",
					type: "uint64",
				},
				{
					internalType: "uint64",
					name: "_maxSupply",
					type: "uint64",
				},
				{
					internalType: "uint256",
					name: "_maxWhitelistSize",
					type: "uint256",
				},
			],
			stateMutability: "nonpayable",
			type: "constructor",
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: "address",
					name: "buyer",
					type: "address",
				},
				{
					indexed: false,
					internalType: "uint256",
					name: "amount",
					type: "uint256",
				},
				{
					indexed: false,
					internalType: "uint256",
					name: "amountWeiPaid",
					type: "uint256",
				},
			],
			name: "OwnerBought",
			type: "event",
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: "address",
					name: "previousOwner",
					type: "address",
				},
				{
					indexed: true,
					internalType: "address",
					name: "newOwner",
					type: "address",
				},
			],
			name: "OwnershipTransferred",
			type: "event",
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: "address",
					name: "buyer",
					type: "address",
				},
				{
					indexed: false,
					internalType: "uint256",
					name: "amount",
					type: "uint256",
				},
				{
					indexed: false,
					internalType: "uint256",
					name: "amountWeiPaid",
					type: "uint256",
				},
			],
			name: "PublicBought",
			type: "event",
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: "address",
					name: "trigger",
					type: "address",
				},
			],
			name: "RollStartIndex",
			type: "event",
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: "bytes32",
					name: "merkelRoot",
					type: "bytes32",
				},
			],
			name: "SetMerkleRoot",
			type: "event",
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: "uint64",
					name: "endTime",
					type: "uint64",
				},
			],
			name: "UpdateSaleEndTime",
			type: "event",
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: "address",
					name: "account",
					type: "address",
				},
				{
					indexed: false,
					internalType: "bool",
					name: "isWhitelisted",
					type: "bool",
				},
			],
			name: "UpdateWhitelistedAddress",
			type: "event",
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: "address",
					name: "buyer",
					type: "address",
				},
				{
					indexed: false,
					internalType: "uint256",
					name: "amount",
					type: "uint256",
				},
				{
					indexed: false,
					internalType: "uint256",
					name: "amountWeiPaid",
					type: "uint256",
				},
			],
			name: "WhitelistBought",
			type: "event",
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: "address",
					name: "recipient",
					type: "address",
				},
				{
					indexed: false,
					internalType: "uint256",
					name: "amount",
					type: "uint256",
				},
			],
			name: "WithdrawSaleFunds",
			type: "event",
		},
		{
			inputs: [],
			name: "CAP_PER_ADDRESS",
			outputs: [
				{
					internalType: "uint64",
					name: "",
					type: "uint64",
				},
			],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [],
			name: "CAP_PER_WHITELISTED_ADDRESS",
			outputs: [
				{
					internalType: "uint64",
					name: "",
					type: "uint64",
				},
			],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [],
			name: "MAX_OWNER_BOUGHT_INITIAL",
			outputs: [
				{
					internalType: "uint64",
					name: "",
					type: "uint64",
				},
			],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [],
			name: "SALE_PRICE",
			outputs: [
				{
					internalType: "uint256",
					name: "",
					type: "uint256",
				},
			],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [
				{
					internalType: "uint64",
					name: "amount",
					type: "uint64",
				},
			],
			name: "buy",
			outputs: [],
			stateMutability: "payable",
			type: "function",
		},
		{
			inputs: [],
			name: "getSaleConfig",
			outputs: [
				{
					components: [
						{
							internalType: "uint64",
							name: "whitelistTime",
							type: "uint64",
						},
						{
							internalType: "uint64",
							name: "publicTime",
							type: "uint64",
						},
						{
							internalType: "uint64",
							name: "endTime",
							type: "uint64",
						},
						{
							internalType: "uint64",
							name: "maxSupply",
							type: "uint64",
						},
					],
					internalType: "struct ISipherNFTSale.SaleConfig",
					name: "config",
					type: "tuple",
				},
			],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [],
			name: "getSaleRecord",
			outputs: [
				{
					components: [
						{
							internalType: "uint64",
							name: "totalSold",
							type: "uint64",
						},
						{
							internalType: "uint64",
							name: "ownerBought",
							type: "uint64",
						},
						{
							internalType: "uint64",
							name: "totalWhitelistSold",
							type: "uint64",
						},
						{
							internalType: "uint64",
							name: "totalPublicSold",
							type: "uint64",
						},
					],
					internalType: "struct ISipherNFTSale.SaleRecord",
					name: "record",
					type: "tuple",
				},
			],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [
				{
					internalType: "address",
					name: "user",
					type: "address",
				},
			],
			name: "getUserRecord",
			outputs: [
				{
					components: [
						{
							internalType: "uint64",
							name: "whitelistBought",
							type: "uint64",
						},
						{
							internalType: "uint64",
							name: "publicBought",
							type: "uint64",
						},
					],
					internalType: "struct ISipherNFTSale.UserRecord",
					name: "record",
					type: "tuple",
				},
			],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [
				{
					internalType: "uint256",
					name: "index",
					type: "uint256",
				},
			],
			name: "getWhitelistedAddressAt",
			outputs: [
				{
					internalType: "address",
					name: "account",
					type: "address",
				},
			],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [],
			name: "getWhitelistedGroup",
			outputs: [
				{
					internalType: "address[]",
					name: "accounts",
					type: "address[]",
				},
			],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [],
			name: "getWhitelistedGroupLength",
			outputs: [
				{
					internalType: "uint256",
					name: "length",
					type: "uint256",
				},
			],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [
				{
					internalType: "address",
					name: "account",
					type: "address",
				},
			],
			name: "isWhitelistedAddress",
			outputs: [
				{
					internalType: "bool",
					name: "",
					type: "bool",
				},
			],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [],
			name: "maxWhitelistSize",
			outputs: [
				{
					internalType: "uint256",
					name: "",
					type: "uint256",
				},
			],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [],
			name: "merkleRoot",
			outputs: [
				{
					internalType: "bytes32",
					name: "",
					type: "bytes32",
				},
			],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [],
			name: "nft",
			outputs: [
				{
					internalType: "contract ISipherNFT",
					name: "",
					type: "address",
				},
			],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [],
			name: "owner",
			outputs: [
				{
					internalType: "address",
					name: "",
					type: "address",
				},
			],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [],
			name: "renounceOwnership",
			outputs: [],
			stateMutability: "nonpayable",
			type: "function",
		},
		{
			inputs: [],
			name: "rollStartIndex",
			outputs: [],
			stateMutability: "nonpayable",
			type: "function",
		},
		{
			inputs: [
				{
					internalType: "bytes32",
					name: "_root",
					type: "bytes32",
				},
			],
			name: "setMerkleRoot",
			outputs: [],
			stateMutability: "nonpayable",
			type: "function",
		},
		{
			inputs: [
				{
					internalType: "address",
					name: "newOwner",
					type: "address",
				},
			],
			name: "transferOwnership",
			outputs: [],
			stateMutability: "nonpayable",
			type: "function",
		},
		{
			inputs: [
				{
					internalType: "uint64",
					name: "_endTime",
					type: "uint64",
				},
			],
			name: "updateSaleEndTime",
			outputs: [],
			stateMutability: "nonpayable",
			type: "function",
		},
		{
			inputs: [
				{
					internalType: "address[]",
					name: "accounts",
					type: "address[]",
				},
				{
					internalType: "bool",
					name: "isWhitelisted",
					type: "bool",
				},
			],
			name: "updateWhitelistedGroup",
			outputs: [],
			stateMutability: "nonpayable",
			type: "function",
		},
		{
			inputs: [
				{
					internalType: "address payable",
					name: "recipient",
					type: "address",
				},
				{
					internalType: "uint256",
					name: "amount",
					type: "uint256",
				},
			],
			name: "withdrawSaleFunds",
			outputs: [],
			stateMutability: "nonpayable",
			type: "function",
		},
	],
};

export default data;
