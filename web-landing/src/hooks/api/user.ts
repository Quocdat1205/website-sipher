import fetcher from "./fetcher";

export interface IUser {
  address: string;
  nonce: number;
}

/** Get user from address */
export const getUsersByAddress = async (address: string): Promise<IUser> => {
  const { data } = await fetcher.get(`/auth/get-nonce?publicAddress=${address}`);
  // console.log(data);

  return {
    nonce: data.nonce,
    address,
  };
};

/** Authenticate user by address and signature */
export const authenticateUser = async (address: string, signature: string): Promise<boolean> => {
  const { data } = await fetcher.post(
    "/auth/gen-session",
    { publicAddress: address, signature },
    {
      withCredentials: true,
    }
  );
  return data;
};

export const getExpiredToken = async (address: string): Promise<boolean> => {
  const { data } = await fetcher.get(`/auth/verify?publicAddress=${address}`, {
    withCredentials: true,
  });
  return data;
};

//** Get token airdrop */
export const getAirdrop = async (address: string): Promise<number> => {
  const { data } = await fetcher.get(`/airdrop?publicAddress=${address}`);
  return data;
};

export const logout = async (): Promise<boolean> => {
  const { data } = await fetcher.post("/auth/logout", {
    withCredentials: true,
  });
  return data;
};
