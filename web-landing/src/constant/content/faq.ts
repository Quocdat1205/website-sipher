export const overviewContent = [
  {
    title: "How can players get access to the game?",
    content: [
      "Players buy one or many Characters as an ERC-721 token through our Smart Contract on our Website.",
      "Having this Character allow Players to venture into Sipheria to conquer expeditions and embark on PvE and PvP gameplay",
      "The first release, the 1st Fleet Sipherian Surge, there will be 10,000 limited edition INU for sale",
      "These are: 1500 BioZ INUs, 1000 Cyborg INUs and 500 Cosmic INUs",
      "Our upcoming release, the 2nd Fleet Sipherian Flash, there will be 10,000 limited edition NEKO for sale",
      "Please find out more information released through our Discord and Twitter about this awesome new race",
    ],
  },
  {
    title: "How can Players acquire new Sipher characters?",
    content: [
      "These origin characters: INUs, NEKOs, BURUs etc have special traits, armor and equipment that are guaranteed limited editions on-chain",
      "Players can acquire these characters by purchasing them on our website",
    ],
  },
  {
    title: "How can Players acquire new Sipher characters after 10,000 Origin INUs are sold out?",
    content: [
      "At the beginning, new players can choose to acquire from the secondary market from other owners",
      "As the game progress, our laboratory will be upgraded to clone characters for new players to acquire, however they will never be the exact copies as the Origins",
      "Our mad scientists are hard at work on testing and constructing new and exciting characters for the world of Sipheria",
      "The projects are top secret and as of this moment, NEKO finally makes her appearance.",
    ],
  },
  {
    title: "Will Sipher the game be working on PC, iOS and Android and other platforms?",
    content: [
      "We will develop the game with the cross-platform play in mind. Starting with PC but eventually deploying on mobile platform such as  iOS and Android. We will work on integrating blockchain as seamless as possible",
    ],
  },
];

export const gameplayContent = [
  {
    title: "What are rewards for playing the game?",
    content: [
      "In game Leaderboard Ranking to claim status in the Hall of Fame",
      "Earn rewards, capture and conquer daily challenges for dual rewards",
      "Using $ATHER to craft, fuse, and own rare items and pets that will a part of your living legacy",
      "Earning $SIPHER through game play competitions, and become part of our community-based governance and a holder and benefactor of the game long term value creation",
    ],
  },
  {
    title: "PvP and PvE gameplay",
    content: [
      "Players go on adventures or partake in battle arenas in the game to receive items, resources, recipes and more with different rarity that they can craft, equip or trade to other players",
    ],
  },
  {
    title: "How can Players sell their items?",
    content: [
      "Players OWN their Assets, including their In-game Items, character assets, character attributes linked to that assets, character Information such as Names, Level, Experience Points etc",
      "It is all stored on their cn-chain",
      "In the near future, Sipher will build a Sipher Marketplace that faciliate players trading seemlessly both in and out of the game",
      "Players can sell their items via a marketplace that support ERC-721 to other players, completely permission less and trustless",
    ],
  },
  {
    title: "How can Players gift other Players Items for free?",
    content: [
      "Like any ERC-721 Tokens, players can send their assets to any other user's wallet as long as they have the right wallet address and gas fee",
    ],
  },
  {
    title: "Will there be a fee for selling NFT characters and items in the marketplace to other players?",
    content: [
      "Yes, upon the release of the Sipher marketplace, there will be a Gas Fee and a 4.5% Marketplace Fee payable by the Seller to Sipher",
      "In the interim, all secondary trading will happen on OpenSea, subjected to their terms and condition, with a percentage royalty fee payable to Sipher depending on the item collections",
    ],
  },
];

export const blockchainContent = [
  {
    title: "Is Sipher using ERC-721? What is ERC-721?",
    content: [
      "ERC721 is firstly, a type of standard and a standard is simply a template or format that other developers agree to follow",
      "Developers follow the same standards because it makes writing code easier, more predictable, and reusable",
      "These standards are completely voluntary, but following a widely used standard means compatibility with a wide variety of applications including exchanges, dapps, and wallets",
      "ERC721 is a token standard on Ethereum for Non-Fungible Tokens (NFT). Fungible means interchangeable and replaceable so something like Bitcoin is fungible because any Bitcoin can replace another Bitcoin",
      "Each NFT, on the other hand, is completely unique. One NFT cannot replace another",
      "Sipher decided to use ERC-721 as it is the most widely supported standard of NFT currently across many main platforms and marketplaces",
      "In the near future, we are considering the implementation of ERC-1155 to facilitate more functionalities that would be required for in-game on-chain and off-chain implementations, in order to optimize transaction time and gas cost",
    ],
  },
  {
    title: "How to mix on-chain and off-chain for User Game Items?",
    content: [
      `From On-chain to Off-chain On-chain is used only for User Asset Declaration and Keeping`,
      "Every time the user interact with the game, they enter into a trusted relationship where they will: Sign in with their Username and Password (and automatically connect their wallet)",
      "The game client then retrieves all the metadata from the User Address including stored character art and attributes, User items inventory assets on IPFS to render in-game client",
      "For Faster Loading - the frequent user art assets are pre-stored in the game server and client and the by Signing and Connecting their Wallet, the game client can confirm to render their items",
      "Essentially, the game keeps a copy of all the items in terms of Art and Render, the blockchain is used as a Book keeping and asset storage tool for Users User must possess the right require game Items like Character and Assets in order to start playing the game User must agree to the Terms & Conditions that while they are playing the game, all the activities will be happening on the game server (off-chain) and only once they log out, will the information be settled",
      "The game Expeditions, PvP or PvE sessions begin with everything happening off-chain on the game server Once the game sessions complete, the users can choose to keep all the items and progress in the game server and continue on witih another sessions of PvP or PvP gameplay",
      "During the game play, They can make buy transactions on the In-game client to buy items from Sipher",
      "This is put under [Sales Basket Order], temporarily holding off-chain until settled at log out",
      "Once a user logs out, all the Activities will be settle On-chain with the User's Wallet",
      "From Off-chain to On-chain Once the client logs out, the state of their characters, progress and item inventory, any purchases from Sipher they make, which were stored off-chain will be pushed on-chain",
      "This will require a gas fee paid by the User",
    ],
  },
  {
    title: "Why do we not choose to build everything about the game, including gameplay on the blockchain?",
    content: [
      "Because of the inherent limitations of the blockchain such as Gas Fees, Storage size and slow TPS, having everything about the game on the blockchain is impossible at this moment",
      "Therefore, Sipher decides to employ Blockchain as the central tool as the Source of Truth for all User Assets worth significant value generated in game",
      "For others game assets such as environments art assets that may appear on User's screen and land plots, we will store all the data off-chain in our game server to allow for faster loading",
      "If in the future we do decide the users will also own the small insignificant assets like trees and stones assets in game, we will propose a suitable and scalable solution involving blockchain",
    ],
  },
];
