import parse from "html-react-parser";

import Loading from "../../components/Loading";

import useArticle from "../../hooks/useArticle";
import useGlobalState from "../../hooks/useGlobalState";

import { fromISOStringToDate } from "../../util/dateFormats";

function DetailsSection({ id }) {
  const { status, data, error, isFetching } = useArticle(id);
  const { bookmarks, addBookmark, removeBookmark } = useGlobalState();

  const singleArticle = data?.response.content;

  function isBookmarked() {
    return !!bookmarks.find((bookmark) => bookmark.id === id);
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
          <p>{fromISOStringToDate(singleArticle.webPublicationDate)}</p>
          <h1>{singleArticle.webTitle}</h1>
          <h2>{singleArticle.fields.headline}</h2>
          <img
            src={singleArticle.fields.thumbnail}
            alt={singleArticle.webTitle}
          />
          <p>{parse(singleArticle.fields.body)}</p>
        </>
      )}
    </div>
  );
}

export default DetailsSection;
