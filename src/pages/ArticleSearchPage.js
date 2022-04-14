import { Link } from "react-router-dom";

import Sorting from "../components/Sorting";

import useGlobalState from "../hooks/useGlobalState";
import useArticles from "../hooks/useArticles";

const SearchResultsView = ({ qparams }) => {
  const { status, data, error, isFetching } = useArticles(qparams);

  return (
    <>
      {status === "loading" ? (
        "Loading, Calling to API....."
      ) : status === "error" ? (
        <i>Error: {error.message}</i>
      ) : (
        <>
          <i>{isFetching ? "Updating..." : ""}</i>
          {data.response.results.map((newsItem) => (
            <div key={newsItem.id}>
              <Link to={`/${newsItem.id}`}>{newsItem.webTitle}</Link>
            </div>
          ))}
        </>
      )}
    </>
  );
};

const ArticleSearchPage = () => {
  const { searchText, sortingOption } = useGlobalState();

  return (
    <>
      <h2>Search Results</h2>
      <Sorting />
      <br />
      {searchText ? (
        <SearchResultsView qparams={{ searchText, sortingOption }} />
      ) : (
        <p>This is a empty page</p>
      )}
    </>
  );
};

export default ArticleSearchPage;
