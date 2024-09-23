import axios from "axios";

const URL = "https://lbt0630zfb.microcms.io/api/v1/articles";

export const getArticles = () => {
  const config = useRuntimeConfig();
  console.log(config.public.headlessCmsApiKey)
  return axios.get(
    URL,
    {
      headers: { "X-MICROCMS-API-KEY": config.public.headlessCmsApiKey }
    }
  );
};

export const getArticle = (articleId: string) => {
  const articleUrl = `${URL}/${articleId}`;
  const config = useRuntimeConfig();
  return axios.get(
    articleUrl,
    {
      headers: { "X-MICROCMS-API-KEY": config.public.headlessCmsApiKey }
    }
  );
};
