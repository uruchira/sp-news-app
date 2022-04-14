import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useGlobalState from "../hooks/useGlobalState";

const SearchFilter = () => {
  const [searchInput, setSearchInput] = useState("");
  const { setSearchText } = useGlobalState();

  const navigate = useNavigate();

  const onSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const onSearchInputSubmit = (event) => {
    event.preventDefault();
    if (searchInput) {
      setSearchText(searchInput);
      setSearchInput("");
      navigate("/search");
    }
  };

  return (
    <div style={{ height: "40px" }}>
      <input type="text" value={searchInput} onChange={onSearchInputChange} />
      <button type="button" onClick={onSearchInputSubmit}>
        Search
      </button>
    </div>
  );
};

export default SearchFilter;
