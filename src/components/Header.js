import { Link } from "react-router-dom";

import SubHeader from "./SubHeader";
import SearchFilter from "./SearchFilter";

const Header = () => {
  return (
    <>
      <div style={{ display: "flex", marginBottom: "20px" }}>
        <div className="logo">
          <Link to="/">The Peak News</Link>
        </div>
        <SearchFilter />
      </div>
      <SubHeader />
    </>
  );
};

export default Header;
