import { useQuery } from "react-query";
import apiClient from "../util/apiClient";

const getArticleById = async (articleId) => {
  const { data } = await apiClient.get(`/${articleId}?api-key=test`);
  return data;
};

export default function useArticle(articleId) {
  return useQuery(["article", articleId], () => getArticleById(articleId), {
    // The query will not execute until the articleId exists
    enabled: !!articleId,
  });
}
