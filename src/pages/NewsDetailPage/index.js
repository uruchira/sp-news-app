import { Link, useParams } from "react-router-dom";

import NewsDetailsSection from "./NewsDetailsSection";

function formatArticleId(articleName) {
  return Object.values(articleName).join("/");
}

function ArticleDetailPage() {
  const formattedId = formatArticleId(useParams());

  return (
    <>
      <Link to="/">Back to News Page</Link>
      {formattedId ? (
        <NewsDetailsSection id={formattedId} />
      ) : (
        <p>No Article ID is found</p>
      )}
    </>
  );
}

export default ArticleDetailPage;