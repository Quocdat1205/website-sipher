import config from "./config";
import axios from "axios";
import { NFTRace } from "@@types";

export interface NFTInfo {
  id: number;
  image_url: string;
  name: string;
  origin: string;
  race: string;
  rank: string;
}

export interface GetNFTsInput {
  address: string;
  race: NFTRace;
  range: [number, number];
}

/** Get list of NFT in range */
export const getNFTs = async ({ address, race, range }: GetNFTsInput): Promise<{ data: NFTInfo[]; total: number }> => {
  const { data } = await axios.get(
    `/nft/get-list-nft?publicAddress=${address}&min=${range[0]}&max=${range[1]}&race=${race}`,
    config
  );
  return data.message;
};

export interface GetNFTInput {
  address: string;
  race: NFTRace;
  id: number;
}

export interface Attribute {
  total: number;
  traitType: string;
  value: string;
}
export interface NFTDetail {
  id: number;
  name: string;
  origin: string;
  race: string;
  rank: number;
  emotion: string;
  emotions: { id: string; image: string }[];
  attributes: Attribute[];
}

/** Get NFT detail information */
export const getNFT = async ({ address, race, id }: GetNFTInput): Promise<NFTDetail> => {
  const {
    data: { message },
  } = await axios.get(`/nft/get-nft?publicAddress=${address}&id=${id}&race=${race}`, config);
  return {
    id: message.id,
    name: message.name,
    origin: message.origin,
    race: message.race,
    rank: message.rank,
    emotion: message.emotion.toUpperCase(),
    emotions: message.emotions,
    attributes: message.attributes.map((attr) => ({
      total: attr.total,
      traitType: attr.trait_type,
      value: attr.value,
    })),
  };
};

interface Merkle {
  id: number;
  name: string;
  origin: string;
  race: string;
  emotions: Partial<Record<string, { image: string }>>;
  attributes: { trait_type: string; value: string }[];
  image: string;
  proof: string[];
}

export const getMerkle = async (id: number, race: string): Promise<Merkle> => {
  const { data } = await axios.get(`/${race}-sc/merkle/${id}`, config);
  return data;
};

export interface ChangeEmotionInput {
  accessToken: string;
  id: number;
  emotion: string;
  address: string;
  race: NFTRace;
}

/** Change emotion of an NFT */
export const changeEmotion = async ({ accessToken, id, emotion, address, race }: ChangeEmotionInput) => {
  const { data } = await axios.post(
    `/nft/change-emotion`,
    {
      id,
      emotion,
      publicAddress: address,
      race,
    },
    {
      baseURL: config.baseURL,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return data;
};
