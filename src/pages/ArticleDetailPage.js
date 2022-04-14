import { Link, useParams } from "react-router-dom";

import useArticle from "../hooks/useArticle";
import useGlobalState from "../hooks/useGlobalState";

function formatArticleId(articleName) {
  return Object.values(articleName).join("/");
}

const ArticleDetailPage = () => {
  const formattedId = formatArticleId(useParams());

  const { status, data, error, isFetching } = useArticle(formattedId);
  const { bookmarks, addBookmark, removeBookmark } = useGlobalState();

  function isBookmarked() {
    return !!bookmarks.find((bookmark) => bookmark.id === data?.id);
  }

  return (
    <>
      <Link to="/">Back to News Page</Link>
      <div>
        {!formattedId || status === "loading" ? (
          "Loading, Calling to API....."
        ) : status === "error" ? (
          <i>Error: {error.message}</i>
        ) : (
          <>
            <i>{isFetching ? "Updating..." : ""}</i>
            <h1>{data.response.content.webTitle}</h1>
            <div>
              <p>{data.response.content.sectionName}</p>
            </div>
            {isBookmarked() ? (
              <button type="button" onClick={() => removeBookmark(data)}>
                Remove Bookmark
              </button>
            ) : (
              <button type="button" onClick={() => addBookmark(data)}>
                Add Bookmark
              </button>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default ArticleDetailPage;
