import { Link } from "react-router-dom";

import SearchFilter from "../components/SearchFilter";

const PageHeader = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ marginRight: "20px" }}>
        <h1>This is HEADER</h1>
        <Link to="/">News Page</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/bookmarks">Bookmarks Page</Link>
      </div>
      <SearchFilter />
    </div>
  );
};

export default PageHeader;
