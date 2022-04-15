import { Link } from "react-router-dom";

import SubHeader from "./SubHeader";
import SearchFilter from "./SearchFilter";

const Header = () => {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ marginRight: "20px" }}>
          <h1>This is HEADER</h1>
          <Link to="/">News Page</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/bookmarks">Bookmarks Page</Link>
        </div>
        <SearchFilter />
      </div>
      <SubHeader />
    </>
  );
};

export default Header;
