import { Link } from "react-router-dom";

const NewsGrid = ({ status, error, isFetching, newsItems = [] }) => {
  return (
    <>
      <div>
        {status === "loading" ? (
          "Calling to API....."
        ) : status === "error" ? (
          <i>Error: {error.message}</i>
        ) : (
          <>
            <i>{isFetching ? "Data fetching..." : ""}</i>
            {newsItems.map((newsItem) => (
              <div key={newsItem.id}>
                <Link to={`/${newsItem.id}`}>{newsItem.webTitle}</Link>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default NewsGrid;
