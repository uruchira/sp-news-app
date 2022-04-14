import { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

import Sorting from "../components/Sorting";
import useGlobalState from "../hooks/useGlobalState";

const ArticleSavedPage = () => {
  const { sortingOption, setSortingOption, bookmarks } = useGlobalState();

  useEffect(
    () => {
      if (sortingOption === "oldest") setSortingOption("newest");
    }, //eslint-disable-next-line
    []
  );

  const formattedBookmarks = useMemo(() => {
    if (sortingOption === "newest") {
      return bookmarks
        .slice()
        .sort(
          (a, b) =>
            new Date(b.webPublicationDate) - new Date(a.webPublicationDate)
        );
    } else {
      return bookmarks
        .slice()
        .sort(
          (a, b) =>
            new Date(a.webPublicationDate) - new Date(b.webPublicationDate)
        );
    }
  }, [sortingOption, bookmarks]);

  return (
    <>
      <Link to="/">Back to News Page</Link>
      <br />
      {formattedBookmarks.length ? (
        <>
          <p>All bookmarks</p>
          <br />
          <Sorting />
          <br />
          {formattedBookmarks.map((newsItem) => (
            <div key={newsItem.id}>
              <Link to={`/${newsItem.id}`}>{newsItem.webTitle}</Link>
            </div>
          ))}
        </>
      ) : (
        <p>No Bookmarks yet...</p>
      )}
    </>
  );
};

export default ArticleSavedPage;
