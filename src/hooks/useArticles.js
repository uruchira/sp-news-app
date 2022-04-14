import { useQuery } from "react-query";
import apiClient from "../util/apiClient";

const getArticles = async ({
  newsType = "news",
  searchText = "",
  sortingOption = "newest",
  pageSize = 10,
}) => {
  const { data } = await apiClient.get(
    `/search?section=${newsType}&q=${searchText}&order-by=${sortingOption}&page-size=${pageSize}&api-key=test`
  );
  return data;
};

export default function useArticles(configData) {
  return useQuery(["articles", configData], () => getArticles(configData));
}
