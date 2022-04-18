import { Outlet } from "react-router-dom";

import SubHeader from "./SubHeader";

import { MainContainer } from "../styles/layout";

const MainContent = () => {
  return (
    <MainContainer>
      <SubHeader />
      <Outlet />
    </MainContainer>
  );
};

export default MainContent;
