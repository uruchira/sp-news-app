import { Link, useLocation } from "react-router-dom";

import Sorting from "./Sorting";

import { HOME_PATH, SEARCH_PATH, BOOKMARKS_PATH } from "../constants";

function isNewsDetailPage(pathname) {
  const pathsList = [HOME_PATH, SEARCH_PATH, BOOKMARKS_PATH];
  return !pathsList.find((path) => path === pathname);
}

function isNewsSavedPage(pathname) {
  return pathname === BOOKMARKS_PATH;
}

const SubHeader = () => {
  const location = useLocation();

  return (
    <div
      style={{
        width: "445px",
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "20px",
      }}
    >
      {isNewsDetailPage(location.pathname) ||
      isNewsSavedPage(location.pathname) ? (
        ""
      ) : (
        <Link to={BOOKMARKS_PATH}>View Bookmarks</Link>
      )}
      {isNewsDetailPage(location.pathname) ? "" : <Sorting />}
    </div>
  );
};

export default SubHeader;
