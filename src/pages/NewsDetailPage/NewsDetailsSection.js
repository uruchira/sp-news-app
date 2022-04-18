import toast, { Toaster } from "react-hot-toast";
import parse from "html-react-parser";

import Button from "../../components/Button";
import Loading from "../../components/Loading";

import useArticle from "../../hooks/useArticle";
import useGlobalState from "../../hooks/useGlobalState";

import { fromISOStringToDate } from "../../util/dateFormats";

import { DetailWrapper, InfoWrapper, BannerWrapper } from "../../styles/layout";
import imagePlaceholder from "../../assets/image-placeholder.png";
import bookmarkIcon from "../../assets/bookmark-icon.svg";

function DetailsSection({ id }) {
  const { status, data, error, isFetching } = useArticle(id);
  const { bookmarks, addBookmark, removeBookmark } = useGlobalState();

  const singleArticle = data?.response.content;

  function isBookmarked() {
    return !!bookmarks.find((bookmark) => bookmark.id === id);
  }

  function notifyRemoveBookmark() {
    toast("removed from bookmarks", {
      position: "bottom-center",
    });
  }

  function notifyAddBookmark() {
    toast("saved to bookmarks", {
      position: "bottom-center",
    });
  }

  function onRemoveBookmark(article) {
    removeBookmark(article);
    notifyRemoveBookmark();
  }

  function onAddBookmark(article) {
    addBookmark(article);
    notifyAddBookmark();
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
          <DetailWrapper>
            <InfoWrapper>
              {isBookmarked() ? (
                <Button onClick={() => onRemoveBookmark(singleArticle)}>
                  <img src={bookmarkIcon} alt="Bookmark Icon" />
                  <span>remove bookmark</span>
                </Button>
              ) : (
                <Button onClick={() => onAddBookmark(singleArticle)}>
                  <img src={bookmarkIcon} alt="Bookmark Icon" />
                  <span>add bookmark</span>
                </Button>
              )}
              <p>{fromISOStringToDate(singleArticle.webPublicationDate)}</p>
              <h1>{singleArticle.webTitle}</h1>
              <h2>{singleArticle.fields.headline}</h2>
              <i />
              <div>{parse(singleArticle.fields.body)}</div>
            </InfoWrapper>
            <BannerWrapper>
              {singleArticle.fields.thumbnail ? (
                <img
                  src={singleArticle.fields.thumbnail}
                  alt={singleArticle.webTitle}
                />
              ) : (
                <img src={imagePlaceholder} alt="ImagePlaceholder" />
              )}
            </BannerWrapper>
          </DetailWrapper>
          <Toaster
            containerStyle={{
              bottom: 0,
            }}
            toastOptions={{
              style: {
                backgroundColor: isBookmarked() ? "green" : "red",
                borderRadius: "0",
                color: "white",
                fontFamily: '"Roboto", sans-serif',
                fontSize: "0.75rem",
                margin: "2px 0 0 0 !important",
                padding: "5px 0",
                width: "100%",
                textTransform: "uppercase",
              },
            }}
          />
        </>
      )}
    </div>
  );
}

export default DetailsSection;
