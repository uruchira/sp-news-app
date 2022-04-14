import { useEffect } from "react";
import { Link } from "react-router-dom";

import useGlobalState from "../hooks/useGlobalState";

const ArticleSavedPage = () => {
  const { sortingOption, setSortingOption, bookmarks } = useGlobalState();

  useEffect(
    () => {
      if (sortingOption === "oldest") setSortingOption("newest");
    }, //eslint-disable-next-line
    []
  );

  return (
    <>
      <Link to="/">Back to News Page</Link>
      <br />
      <p>All bookmarks</p>
      <br />
      {bookmarks &&
        bookmarks.map((newsItem) => (
          <div key={newsItem.id}>
            <Link to={`/${newsItem.id}`}>{newsItem.webTitle}</Link>
          </div>
        ))}
    </>
  );
};

export default ArticleSavedPage;
