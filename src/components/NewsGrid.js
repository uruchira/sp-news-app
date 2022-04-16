import { Link } from "react-router-dom";

import { NewsList } from "../styles/layout";

import Card from "./Card";

const NewsGrid = ({ status, error, isFetching, newsItems = [] }) => {
  return (
    <NewsList>
      {status === "loading" ? (
        "Calling to API....."
      ) : status === "error" ? (
        <i>Error: {error.message}</i>
      ) : (
        <>
          <i>{isFetching ? "Data fetching..." : ""}</i>
          {newsItems.map((newsItem) => (
            <Link to={`/${newsItem.id}`} key={newsItem.id}>
              <Card title={newsItem.webTitle} bodyText={newsItem.webTitle} />
            </Link>
          ))}
        </>
      )}
    </NewsList>
  );
};

export default NewsGrid;
