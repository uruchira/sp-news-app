import { Link } from "react-router-dom";

import useArticles from "../../hooks/useArticles";

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

export default SearchResultList;
