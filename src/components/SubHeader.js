import { useLocation } from "react-router-dom";
import Sorting from "./Sorting";

import { HOME_PATH, SEARCH_PATH, BOOKMARKS_PATH } from "../constants";

import { SubHeaderWrapper, SortingSection } from "../styles/layout";
import { BaseLink, BaseHeader } from "../styles/elements";

import bookmarkIcon from "../assets/bookmark-icon.svg";

function isNewsDetailPage(pathname) {
  const pathsList = [HOME_PATH, SEARCH_PATH, BOOKMARKS_PATH];
  return !pathsList.find((path) => path === pathname);
}

function isNewsSavedPage(pathname) {
  return pathname === BOOKMARKS_PATH;
}

function setPageHeader(pathname) {
  switch (pathname) {
    case HOME_PATH:
      return "Top stories";
    case SEARCH_PATH:
      return "Search results";
    case BOOKMARKS_PATH:
      return "All bookmarks";
    default:
      return "";
  }
}

function checkSubHeaderVisibility(routeName) {
  return (
    !isNewsDetailPage(routeName) && (
      <SubHeaderWrapper>
        <BaseHeader>{setPageHeader(routeName)}</BaseHeader>
        <SortingSection>
          {!isNewsSavedPage(routeName) && (
            <BaseLink to={BOOKMARKS_PATH}>
              <img src={bookmarkIcon} alt="Bookmark Icon" />
              <span>view bookmark</span>
            </BaseLink>
          )}
          <Sorting />
        </SortingSection>
      </SubHeaderWrapper>
    )
  );
}

const SubHeader = () => {
  const location = useLocation();

  return <>{checkSubHeaderVisibility(location.pathname)}</>;
};

export default SubHeader;
