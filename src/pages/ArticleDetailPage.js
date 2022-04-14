import { Link, useParams } from "react-router-dom";

import useArticle from "../hooks/useArticle";
import useGlobalState from "../hooks/useGlobalState";

function formatArticleId(articleName) {
  return Object.values(articleName).join("/");
}

function ArticleDetailView({ id }) {
  const { status, data, error, isFetching } = useArticle(id);
  const { bookmarks, addBookmark, removeBookmark } = useGlobalState();

  const singleArticle = data?.response.content;

  function isBookmarked() {
    return !!bookmarks.find((bookmark) => bookmark.id === singleArticle.id);
  }

  return (
    <div>
      {status === "loading" ? (
        "Loading, Calling to API....."
      ) : status === "error" ? (
        <i>Error: {error.message}</i>
      ) : (
        <>
          <i>{isFetching ? "Updating..." : ""}</i>
          <h1>{singleArticle.webTitle}</h1>
          {isBookmarked() ? (
            <button type="button" onClick={() => removeBookmark(singleArticle)}>
              Remove Bookmark
            </button>
          ) : (
            <button type="button" onClick={() => addBookmark(singleArticle)}>
              Add Bookmark
            </button>
          )}
        </>
      )}
    </div>
  );
}

function ArticleDetailPage() {
  const formattedId = formatArticleId(useParams());

  return (
    <>
      <Link to="/">Back to News Page</Link>
      {formattedId ? (
        <ArticleDetailView id={formattedId} />
      ) : (
        <p>No Article ID is found</p>
      )}
    </>
  );
}

export default ArticleDetailPage;
