import { Link } from "react-router-dom";

import SearchFilter from "./SearchFilter";
import { HOME_PATH } from "../constants";

const Header = () => {
  return (
    <div style={{ display: "flex", marginBottom: "20px" }}>
      <div className="logo">
        <Link to={HOME_PATH}>The Peak News</Link>
      </div>
      <SearchFilter />
    </div>
  );
};

export default Header;
