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

const SubHeader = () => {
  const location = useLocation();

  return (
    <SubHeaderWrapper>
      <BaseHeader>Top News</BaseHeader>
      <SortingSection>
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
      </SortingSection>
    </SubHeaderWrapper>
  );
};

export default SubHeader;
