import { useEffect } from "react";

import Sorting from "../../components/Sorting";
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
      <h2>Search Results</h2>
      {searchText ? (
        <>
          <Sorting />
          <br />
          <SearchResultsSection qparams={{ searchText, sortingOption }} />
        </>
      ) : (
        <p>No search text is found</p>
      )}
    </>
  );
}

export default ArticleSearchPage;
