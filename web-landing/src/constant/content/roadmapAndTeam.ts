export type RoadmapAndTeamItem = {
    year: string
    tag: string
    image: string
    timelines: {
        id: string
        content: string[]
    }[]
}

export const roadmapContent: RoadmapAndTeamItem[] = [
    {
        year: "2021",
        tag: "Sipherian Surge",
        image: "/images/pc/roadmap/roadmap1.png",
        timelines: [
            {
                id: "August",
                content: [
                    "Creation of the first Adventurers of Sipheria, the SIPHER INU",
                    "Launch of Sipherian Laboratory (Web Portal)",
                    "Launch of Sipherian Discord Channel for Sipher Game Community",
                    "Release of Sipher Game Litepaper",
                    "Release of Sipher Roadmap for next 18 months",
                ],
            },
            {
                id: "September",
                content: [
                    "Upgrade of Sipherian Laboratory (Web Portal)",
                    "Launch of Sipherian Academy (Web portal)",
                    "Release of Concept Arts for 3 new races, NEKO, TORI & BURU",
                ],
            },
        ],
    },
    {
        year: "2021",
        tag: "Awakening",
        image: "/images/pc/roadmap/roadmap2.png",
        timelines: [
            {
                id: "October",
                content: [
                    "Launch of Sipherian Mercenary Outpost (Web portal)",
                    "Breeding (Forking, Sequencing, Cloning) INUs",
                    "Sales of new race - NEKOs - Cat",
                ],
            },
            {
                id: "November",
                content: [
                    "Sales of new race - TORIs - Bird",
                    "Launch of Sipherian Bazaar (Merchandise Gift Store)",
                    "Video of Gameplay Demo",
                ],
            },
            {
                id: "December",
                content: [
                    "Sales of new race - BURUs - Bull",
                    "Launch of $SIPHER token",
                    "Launch of $SIPHER staking pool. Stakers of $SIPHER, will receive $LP-SIPHER, will receive the Sipher Platform Revenue Rewards",
                ],
            },
        ],
    },
    {
        year: "2022",
        tag: "Dawn of the Empire",
        image: "/images/pc/roadmap/roadmap3.png",
        timelines: [
            {
                id: "March",
                content: ["Launch of Playable Demo", "Land Sales of BLOCK GENESIS"],
            },
            {
                id: "June",
                content: [
                    "Launch of Gameplay - Version 1.0 (PvE)",
                    "Launch of playable and conquerable Block Genesis nick-named The First World, it is the First Game World that all Sipherians will venture into",
                ],
            },
            {
                id: "September",
                content: ["Launch of New 5th Playable Race - Tokage or Doragon - Lizards or Dragon"],
            },
        ],
    },
]

export type SipherTeamItem = {
    id: string
    title: string
    social?: {
        telegram?: string
        twitter?: string
        linkedIn?: string
    }
    image: string
    description: string
    quote?: string
}

export const sipherTeamContent: SipherTeamItem[] = [
    {
        id: "Tin Nguyen",
        title: "World Architect",
        social: {
            telegram: "https://t.me/athereal",
            twitter: "https://twitter.com/AskTinNguyen",
        },
        image: "/images/avatars/1.jpg",
        description:
            "A tinkerer, gamer and father. Passionate about creating new worlds for the metaverse. In another life, he runs a real estate development firm, nominated for Forbes Vietnam 30 U30, co-founded and invested in companies such as DreamPlex, ZoneStartups, EcoTruck, FreshHouse, Recruitery, Mercurial FInance and Cloud Energy.",
        quote: "The world is but a canvas to our imagination",
    },
    {
        id: "Loi Luu",
        title: "Co-founder Advisor",
        image: "/images/avatars/20.jpg",
        description:
            "Loi Luu is the CEO and Co-founder of Kyber Network, an on-chain liquidity protocol that powers decentralized applications, including exchanges, funds, lending protocols, payments wallets and so on. As a prolific investor in blockchain space, Loi has an impressive portfolios with notable investments in 1inch, Serum, Mercurial Finance, Krystal Wallet and more. Joining Sipher, Loi will bring his extensive network in the industry to facilitate Sipher’s growth.",
    },
    {
        id: "Victor Tran",
        title: "Co-founder Advisor",
        image: "/images/avatars/21.jpg",
        description:
            "Victor Tran is the Co-founder and CTO of Kyber Network, he has been involved in blockchain and cryptocurrency development since early 2016. With his love for gaming and blockchain, Vu joins Sipher to foster the growth of Sipher through his proven experience in the blockchain industry.",
    },
    {
        id: "Nghia Nguyen",
        title: "Meme Librarian",
        image: "/images/avatars/2.jpg",
        description:
            "A guardian of truth, he leaves no pages unturned when a meme is out of place. A passionate lover of rogue-like games and all thing sweet.",
        quote: "You haven't made it until you become a meme",
    },
    {
        id: "Tan Nguyen",
        title: "Master of Bytes",
        social: {
            telegram: "https://t.me/Hoang_Tan",
        },
        image: "/images/avatars/3.jpg",
        description:
            "Sometimes he likes cats, sometimes he loves dogs but most of the time he is a daring lack-of-sleep engineer, who leads a special force of tech wiz to build and break things (or was it the other way around?)",
        quote: "Blockchain project is a playground for sleepless engineer",
    },
    {
        id: "Lien Nguyen",
        title: "Legal Sorceress",
        image: "/images/avatars/4.jpg",
        description:
            "While fighting evil corporate bureaucracy in the morning, she spends her nights preparing the magic spells needed to navigate crypto legal traps and loop holes.",
    },
    {
        id: "Thang Ho",
        title: "Dr. When",
        image: "/images/avatars/5.jpg",
        description:
            "Procedures is his middle name, he hates when things are out of order and works day and night to fix it. “When“ is his favourite question as all things must have a deadline, even in crypto.",
        quote: "Too many things to understand, but to sum it up in one sentence is very difficult to die",
    },
    {
        id: "Vu Le",
        title: "Lead Code Sergeant",
        social: {
            telegram: "https://t.me/rollthetable",
        },
        image: "/images/avatars/6.jpg",
        description:
            "Snacking on bits, he gains crypto experience just as quickly as he gains weight. No language is too hard for him, except for the ones that does not taste good.",
        quote: "Munch Munch",
    },
    {
        id: "Khai Huynh",
        title: "Conversation Mage",
        social: {
            telegram: "https://t.me/khaidhuynh",
            twitter: "https://twitter.com/khaidhuynh",
        },
        image: "/images/avatars/7.jpg",
        description:
            "Weaving spells to create powerful messages to twitter anons, he seeks to bring Sipher to the world using the miracles of growth marketing and community. You think we're kidding? Join our groups!",
        quote: "'One must join our groups, for thee shall be heaps fun.' - Marcus Aurelius",
    },
    {
        id: "Hai Nguyen",
        title: "Art Alchemist",
        image: "/images/avatars/8.jpg",
        description:
            "Mixing worlds and concocting weirdly awesome characters for Sipheria. In another life he runs a large 3D art studio and teaches guys how to make digital girls sexy. At night, you can find him crafting art toys in his Oleander Workshop.",
        quote: "Chu Teu is cool",
    },
    {
        id: "Duc Nguyen",
        title: "Wiz Advisor",
        social: {
            telegram: "https://t.me/michealway",
        },
        image: "/images/avatars/9.jpg",
        description:
            "A researcher in artificial intelligence, next generation and space. In another life, Duc co-founded of Hekate, one of the fastest growing AI companies in Vietnam for Natural Language Processing & Machine Learning, nominated for APEC CEO Summit 2017.",
        quote: "Fetch Sumi. Good girl!",
    },
    {
        id: "Chii Chan",
        title: "Python Painter",
        social: {
            telegram: "https://t.me/chiichan91",
        },
        image: "/images/avatars/10.jpg",
        description:
            "Painting using Python is her specialty. In her free time, she chooses to mess around with anime characters to make them her avatars and pets.",
        quote: "2B or Not 2B",
    },
    {
        id: "Vi Vi",
        title: "Crypto Newscaster",
        social: {
            telegram: "https://t.me/ViVi_NNCrypto",
            linkedIn: "https://www.linkedin.com/in/tuongvi65/",
        },
        image: "/images/avatars/18.jpg",
        description:
            "A ex-crypto-bot trader, now she uses her knowledge of crypto to do good. Content Manager at BeinCrypto and Advisor to Sipher. She's like Clark Kent, except she's a girl and she's loves Cryptonite.",
        quote: "Skin in the game",
    },
    {
        id: "Alain Dinh",
        title: "Puppeteer",
        image: "/images/avatars/19.jpg",
        description:
            "A citizen of the night, some may call him Batman. His love for decentralization led him to crypto and the metaverse. Since then, he has remained a vigilante there, patrolling twitter and telegram groups to spot evil doers.",
        quote: "Shiba-ba-Ba-ba-na-na",
    },
    {
        id: "Jindo",
        title: "NFT Guru",
        image: "/images/avatars/17.jpg",
        description:
            "A metaverse enthusiast and collector of these magic digital things called NFT. A crypto veteran who has seen his fair shares of pumps and dumps. NFTs are his honey and butter and Sipher is his pancake.",
        quote: "Inevitable",
    },
    {
        id: "Mr. T",
        title: "Full Stack Magician",
        image: "/images/avatars/12.jpg",
        description:
            "No technological walls prove too challenging for him. From back to front, from Python to C++. From NLP or Blockchain.",
        quote: "'Abracarena!' *Sumi starts twerking*",
    },
    {
        id: "Yunero",
        title: "AI Man",
        image: "/images/avatars/13.jpg",
        description: "A researcher and development about natural language processing.",
    },
    {
        id: "MasterFeed",
        title: "BTS Coder",
        image: "/images/avatars/14.jpg",
        description:
            "A complex system that works is invariably found to have evolved from a simple system that worked. I'm back-end developer.",
        quote: "Premature optimization is the root of all evil",
    },
    {
        id: "Memim",
        title: "Bot Sensei",
        social: {
            telegram: "https://t.me/wbz99",
            twitter: "https://twitter.com/wbz99",
        },
        image: "/images/avatars/15.jpg",
        description:
            "How to train your dragon can take a page from her book. She specializes in training machine to understand human, as long as they understand her first.",
        quote: "No swearing allowed!",
    },
    {
        id: "Omachi",
        title: "Pixel Weaver",
        social: {
            telegram: "https://t.me/omachi2212",
        },
        image: "/images/avatars/16.jpg",
        description: "Pushing pixels to the limits, she creates beautiful facades for web3.",
        quote: "1px makes all the difference",
    },
]
