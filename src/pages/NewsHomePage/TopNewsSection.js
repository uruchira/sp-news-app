import { Link } from "react-router-dom";

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
      </div>
    </>
  );
}

export default TopNewsSection;
