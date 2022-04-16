import NewsGrid from "../../components/NewsGrid";

import useArticles from "../../hooks/useArticles";
import useGlobalState from "../../hooks/useGlobalState";

function TopNewsSection() {
  const { sortingOption } = useGlobalState();
  const { status, data, error, isFetching } = useArticles({
    newsType: "news",
    sortingOption,
    pageSize: 9,
  });

  return (
    <NewsGrid
      status={status}
      error={error}
      isFetching={isFetching}
      newsItems={data?.response.results}
    />
  );
}

export default TopNewsSection;
