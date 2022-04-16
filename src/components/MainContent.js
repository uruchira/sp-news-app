import { Outlet } from "react-router-dom";

import SubHeader from "./SubHeader";

import { MainWrapper, MainContainer } from "../styles/layout";

const MainContent = () => {
  return (
    <MainWrapper>
      <MainContainer>
        <SubHeader />
        <Outlet />
      </MainContainer>
    </MainWrapper>
  );
};

export default MainContent;
