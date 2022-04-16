import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import useGlobalState from "../../hooks/useGlobalState";
import useClickOutside from "../../hooks/useClickOutside";

import searchIcon from "../../assets/search-icon.svg";
import "./styles.css";

function SearchBox() {
  const searchOuterRef = useRef();
  const navigate = useNavigate();

  const { setSearchText } = useGlobalState();
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  function closeTextbox() {
    setIsOpen(false);
  }

  function handleOnClick() {
    setIsOpen(!isOpen);
  }

  function handleOnChange(event) {
    setSearchTerm(event.target.value);
  }

  useClickOutside(searchOuterRef, closeTextbox);

  function handleOnSubmit(event) {
    event.preventDefault();
    if (!searchTerm) {
      closeTextbox();
    } else {
      setSearchText(searchTerm);
      setSearchTerm("");
      navigate("/search");
    }
  }

  return (
    <div className="sb-search-wrapper">
      <div
        ref={searchOuterRef}
        className={isOpen ? "sb-search sb-search-open" : "sb-search"}
      >
        <input
          type="search"
          className="sb-search-input"
          placeholder="Search all news"
          value={searchTerm}
          onChange={handleOnChange}
        />
        <input
          type="button"
          className="sb-search-submit"
          onClick={handleOnSubmit}
        />
        <span className="sb-icon-search" onClick={handleOnClick}>
          <img src={searchIcon} alt="Search Icon" />
        </span>
      </div>
    </div>
  );
}

export default SearchBox;
