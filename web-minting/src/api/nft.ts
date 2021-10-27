import config from "./config";
import axios from "axios";

export const getListNFT = async (publicAddress: string, from: number, to: number, type: string) => {
  const { data } = await axios.get(
    `/nft/get-list-nft?publicAddress=${publicAddress}&min=${from}&max=${to}&race=${type}`,
    config
  );

  return data.message;
};

//get info nft by id
export const getInfoNFT = async (publicAddress: string, id: number | string, type: string) => {
  const { data } = await axios.get(`/nft/get-nft?publicAddress=${publicAddress}&id=${id}&race=${type}`, config);

  return data.message;
};

export const getMerkle = async (id: number | string, type: string) => {
  const { data } = await axios.get(`/${type}-sc/merkle/${id}`, config);
  return data;
};

//change emotion
export const changeEmotion = async (
  accessToken: string,
  id: number | string,
  emotion: string,
  publicAddress: string,
  race: string
) => {
  const { data } = await axios.post(
    `/nft/change-emotion`,
    {
      id,
      emotion,
      publicAddress,
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
