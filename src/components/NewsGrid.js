import { Link } from "react-router-dom";
import Loading from "../components/Loading";

import { NewsList, FetchingWrapper } from "../styles/layout";

import Card from "./Card";

const NewsGrid = ({ status, error, isFetching, newsItems = [] }) => {
  return (
    <>
      {status === "loading" ? (
        <Loading />
      ) : status === "error" ? (
        <i>Error: {error.message}</i>
      ) : (
        <>
          <FetchingWrapper>{isFetching ? <Loading /> : ""}</FetchingWrapper>
          <NewsList>
            {newsItems.map((newsItem) => (
              <Link to={`/${newsItem.id}`} key={newsItem.id}>
                <Card title={newsItem.webTitle} bodyText={newsItem.webTitle} />
              </Link>
            ))}
          </NewsList>
        </>
      )}
    </>
  );
};

export default NewsGrid;
