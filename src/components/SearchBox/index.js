import { useState } from "react";

import "../../styles.css";

const SearchBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleOnClick() {
    setIsOpen(true);
  }

  function handleOnSubmit(event) {
    event.preventDefault();
    console.log("Form Submitted...");
  }

  return (
    <>
      <div
        id="sb-search"
        className={isOpen ? "sb-search sb-search-open" : "sb-search"}
      >
        <form onSubmit={handleOnSubmit}>
          <input
            className="sb-search-input"
            placeholder="Enter your search term..."
            type="search"
            value=""
            name="search"
            id="search"
          />
          <input className="sb-search-submit" type="button" />
          <span className="sb-icon-search" onClick={handleOnClick}></span>
        </form>
      </div>
    </>
  );
};

export default SearchBox;
