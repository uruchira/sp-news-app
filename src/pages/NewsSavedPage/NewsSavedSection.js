import { useMemo } from "react";
import NewsGrid from "../../components/NewsGrid";

import useGlobalState from "../../hooks/useGlobalState";

const NewsSavedSection = () => {
  const { sortingOption, bookmarks } = useGlobalState();

  const sortedBookmarks = useMemo(() => {
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
      {sortedBookmarks.length ? (
        <NewsGrid newsItems={sortedBookmarks} />
      ) : (
        <p>No Bookmarks yet...</p>
      )}
    </>
  );
};

export default NewsSavedSection;
