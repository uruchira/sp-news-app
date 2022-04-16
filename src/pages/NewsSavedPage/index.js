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

  return <NewsSavedSection />;
};

export default ArticleSavedPage;
