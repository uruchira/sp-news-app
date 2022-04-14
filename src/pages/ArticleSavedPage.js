import { Link } from "react-router-dom";

import useGlobalState from "../hooks/useGlobalState";

const ArticleSavedPage = () => {
  const { bookmarks } = useGlobalState();

  return (
    <>
      <Link to="/">Back to News Page</Link>
      <br />
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
