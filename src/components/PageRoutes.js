import { lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Loading from "../components/Loading";
import PageLayout from "../components/PageLayout";

const NewsDetailPage = lazy(() => import("../pages/NewsDetailPage"));
const NewsHomePage = lazy(() => import("../pages/NewsHomePage"));
const NewsSavedPage = lazy(() => import("../pages/NewsSavedPage"));
const NewsSearchPage = lazy(() => import("../pages/NewsSearchPage"));

const NoMatchPage = lazy(() => import("../pages/NoMatchPage"));

function PageRoutes() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<PageLayout />}>
          <Route index element={<NewsHomePage />} />
          <Route path="/" element={<NewsHomePage />} />
          <Route path="/search" element={<NewsSearchPage />} />
          <Route path="/bookmarks" element={<NewsSavedPage />} />
          <Route path="/:articleId" element={<NewsDetailPage />}>
            <Route path="*" element={<Link to=".." />} />
          </Route>
          <Route path="*" element={<NoMatchPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default PageRoutes;
