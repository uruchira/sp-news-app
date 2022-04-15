import { useEffect } from "react";

import NewsSavedSection from "./NewsSavedSection";

import useGlobalState from "../../hooks/useGlobalState";

const ArticleSavedPage = () => {
  const { sortingOption, setSortingOption } = useGlobalState();

  useEffect(
    () => {
      if (sortingOption === "oldest") setSortingOption("newest");
    }, //eslint-disable-next-line
    []
  );

  return (
    <>
      <h3>All bookmarks</h3>
      <br />
      <NewsSavedSection />
    </>
  );
};

export default ArticleSavedPage;
