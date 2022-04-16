import { useLocation } from "react-router-dom";

import Sorting from "./Sorting";

import { HOME_PATH, SEARCH_PATH, BOOKMARKS_PATH } from "../constants";

import { SubHeaderWrapper } from "../styles/layout";
import { BaseLink } from "../components/Button/styles";

import bookmarkIcon from "../assets/bookmark-icon.svg";

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
    <SubHeaderWrapper>
      {isNewsDetailPage(location.pathname) ||
      isNewsSavedPage(location.pathname) ? (
        ""
      ) : (
        <BaseLink to={BOOKMARKS_PATH}>
          <img src={bookmarkIcon} alt="Bookmark Icon" />
          <span>view bookmark</span>
        </BaseLink>
      )}
      {isNewsDetailPage(location.pathname) ? "" : <Sorting />}
    </SubHeaderWrapper>
  );
};

export default SubHeader;
