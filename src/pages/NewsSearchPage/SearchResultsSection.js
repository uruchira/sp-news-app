import NewsGrid from "../../components/NewsGrid";

import useArticles from "../../hooks/useArticles";

function SearchResultList({ qparams }) {
  const { status, data, error, isFetching } = useArticles(qparams);
  const searchResults = data?.response.results;

  return (
    <>
      <h3>Search Results</h3>
      <div>
        {qparams.searchText ? (
          <NewsGrid
            status={status}
            error={error}
            isFetching={isFetching}
            newsItems={searchResults}
          />
        ) : (
          <p>No search text is found</p>
        )}
      </div>
    </>
  );
}

export default SearchResultList;
