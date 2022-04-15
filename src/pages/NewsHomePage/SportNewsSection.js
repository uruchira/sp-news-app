import NewsGrid from "../../components/NewsGrid";

import useArticles from "../../hooks/useArticles";
import useGlobalState from "../../hooks/useGlobalState";

function SportNewsSection() {
  const { sortingOption } = useGlobalState();
  const { status, data, error, isFetching } = useArticles({
    newsType: "sport",
    sortingOption,
    pageSize: 3,
  });

  return (
    <>
      <h3>Sports</h3>
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

export default SportNewsSection;
