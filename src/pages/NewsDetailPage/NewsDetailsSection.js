import Loading from "../../components/Loading";

import useArticle from "../../hooks/useArticle";
import useGlobalState from "../../hooks/useGlobalState";

function DetailsSection({ id }) {
  const { status, data, error, isFetching } = useArticle(id);
  const { bookmarks, addBookmark, removeBookmark } = useGlobalState();

  const singleArticle = data?.response.content;

  function isBookmarked() {
    return !!bookmarks.find((bookmark) => bookmark.id === singleArticle.id);
  }

  return (
    <div>
      {status === "loading" ? (
        <Loading />
      ) : status === "error" ? (
        <i>Error: {error.message}</i>
      ) : (
        <>
          <i>{isFetching ? <Loading /> : ""}</i>
          {isBookmarked() ? (
            <button type="button" onClick={() => removeBookmark(singleArticle)}>
              Remove Bookmark
            </button>
          ) : (
            <button type="button" onClick={() => addBookmark(singleArticle)}>
              Add Bookmark
            </button>
          )}
          <h1>{singleArticle.webTitle}</h1>
        </>
      )}
    </div>
  );
}

export default DetailsSection;
