import { RankCardProps } from "@components/UI/TierRewardBenefit/RankCard";

export const rankBenefits: RankCardProps[] = [
  { id: "Diamond", srcImg: "/images/icons/diamond.png" },
  { id: "Platinum", srcImg: "/images/icons/platinum.png" },
  { id: "Gold", srcImg: "/images/icons/gold.png" },
  { id: "Silver", srcImg: "/images/icons/silver.png" },
];

export const titleAuctionBenefits = [
  { text: "Purchase price" },
  {
    text: "Immortalize in Sipheria",
    tooltip:
      "Will use your name in the actual world building, you might get NPCs, Towns, Roads named after your easter egg style",
  },
  { text: "Scuplture" },
  { text: "Hall Of Frame", tooltip: "A list in game and on the website, location in game is TBD" },
  { text: "Free Swag on Maddies" },
  {
    text: "In-game Title",
    tooltip: "Will have icons, and icon borders, this will be promised to our early supporters",
  },
];

export const dataAuctionBenefits = [
  {
    id: "Purchase price",
    content: [{ text: "0.9 - 0.85" }, { text: "0.8 - 0.75" }, { text: "0.7 - 0.65" }, { text: "0.6 - 0.55" }],
  },
  {
    id: "Immortalize in Sipheria",
    content: [{ text: "Names forever immortalize in Sipheria" }, { text: "N/A" }, { text: "N/A" }, { text: "N/A" }],
  },
  {
    id: "Scuplture",
    contentArr: [
      {
        id: 1,
        content: [
          { text: "Crystalis Neko & Cosmic INU Limited Edition Sculpture retailed at", type: "text" },
          { text: "$1000 USD", type: "highlight" },
          { text: "each for FREE", type: "text" },
        ],
      },
      {
        id: 2,
        content: [
          { text: "Crystalis Neko Limited Edition Sculpture retailed at", type: "text" },
          { text: "$1,000 USD", type: "highlight" },
          { text: "for FREE", type: "text" },
        ],
      },
      {
        id: 3,
        content: [
          { text: "Cosmic INU Limited Edition Sculpture retailed at", type: "text" },
          { text: "$1,000 USD", type: "highlight" },
          { text: "for FREE", type: "text" },
        ],
      },
      {
        id: 4,
        content: [{ text: "N/A", type: "text" }],
      },
    ],
  },
  {
    id: "Hall Of Frame",
    content: [
      { text: "Hall Of Frame Listing" },
      { text: "Hall Of Frame Listing" },
      { text: "Hall Of Frame Listing" },
      { text: "Hall Of Frame Listing" },
    ],
  },
  {
    id: "Free Swag on Maddies",
    content: [
      { text: "Diamond Tier Swag Membership for Maddies" },
      { text: "Platinum Tier Swag Membership for Maddies" },
      { text: "Gold Tier Swag Membership for Maddies" },
      { text: "Silver Tier Swag Membership for Maddies" },
    ],
  },
  {
    id: "In-game Title",
    content: [
      { text: "Diamond frame for character name in-game" },
      { text: "Platinum frame for character name in-game" },
      { text: "Gold frame for character name in-game" },
      { text: "Silver frame for character name in-game" },
    ],
  },
];

export const dataDutchAuction = [
  {
    id: `What is a "Dutch Auction"?`,
    content: [
      "A Dutch Auction is a type of auction that has been traditionally used for buying or selling goods. This type of auction is characterized by starting with a higher asking price or bid, and then the price gets lower as time goes by until a buyer accepts the price. In the case of NFTs, the main difference is that there are multiple items for sale - typically the amount of public sale slots available for minting - but the core concept remains the same. The NFT minting cost starts out at a higher price, but as time goes by, the price will periodically get lowered at specific increments set by the NFT issuers, which provides buyers with opportunities to mint their NFTs at the price they are willing to pay.",
    ],
  },
  {
    id: `When, Where and How will this be Implemented for the NEKO launch?`,
    content: [
      "The minting for NEKOs will happen on November 6, 2021, and will take place in the main website (https://sipher.xyz) - same as our previous Sipher INUs launch. However, the main difference is that instead of having a traditional launch in which buyers wait for the minting to start and then being pit against one another in a gas war, the Auction will start at the established launch time with a starting price will be 0.9 ETH. Afterwards, the price will programmatically drop every 10 minutes in decrements of 0.05, with the lowest price for the auction being 0.1 ETH.",
      "Regardless of purchase price, each participant can purchase up to 5 NEKOs per transaction, with a maximum of 5 per wallet.",
      "Do note that as a Dutch Auction with limited NFTs available for purchase, the sale will automatically end at the point of time in which all NEKO NFTs are sold out, regardless of the current price point.",
      "There will be different price points where buyers will have an opportunity to purchase the NFTs.",
      "At 10 minutes for each price point, the Dutch Auction will reach its lowest price of 0.1 ETH after a duration of approximately 2 hours and 40 minutes, assuming that there are still any available NEKOs for sale at that point.",
    ],
  },
  {
    id: `Why “Dutch Auction”?`,
    content: [
      "We decided to go with this sales mechanic after careful consideration and evaluation of different alternatives. In conclusion, we believe that for the NFT minting process there are certain benefits of having a Dutch Auction style rather than the traditional minting style. The main benefit of these being to reduce the effects of gas wars.",
    ],
  },
  {
    id: `Factors to Consider Before Taking Part in the NEKO “Dutch Auction”`,
    title: "There are important factors to consider including, but not limited to:",
    content: [
      "1. Your desire in securing your NEKO (how badly you want it)",
      "2. The maximum total cost you are willing to pay for a NEKO",
      "3. The amount of time you have available to participate",
      "4. Your interest in acquiring the Bonus Benefits from taking Part in the Dutch Auction",
      "5. Alternative option: there is always the secondary market (OpenSea) where you could purchase, but we can't guarantee the price you would need to pay.",
    ],
  },
];
