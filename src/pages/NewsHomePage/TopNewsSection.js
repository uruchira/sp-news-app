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
    <>
      <h3>Top News</h3>
      <div>
        <NewsGrid
          status={status}
          error={error}
          isFetching={isFetching}
          newsItems={data?.response.results}
        />
      </div>
    </>
  );
}

export default TopNewsSection;
