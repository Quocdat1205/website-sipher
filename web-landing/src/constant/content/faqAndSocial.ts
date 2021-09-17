import {
    FaDiscord,
    FaFacebook,
    FaInstagram,
    FaMedium,
    FaReddit,
    FaTelegram,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa"
import { MdMail } from "react-icons/md"

export type FaqItem = {
    id: string
    faqs: {
        question: string
        answer: string
    }[]
}

export const faqContent: FaqItem[] = [
    {
        id: "Game Overview",
        faqs: [
            {
                question: "How can players get access to the game?",
                answer: "Players buy a or many Characters through our Smart Contract on ERC-721. Having this Character allow Players to venture into Sipheria to conquer expeditions and embark on PvE and PvP gameplay. The first ORIGIN release, the 1st Fleet Sipherian Surge, there will be 10,000 limited edition INU for sale. Out of 10,000, 3000 extremely rare racial traits will be guaranteed to be limited forever, Sipher mad scientists will never construct more of these rare racial traits. These are: 1500 BioZ INUs, 1000 Cyborg INUs and 500 Cosmic INUs.",
            },
            {
                question: "How can Players acquire new Sipher characters?",
                answer: "At the beginning, there will be a first release of 10,000 Origin INUs under the 1st Fleet Sipherian Surge. These origin INUs have special abilities, armor and equipment that are guaranteed limited editions on-chain. Players can acquire these characters by purchasing them in our Laboratory.",
            },
            {
                question: "Why limit it to 10,000 Origin INUs?",
                answer: "The first exploration is always a risky one. Our mad scientists were only able to create the 1st Fleet capable of hosting 10,000 INUs on this daring first journey. However, risks always come with rewards. As the first explorers, our first adventurers will be entitled to acquire valuable resources and claim strategic land before the rest. The early dog gets the bone so they say.",
            },
            {
                question: "How can Players acquire new Sipher characters after 10,000 Origin INUs are sold out?",
                answer: "At the beginning, new players can choose to acquire from on the market from other players. As the game progress, our laboratory will be ready to construct new INUs for players to acquire, however they will never be the same as the Origin INUs within the 1st Fleet Sipherian Surge. Our mad scientists are hard at work on testing and constructing new and exciting characters for the world of Sipheria. The projects are top secret and so far the only words we have heard were NEKO, BURU and TORI.",
            },
            {
                question: "How can Players acquire new rare Sub-race Characters like Cyborg, Infected and Cosmic?",
                answer: "Unfortunately these characters are limited forever, as the creation progress from them were extremely difficult and pure chance. We also heard from the grapevines that they are working on upgrading the Laboratory to allow for out of this world abilities like sequencing and forking the Origin characters.",
            },
            {
                question: "Will Sipher the game be working on iOS and Android and other platforms?",
                answer: "We will develop on the mobile platform (iOS, Android) and we will work on integrating blockchain as seamless as possible.",
            },
        ],
    },
    {
        id: "Gameplay",
        faqs: [
            {
                question: "What are rewards for playing the game?",
                answer: "- In game Leaderboard Ranking to claim status in the Hall of Fame - Earn rewards, capture and conquer daily challenges for dual rewards ($ATHER & $SIPHER) - Using $ATHER to craft, fuse, and own rare items and pets that will a part of your living legacy - Earning $SIPHER through play, and become part of our community-based governance and a holder and benefactor of the game long term value creation. - In game NFT Prizes, Trophies.",
            },
            {
                question: "How can players get In-game Costumes and Items?",
                answer: 'When Players buy the Characters, they also receive 4 in-game Items: Helmet Body Armor Hand Armor Basic Background Each of these items have their individual Rarity all declared on-chain: for example "Great Hammer - FOREVER only 500 out of 10,000", Attributes that will affect the game play. Each of these items are seperate items and will be transferrable by the players to each other.',
            },
            {
                question: "Expeditions gameplay",
                answer: "Players can send their Characters on Expeditions to tackle various challenging quests given by the Mad Scientists and Mercenary Guild in Moonbase Station. If they complete these expeditions, they will receive various rewards in forms of: Limited Items and Costumes with different rarity that they can Wear or Trade to other players Materials Resources like ATHER Stones that they can use to level up their characters Laboratory materials called Vessel Core, to be used by the mad scientists for forking crazy experiments Expeditions Mechanic.",
            },
            {
                question: "PvP and PvE gameplay",
                answer: "Players can play the game to receive: Limited Items and Costumes with different rarity that they can Wear or Trade to other players Unlimited Materials Resources like ATHER Stones that they can use to level up their characters Laboratory materials called Vessel Core, to be used by the mad scientists for forking crazy experiments $SIPHER tokens to be used to purchase a wide array of in-game items that will be released by the community and Sipher mad scientists.",
            },
            {
                question: "How can Players sell their items?",
                answer: "Players are all time OWN their Assets, including their In-game Items, character assets, character attributes linked to that assets, character Information such as Names, Level, Experience Points etc. It is all stored on their Wallet On-chain Sipher will build Sipher Marketplace on ERC-721. Users will pay gas and Sipher Marketplace Fee. Players can sell their items via a Marketplace that will be built on ERC-721 Blockchain to other players, completely Permission less and trustless.",
            },
            {
                question: "How can Players gift other Players Items for free?",
                answer: "Like any ERC-721 Tokens, players can send their assets to any other user's wallet as long as they have the right wallet address and gas fee.",
            },
            {
                question: "Will there be a fee for selling items in the marketplace to other players?",
                answer: "Yes, there will be a Gas Fee and a 4% Marketplace Fee payable by the Seller to Sipher for creating and maintaining the marketplace.",
            },
        ],
    },
    {
        id: "Blockchain & Currency",
        faqs: [
            {
                question: "Is Sipher using ERC-721? What is ERC-721?",
                answer: "ERC721 is firstly, a type of standard and a standard is simply a template or format that other developers agree to follow. Developers follow the same standards because it makes writing code easier, more predictable, and reusable. These standards are completely voluntary, but following a widely used standard means compatibility with a wide variety of applications including exchanges, dapps, and wallets. ERC721 is a token standard on Ethereum for Non-Fungible Tokens (NFT). Fungible means interchangeable and replaceable so something like Bitcoin is fungible because any Bitcoin can replace another Bitcoin. Each NFT, on the other hand, is completely unique. One NFT cannot replace another. Sipher decided to use ERC-721 as it is the most widely supported standard of NFT currently across many main platforms and marketplaces. In the near future, we are considering the implementation of ERC-1155 to facilitate more functionalities that would be required for in-game on-chain and off-chain implementations, in order to optimize transaction time and gas cost.",
            },
            {
                question: "How to mix on-chain and off-chain for User Game Items?",
                answer: "From On-chain to Off-chain On-chain is used only for User Asset Declaration and Keeping. Every time the user interact with the game, they enter into a trust relationship where they will: Sign in with their Username and Password (and automatically connect their wallet) The game client then retrieves all the metadata from the User Address including stored character art and attributes, User items inventory assets on IPFS to render in-game client. For Faster Loading - the frequent user art assets are pre-stored in the game server and client and the by Signing and Connecting their Wallet, the game client can confirm to render their items. Essentially, the game keeps a copy of all the items in terms of Art and Render, the blockchain is used as a Book keeping and asset storage tool for Users User must possess the right require game Items like Character and Assets in order to start playing the game User must agree to the Terms & Conditions that while they are playing the game, all the activities will be happening on the game server (off-chain) and only once they log out, will the information be settled. The game Expeditions, PvP or PvE sessions begin with everything happening off-chain on the game server Once the game sessions complete, the users can choose to keep all the items and progress in the game server and continue on witih another sessions of PvP or PvP gameplay. During the game, They can make buy transactions on the In-game client to buy items from Sipher. This is put under [Sales Basket Order], temporarily holding off-chain until settled at log out. Once user ****logs out, all the Activities will be settle On-chain with the User's Wallet. From Off-chain to On-chain Once the client logs out, the state of their characters, progress and item inventory, any purchases from Sipher they make, which were stored off-chain will be pushed on-chain. This will require a gas fee paid by the User.",
            },
            {
                question:
                    "Why do we not choose to build everything about the game, including gameplay on the blockchain?",
                answer: "Because of the inherent limitations of the blockchain such as Gas Fees, Storage size and slow TPS, having everything about the game on the blockchain is impossible at this moment. Therefore, Sipher decides to employ Blockchain as the central tool as the Source of Truth for all User Assets worth significant value generated in game. For others game assets such as environments art assets that may appear on User's screen and land plots, we will store all the data off-chain in our game server to allow for faster loading. If in the future we do decide the users will also own the small insignificant assets like trees and stones assets in game, we will propose a suitable and scalable solution involving blockchain.",
            },
        ],
    },
]

export const atlas = [
    {
        title: "Sipher Atlas",
        icon: "/images/general/logo_web.ico",
        path: "https://sipher.gitbook.io/sipher-atlas/",
    },
]

export const socialChannels = [
    {
        title: "Sipher Facebook",
        icon: FaFacebook,
        path: "https://www.facebook.com/sipherxyz",
    },
    {
        title: "Sipher Twitter",
        icon: FaTwitter,
        path: "https://twitter.com/Sipherxyz",
    },
    {
        title: "Sipher Discord",
        icon: FaDiscord,
        path: "https://discord.com/invite/dRqdSxUSmd",
    },
    {
        title: "Sipher Instagram",
        icon: FaInstagram,
        path: "https://www.instagram.com/Sipherxyz/",
    },
    {
        title: "Sipher Reddit",
        icon: FaReddit,
        path: "https://www.reddit.com/r/SIPHERxyz/",
    },
    {
        title: "Sipher Telegram",
        icon: FaTelegram,
        path: "https://t.me/Sipherxyz",
    },
    {
        title: "Sipher Youtube",
        icon: FaYoutube,
        path: "https://www.youtube.com/channel/UCs8t-T2D2C2HIXt3VIKHz0A",
    },
]

export const news = [
    {
        title: "Sipher Medium",
        icon: FaMedium,
        path: "https://medium.com/Sipherxyz",
    },
]

export const emails = [
    {
        email: "woof@sipher.xyz",
        icon: MdMail,
    },
    {
        email: "marketing@sipher.xyz",
        icon: MdMail,
    },
]
