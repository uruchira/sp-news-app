import { useEffect } from "react";
import { Link } from "react-router-dom";

import Sorting from "../components/Sorting";

import useGlobalState from "../hooks/useGlobalState";
import useArticles from "../hooks/useArticles";

function SearchResultList({ qparams }) {
  const { status, data, error, isFetching } = useArticles(qparams);
  const filteredArticles = data?.response.results;

  return (
    <>
      {status === "loading" ? (
        "Loading, Calling to API....."
      ) : status === "error" ? (
        <i>Error: {error.message}</i>
      ) : (
        <>
          <i>{isFetching ? "Updating..." : ""}</i>
          {filteredArticles.map((newsItem) => (
            <div key={newsItem.id}>
              <Link to={`/${newsItem.id}`}>{newsItem.webTitle}</Link>
            </div>
          ))}
        </>
      )}
    </>
  );
}

function ArticleSearchPage() {
  const { searchText, sortingOption, setSortingOption } = useGlobalState();

  useEffect(
    () => {
      if (sortingOption === "oldest") setSortingOption("newest");
    }, //eslint-disable-next-line
    []
  );

  return (
    <>
      <h2>Search Results</h2>
      {searchText ? (
        <>
          <Sorting />
          <br />
          <SearchResultList qparams={{ searchText, sortingOption }} />
        </>
      ) : (
        <p>No search text is found</p>
      )}
    </>
  );
}

export default ArticleSearchPage;
