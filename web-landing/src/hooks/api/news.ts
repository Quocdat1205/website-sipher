import fetcher from "./fetcher";

export const getListNews = async (min: number, max: number) => {
  const { data } = await fetcher.get(`/community/user/posts?min=${min}&max=${max}`);

  return data;
};

export const getDetailsNews = async (published) => {
  const { data } = await fetcher.get(`/community/user/detail?published=${published}`);

  return data;
};
