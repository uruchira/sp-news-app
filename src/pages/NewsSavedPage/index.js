import { useEffect } from "react";
import { Link } from "react-router-dom";

import Sorting from "../../components/Sorting";
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
      <Link to="/">Back to News Page</Link>
      <br />
      <p>All bookmarks</p>
      <br />
      <Sorting />
      <br />
      <NewsSavedSection />
    </>
  );
};

export default ArticleSavedPage;
