import NewsGrid from "../../components/NewsGrid";

import useArticles from "../../hooks/useArticles";
import useGlobalState from "../../hooks/useGlobalState";

import { BaseSubHeader } from "../../styles/elements";
import { SportNewsWrapper } from "../../styles/layout";

function SportNewsSection() {
  const { sortingOption } = useGlobalState();
  const { status, data, error, isFetching } = useArticles({
    newsType: "sport",
    sortingOption,
    pageSize: 3,
  });

  return (
    <>
      <BaseSubHeader>Sports</BaseSubHeader>
      <SportNewsWrapper>
        <NewsGrid
          status={status}
          error={error}
          isFetching={isFetching}
          newsItems={data?.response.results}
        />
      </SportNewsWrapper>
    </>
  );
}

export default SportNewsSection;
