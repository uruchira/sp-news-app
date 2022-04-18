import AppRoutes from "./AppRoutes";
import Footer from "./Footer";
import Header from "./Header";

import { MainWrapper } from "../styles/layout";

const AppLayout = () => {
  return (
    <>
      <Header />
      <MainWrapper>
        <AppRoutes />
      </MainWrapper>
      <Footer />
    </>
  );
};

export default AppLayout;
