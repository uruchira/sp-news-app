import { useQuery } from "react-query";
import apiClient from "../util/apiClient";

const getArticleById = async (newsId) => {
  const { data } = await apiClient.get(
    `/${newsId}?show-fields=body,headline,thumbnail&show-elements=image&api-key=test`
  );
  return data;
};

export default function useArticle(newsId) {
  return useQuery(["article", newsId], () => getArticleById(newsId));
}
