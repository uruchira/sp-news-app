import { LoadingWrapper } from "../styles/layout";

import loadingIcon from "../assets/loading.gif";

function Loading() {
  return (
    <LoadingWrapper>
      <img src={loadingIcon} alt="Bookmark Icon" />
    </LoadingWrapper>
  );
}

export default Loading;
