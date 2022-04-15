import { useEffect } from "react";

import SearchResultsSection from "./SearchResultsSection";

import useGlobalState from "../../hooks/useGlobalState";

function ArticleSearchPage() {
  const { searchText, sortingOption, setSortingOption } = useGlobalState();

  useEffect(
    () => {
      if (sortingOption === "oldest") setSortingOption("newest");
    }, //eslint-disable-next-line
    []
  );

  return (
    <>
      <h3>Search Results</h3>
      <SearchResultsSection qparams={{ searchText, sortingOption }} />
    </>
  );
}

export default ArticleSearchPage;
