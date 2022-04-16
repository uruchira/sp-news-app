import { Outlet } from "react-router-dom";

import SubHeader from "./SubHeader";

const MainContent = () => {
  return (
    <section style={{ minHeight: "80vh" }}>
      <SubHeader />
      <Outlet />
    </section>
  );
};

export default MainContent;
