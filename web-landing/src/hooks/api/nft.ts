import fetcher from "./fetcher";

export type NFTRace = "INU" | "NEKO";

export interface NFTInfo {
  id: number;
  imageUrl: string;
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
export const getNFTs = async ({ address, race, range }: GetNFTsInput): Promise<NFTInfo[]> => {
  const { data } = await fetcher.get(`/nft/${race}?address=${address}&min=${range[0]}&max=${range[1]}`);

  return data;
};

/** Get total quantity of NFTs of a race */
export const getNFTQuantity = async (address: string, race: string) => {
  const { data } = await fetcher.get(`/nft/quantity/${race}?address=${address}`);

  return data;
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
  const { data } = await fetcher.get(`/nft/${race}/${id}?address=${address}`);
  console.log(data);

  return {
    id: data.id,
    name: data.name,
    origin: data.origin,
    race: data.race,
    rank: data.rank,
    emotion: data.emotion.toUpperCase(),
    emotions: data.emotions,
    attributes: data.attributes.map((attr) => ({
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

export const getMerkle = async (id: number, race: NFTRace): Promise<Merkle> => {
  const { data } = await fetcher.get(`/nft/merkle/${race}/${id}`);
  return data;
};

export interface ChangeEmotionInput {
  id: number;
  emotion: string;
  address: string;
  race: NFTRace;
}

/** Change emotion of an NFT */
export const changeEmotion = async ({ id, emotion, address, race }: ChangeEmotionInput) => {
  const { data } = await fetcher.post(
    `/nft/${race}/${id}`,
    {
      emotion,
      address: address,
    },
    {
      withCredentials: true,
    }
  );
  return data;
};
