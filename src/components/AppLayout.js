import { Outlet } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";

const AppLayout = () => {
  return (
    <main>
      <Header />
      <section style={{ minHeight: "80vh" }}>
        <Outlet />
      </section>
      <Footer />
    </main>
  );
};

export default AppLayout;
