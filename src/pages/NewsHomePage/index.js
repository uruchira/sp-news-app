import { useEffect } from "react";

import Sorting from "../../components/Sorting";
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
      <Sorting />
      <br />
      <br />
      <TopNewsSection />
      <br />
      <hr />
      <br />
      <SportNewsSection />
    </>
  );
}

export default ArticleHomePage;
