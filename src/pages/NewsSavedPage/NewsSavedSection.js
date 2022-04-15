import { useMemo } from "react";
import { Link } from "react-router-dom";

import useGlobalState from "../../hooks/useGlobalState";

const NewsSavedSection = () => {
  const { sortingOption, bookmarks } = useGlobalState();

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
      {formattedBookmarks.length ? (
        <>
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

export default NewsSavedSection;
