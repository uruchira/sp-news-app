import { lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";

import MainContent from "./MainContent";
import Loading from "./Loading";

import {
  HOME_PATH,
  DETAIL_PATH,
  SEARCH_PATH,
  BOOKMARKS_PATH,
} from "../constants";

const NewsDetailPage = lazy(() => import("../pages/NewsDetailPage"));
const NewsHomePage = lazy(() => import("../pages/NewsHomePage"));
const NewsSavedPage = lazy(() => import("../pages/NewsSavedPage"));
const NewsSearchPage = lazy(() => import("../pages/NewsSearchPage"));

const NoMatchPage = lazy(() => import("../pages/NoMatchPage"));

function AppRoutes() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<MainContent />}>
          <Route index element={<NewsHomePage />} />
          <Route path={HOME_PATH} element={<NewsHomePage />} />
          <Route path={DETAIL_PATH} element={<NewsDetailPage />}>
            <Route path="*" element={<Link to=".." />} />
          </Route>
          <Route path={SEARCH_PATH} element={<NewsSearchPage />} />
          <Route path={BOOKMARKS_PATH} element={<NewsSavedPage />} />
          <Route path="*" element={<NoMatchPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
