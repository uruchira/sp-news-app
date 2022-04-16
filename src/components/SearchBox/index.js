import { useState, useRef } from "react";

import useClickOutside from "../../hooks/useClickOutside";

import "./styles.css";

function SearchBox() {
  const clickRef = useRef();
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

  useClickOutside(clickRef, closeTextbox);

  function handleOnSubmit(event) {
    event.preventDefault();
    if (!searchTerm) {
      closeTextbox();
    } else {
      console.log(searchTerm + " is submitted");
    }
  }

  return (
    <div className="sb-search-wrapper">
      <div
        ref={clickRef}
        className={isOpen ? "sb-search sb-search-open" : "sb-search"}
      >
        <input
          type="search"
          className="sb-search-input"
          placeholder="Enter your search term..."
          value={searchTerm}
          onChange={handleOnChange}
        />
        <input
          className="sb-search-submit"
          type="button"
          onClick={handleOnSubmit}
        />
        <span className="sb-icon-search" onClick={handleOnClick}></span>
      </div>
    </div>
  );
}

export default SearchBox;
