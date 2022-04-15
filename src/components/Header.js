import { Link } from "react-router-dom";

import SearchFilter from "./SearchFilter";

const Header = () => {
  return (
    <div style={{ display: "flex", marginBottom: "20px" }}>
      <div className="logo">
        <Link to="/">The Peak News</Link>
      </div>
      <SearchFilter />
    </div>
  );
};

export default Header;
