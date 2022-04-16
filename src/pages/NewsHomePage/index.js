import { useEffect } from "react";

import TopNewsSection from "./TopNewsSection";
import SportNewsSection from "./SportNewsSection";

import useGlobalState from "../../hooks/useGlobalState";

function ArticleHomePage() {
  const { sortingOption, setSortingOption } = useGlobalState();

  useEffect(
    () => {
      if (sortingOption === "oldest") setSortingOption("newest");
    }, //eslint-disable-next-line
    []
  );

  return (
    <>
      <TopNewsSection />
      <SportNewsSection />
    </>
  );
}

export default ArticleHomePage;
