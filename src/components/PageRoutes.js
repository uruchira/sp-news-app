import { lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Loading from "../components/Loading";
import PageLayout from "../components/PageLayout";

const ArticleDetailPage = lazy(() => import("../pages/ArticleDetailPage"));
const ArticleHomePage = lazy(() => import("../pages/ArticleHomePage"));
const ArticleSavedPage = lazy(() => import("../pages/ArticleSavedPage"));
const ArticleSearchPage = lazy(() => import("../pages/ArticleSearchPage"));

const NoMatchPage = lazy(() => import("../pages/NoMatchPage"));

function PageRoutes() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<PageLayout />}>
          <Route index element={<ArticleHomePage />} />
          <Route path="/" element={<ArticleHomePage />} />
          <Route path="/search" element={<ArticleSearchPage />} />
          <Route path="/bookmarks" element={<ArticleSavedPage />} />
          <Route path="/:articleId" element={<ArticleDetailPage />}>
            <Route path="*" element={<Link to=".." />} />
          </Route>
          <Route path="*" element={<NoMatchPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default PageRoutes;
